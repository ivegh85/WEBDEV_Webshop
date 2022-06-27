<?php

include("../config/dataHandler.php");

class RegistrationLogic
{
    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    function registerRequest($newUserName, $newPassword, $newEmail, $newTitle, $newFirstName, $newLastName,
                             $newAddress, $newCity, $newPostal, $newPaymentType, $newCardNumber)
    {

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $checkAlreadyRegistrered = "SELECT username, usermail FROM users WHERE username = '$newUserName' OR usermail = '$newEmail'";
        $res_checkAlreadyRegistered = $db_obj->query($checkAlreadyRegistrered);

        $responseElement = '';
        $combinedArray[] = '';

        if ($res_checkAlreadyRegistered->num_rows > 0) {

            $db_obj->close();

            $responseElement = $this->dataHandler->registerUserElement(null);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;

            return $combinedArray;

        } else {
            $sqlUsers = "INSERT INTO `users` (`username`,`role`,`password`,`usermail`,`title`,`firstname`,`surname`,`postalcode`,`city`,`address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            //$sqlPayment ="INSERT INTO `payment_data` (`customer_username`,`payment_type`,`card_number`) VALUES (?, ?, ?)";

            //use prepare function
            $stmtUsers = $db_obj->prepare($sqlUsers);
            //$stmtPayment = $db_obj->prepare($sqlPayment);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $stmtUsers->bind_param("sssssssiss", $uname, $role, $pass, $mail, $title, $fname, $sname, $pcode, $city, $address);
            //$stmtPayment->bind_param("ssi", $cust_uname, $ptype, $cnumber);

            $hash_pw = password_hash($newPassword, PASSWORD_DEFAULT);

            $uname = $newUserName;
            $cust_uname = $newUserName;
            $role = "customer";
            $pass = $hash_pw;
            $mail = $newEmail;
            $title = $newTitle;
            $fname = $newFirstName;
            $sname = $newLastName;
            $pcode = $newPostal;
            $city = $newCity;
            $address = $newAddress;
            //$ptype = $newPaymentType;
            //$cnumber = $newCardNumber;

            //execute statement
            $stmtUsers->execute();
            //$stmtPayment->execute();

            //close statement
            $stmtUsers->close();
            //$stmtPayment->close();

            $responseElement = $this->dataHandler->registerUserElement($uname);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;

            //close connection
            $db_obj->close();

        }

        return $combinedArray;

    }
}