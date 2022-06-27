<?php

include("../config/dataHandler.php");

class ProfileLogic
{
    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //get user data
    function getUserProfile($loggedInUser)
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
                $sql = "SELECT user_id, username, role, usermail, title, firstname, surname, postalcode, city, address, created_at, state FROM users WHERE username='$loggedInUser'";
                $result = $db_obj->query($sql);

                $responseElement = '';
                $combinedArray[] = '';

                while ($row = $result->fetch_assoc()) {
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

                    $responseElement = $this->dataHandler->userElement($db_user_name, $db_user_id, $db_role, $db_usermail, $db_title, $db_firstname, $db_surname, $db_postalcode, $db_city, $db_address, $db_created_at, $db_state);

                    $combinedArray2[] = array_merge($responseElement, $combinedArray);
                    $combinedArray = $combinedArray2;


                }

                //close db connection
                $db_obj->close();


                return $combinedArray;

    }

    //update User Profile
    function updateUserProfile($userNameUpdate, $passwordUpdate, $emailUpdate, $titleUpdate, $firstNameUpdate, $lastNameUpdate,
                               $addressUpdate, $cityUpdate, $postalCodeUpdate) {

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //insert data to db
        //$sql = "UPDATE `users` SET `password`='$passwordUpdate',`usermail`='$emailUpdate',`title`='$titleUpdate',`firstname`='$firstNameUpdate',`surname`='$lastNameUpdate',`postalcode`='$postalCodeUpdate',`city`='$cityUpdate',`address`='$addressUpdate' WHERE username = '$userNameUpdate'";
        $sql = "UPDATE `users` SET `password`=?,`usermail`=?,`title`=?,`firstname`=?,`surname`=?,`postalcode`=?,`city`=?,`address`=? WHERE username = '$userNameUpdate'";
        //$sql = "UPDATE `users` SET `password`='?',`usermail`='?',`title`='?',`firstname`='?',`surname`='?',`postalcode`='?',`city`='?',`address`='?' WHERE username = '$userNameUpdate'";
        $stmt = $db_obj->prepare($sql);

        $stmt->bind_param("sssssiss", $pass, $mail, $title, $fname, $sname, $pcode, $city, $address);

        $hash_pw = password_hash($passwordUpdate, PASSWORD_DEFAULT);

        $pass = $hash_pw;
        $mail = $emailUpdate;
        $title = $titleUpdate;
        $fname = $firstNameUpdate;
        $sname = $lastNameUpdate;
        $pcode = $postalCodeUpdate;
        $city = $cityUpdate;
        $address = $addressUpdate;

        //execute statement
        $stmt->execute();

        //close statement
        $stmt->close();

        $responseElement = '';
        $combinedArray[] = '';

        $responseElement = $this->dataHandler->updateUserElement($mail);

        $combinedArray2[] = array_merge($responseElement, $combinedArray);
        $combinedArray = $combinedArray2;


        //close db connection
        $db_obj->close();


        return $combinedArray;

    }
}