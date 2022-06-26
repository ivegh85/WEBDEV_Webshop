<?php

include("../config/dataHandler.php");

class orderLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //data from all users
    function addToOrder($userId, $cartId)
    {
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $checkUserId = "SELECT * FROM users WHERE user_id = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkUserId);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("i", $userId);
        $stmt->execute();
        $checkUserId_res = $stmt->get_result(); // get the mysqli result

        if ($checkUserId_res->num_rows > 0) {

            $entryOrder = $checkUserId_res->fetch_assoc();
        }

    }
}