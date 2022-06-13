<?php

include ("../config/dataHandler.php");

class cartLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    function registerRequest($newUserName, $newPassword, $newEmail, $newTitle, $newFirstName, $newLastName,
                             $newAddress, $newCity, $newPostal)
    {

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $checkAlreadyRegistrered = "SELECT product_id, product FROM users WHERE username = '$newUserName' OR usermail = '$newEmail'";
        $res_checkAlreadyRegistered = $db_obj->query($checkAlreadyRegistrered);

        if ($res_checkAlreadyRegistered->num_rows > 0) {

            $db_obj->close();
            return false;

        } else {
            $sql = "INSERT INTO `users` (`username`,`role`,`password`,`usermail`,`title`,`firstname`,`surname`,`postalcode`,`city`,`address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            //use prepare function
            $stmt = $db_obj->prepare($sql);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $stmt->bind_param("sssssssiss", $uname, $role, $pass, $mail, $title, $fname, $sname, $pcode, $city, $address);

            $hash_pw = password_hash($newPassword, PASSWORD_DEFAULT);

            $uname = $newUserName;
            $role = "customer";
            $pass = $hash_pw;
            $mail = $newEmail;
            $title = $newTitle;
            $fname = $newFirstName;
            $sname = $newLastName;
            $pcode = $newPostal;
            $city = $newCity;
            $address = $newAddress;

            //execute statement
            $stmt->execute();

            //close statement
            $stmt->close();

            //close connection
            $db_obj->close();
            return true;
        }

    }

}