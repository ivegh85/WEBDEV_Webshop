<?php

include("../config/dataHandler.php");

class orderLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    function showOrder($returnType = 'response')
    {
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if (empty($session)) return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $checkUserExists = "SELECT user_id FROM session WHERE token = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkUserExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $sessionToken);
        $stmt->execute();

        $checkUserExists_res = $stmt->get_result(); // get the mysqli result

        if ($checkUserExists_res->num_rows > 0) {
            $userId = $checkUserExists_res->fetch_assoc()['user_id'];

            $checkOrderId = "SELECT * FROM orders WHERE user_id = ? LIMIT 1";
            $stmt = $db_obj->prepare($checkOrderId);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $stmt->bind_param("i", $userId);
            $stmt->execute();
            $checkOrderId_res = $stmt->get_result(); // get the mysqli result

            if ($checkOrderId_res->num_rows > 0) {
                $entryOrder = $checkOrderId_res->fetch_assoc();
                $orderIdArray = $entryOrder['order_id'];
                $orderDateArray = $entryOrder['created_at'];
                $productArray = json_decode($entryOrder['cart'], true);

                foreach ($productArray as $entryOrder) {
                    $readProductId = $entryOrder['productId'];
                    $readProducts = "SELECT `productname`, `price` FROM products WHERE product_id = ?";

                    $stmt = $db_obj->prepare($readProducts);
                    //"s" stands for string (string datatype is expected) ... i for integer, d for double
                    //followed by the variables which will be bound to the parameters
                    $stmt->bind_param("i", $readProductId);
                    $stmt->execute();
                    $readProducts_res = $stmt->get_result(); // get the mysqli result
                    $productSingleArray = $readProducts_res->fetch_assoc();

                }

                $orderData = json_encode(['orderId' => $orderIdArray, 'orderDate' => $orderDateArray, 'productData' => $productSingleArray]);

                return $orderData;

            }

        }
    }