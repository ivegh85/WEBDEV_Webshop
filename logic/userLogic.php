<?php

include("../config/dataHandler.php");

class UserLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //data from all users
    function getAllUserData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_user_name = '';
        $db_user_id = '';
        $db_role = '';
        $db_usermail = '';
        $db_title = '';
        $db_firstname = '';
        $db_surname = '';
        $db_postalcode = '';
        $db_city = '';
        $db_address = '';
        $db_created_at = '';
        $db_state = '';

        //get data from db
        $sql = "SELECT user_id, username, role, usermail, title, firstname, surname, postalcode, city, address, created_at, state FROM users";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        //bind data from DB
        while ($row = $result->fetch_assoc()){
            $db_user_name = $row["username"];
            $db_user_id = $row["user_id"];
            $db_role = $row["role"];
            $db_usermail = $row["usermail"];
            $db_title = $row["title"];
            $db_firstname = $row["firstname"];
            $db_surname = $row["surname"];
            $db_postalcode = $row["postalcode"];
            $db_city = $row["city"];
            $db_address = $row["address"];
            $db_created_at = $row["created_at"];
            $db_state = $row["state"];

           //return object
            $responseElement = $this->dataHandler->userElement($db_user_name, $db_user_id, $db_role, $db_usermail, $db_title, $db_firstname, $db_surname, $db_postalcode, $db_city, $db_address, $db_created_at, $db_state);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;


        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    //deactivate user
    function deactivateUser($userId){

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //update db
        $sql = "UPDATE users SET state='inactive' WHERE user_id=$userId";
        $db_obj->query($sql);

        //close db connection
        $db_obj->close();

    }

    //deactivate user
    function activateUser($userId){

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //update db
        $sql = "UPDATE users SET state='active' WHERE user_id=$userId";
        $db_obj->query($sql);

        //close db connection
        $db_obj->close();

    }

    //get logged in user
    function showLoggedInUser($db_user_id)
    {

        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }
        $db_user_name = "";
        $stmt = $db_obj->prepare("SELECT username FROM users WHERE user_id = ? LIMIT 1");
        $result = $db_obj->query($stmt);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $db_user_id);
        $stmt->execute();
        $sql_res = $stmt->get_result(); // get the mysqli result
        $value = $sql_res->fetch_assoc();
        $_GET['username'] = $value->userElement($db_user_id, $db_user_name);

    }


}