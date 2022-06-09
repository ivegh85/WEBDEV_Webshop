<?php

include("../config/dataHandler.php");

class LoginLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    function handleRequest($method, $username, $pw, $remember)
    {
        switch ($method) {
            //login
            case "login":

                //check input
                //$usernameChecked = filter_input($username);
                //$typed_password = filter_input($pw);

                //db connection
                require_once('../config/dbaccess.php');
                $db_obj = new mysqli($host, $user, $password, $database);
                if ($db_obj->connect_error) {
                    die("Connection failed: " . $db_obj->connect_error);
                }

                //declare variables
                $db_user_id = '';
                $db_username = '';
                $db_role = '';
                $db_usermail = '';
                $db_state = '';

                //get data from db
                $sql = "SELECT user_id, username, role, password, usermail, state FROM users WHERE username='$username' OR usermail='$username'";

                $result = $db_obj->query($sql);
                if (($result->num_rows > 0) && ($result->num_rows < 2)) {
                    // output data of each row (in this case only 1 row ... situation: unique username)
                    $row = $result->fetch_assoc();
                    //store values into variables
                    $db_user_id = $row["user_id"];
                    $db_username = $row["username"];
                    $hashed_pw = $row["password"];
                    $db_role = $row["role"];
                    $db_usermail = $row["usermail"];
                    $db_state = $row["state"];

                    //verify pw
                    $verified_pw = password_verify($pw, $hashed_pw);
                }

                //return null when wrong username
                if ($db_username == '') {
                    $return = null;
                } else {
                    //check if correct login data (username can be username or mail address)
                    if (($username == $db_username && $pw == $verified_pw) || ($username == $db_usermail && $pw == $verified_pw)) {
                        //admin user: admin/root!2022

                        //create session (write to db)
                        $sql = "INSERT INTO `session` (`token`,`role`,`permanent`) VALUES (?, ?, ?)";
                        //use prepare function
                        $stmt = $db_obj->prepare($sql);
                        //"s" stands for string (string datatype is expected) ... i for integer, d for double
                        //followed by the variables which will be bound to the parameters
                        $stmt->bind_param("sss", $token, $role, $permanent);
                        //Generate a random token for a user session (source: https://thisinterestsme.com/generating-random-token-php/)
                        $pretoken = openssl_random_pseudo_bytes(16);
                        //Convert the binary data into hexadecimal representation.
                        $token = bin2hex($pretoken);
                        //other values for session
                        $role = $db_role;
                        $permanent = $remember;
                        //execute statement
                        $stmt->execute();
                        //close statement
                        $stmt->close();

                        //get expire timestamp for current session
                        $sql = "SELECT created_at FROM session WHERE token='$token'";
                        $result = $db_obj->query($sql);
                        $row = $result->fetch_assoc();
                        $preTimestamp = $row["created_at"];

                        //check if remember me is set and create a specific timestamp for the both options
                        if($remember == "true"){
                            //timestamp = expire time (--> 1 day) - for remember me
                            $timestamp = date("Y-m-d H:i:s", strtotime($preTimestamp . "+ 1 days"));
                        }if($remember == "false"){
                            //timestamp = expire time (--> 30 min)
                            $timestamp = date("Y-m-d H:i:s", strtotime($preTimestamp . "+ 30 minutes"));
                        }

                        //create array element with actual user information (for session) and return it (via data handler)
                        $return = $this->dataHandler->sessionElement($token, $db_username, $db_role, $timestamp, $remember, $db_state);

                        //close db connection
                        $db_obj->close();

                    } else {
                        //return null if password does not match
                        $return = null;

                        //close db connection
                        $db_obj->close();
                    }
                }
                break;


            default:
                $return = null;
                break;
        }
        return $return;
    }


}