<?php

include ("../config/dataHandler.php");
//include ("../config/dbaccess.php");


class RequestLogic{

    private $dataHandler;

   function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    function handleRequest($method, $username, $pw, $remember)
    {
        switch ($method) {
            case "login":

                //check input
                //$usernameChecked = filter_input($username);
                //$typed_password = filter_input($pw);

                //db connection
                require_once ('../config/dbaccess.php');
                $db_obj = new mysqli($host, $user, $password, $database);
                if ($db_obj->connect_error) {
                    die("Connection failed: " . $db_obj->connect_error);
                }

                //declare variables
                $db_user_id = '';
                $db_username = '';
                $db_role = '';
                $db_usermail = '';

                //get data from db
                $sql = "SELECT user_id, username, role, password, usermail FROM users WHERE username='$username' OR usermail='$username'";

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

                    //verify pw
                    $verified_pw = password_verify($pw, $hashed_pw);
                }

                //return null when wrong username
                if($db_username == '')
                {
                    $return = null;
                }else{
                    //check if correct login data (username can be username or mail address)
                    if (($username == $db_username && $pw == $verified_pw)||($username == $db_usermail && $pw == $verified_pw)) {
                        //admin user: admin/root!2022

                        //create session
                        $_SESSION["valid"] = true;

                        //save some information into session
                        $_SESSION["user_id"] = $db_user_id;
                        $_SESSION["role"] = $db_role;
                        $_SESSION["username"] = $db_username;
                        $_SESSION["remember"] = $remember;

                        //create array element with actual user information and return it (via data handler)
                        $return = $this->dataHandler->loginUserToElement($db_user_id,$db_username,$db_role,$db_usermail);

                        //close db connection
                        $db_obj->close();

                    }else {
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
