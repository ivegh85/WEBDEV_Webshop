<?php

include("../config/dataHandler.php");

class OrderLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //data from all users
    function userOrderData($user_id)
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_order_id = '';
        $db_order_package = '';
        $db_user_id = '';
        $db_product_id = '';
        $db_product = '';
        $db_product_price = '';
        $db_created_at = '';

        //get data from db
        $sql = "SELECT order_id, order_package, user_id, product_id, product, product_price, created_at FROM orders WHERE user_id='$user_id'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_order_id = $row["order_id"];
            $db_order_package = $row["order_package"];
            $db_user_id = $row["user_id"];
            $db_product_id = $row["product_id"];
            $db_product = $row["product"];
            $db_product_price = $row["product_price"];
            $db_created_at = $row["created_at"];

            $responseElement = $this->dataHandler->orderElement($db_order_id, $db_order_package, $db_user_id, $db_product_id, $db_product, $db_product_price, $db_created_at);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;

        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

}