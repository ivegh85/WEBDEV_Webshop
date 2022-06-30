<?php

include("../config/dataHandler.php");

class orderLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //add item to order
    function addToOrder($token)
    {
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if (empty($session)) return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $checkCartId = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartId);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartId_res = $stmt->get_result(); // get the mysqli result

        if ($checkCartId_res->num_rows > 0) {

            $entryOrder = $checkCartId_res->fetch_assoc()['product'];

            $checkUserExists = "SELECT user_id FROM session WHERE token = ? LIMIT 1";
            $stmt = $db_obj->prepare($checkUserExists);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $stmt->bind_param("s", $sessionToken);
            $stmt->execute();

            $checkUserExists_res = $stmt->get_result(); // get the mysqli result

            if ($checkUserExists_res->num_rows > 0) {
                $userId = $checkUserExists_res->fetch_assoc()['user_id'];


                $productJson = $entryOrder;

                $sql = "INSERT INTO `orders` (`user_id`, cart) VALUES (?, ?)";

                //use prepare function
                $stmt = $db_obj->prepare($sql);

                //"s" stands for string (string datatype is expected) ... i for integer, d for double
                //followed by the variables which will be bound to the parameters
                $stmt->bind_param("is", $userId, $productJson);

                //execute statement
                $stmt->execute();

                $checkCartId2 = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
                $stmt = $db_obj->prepare($checkCartId2);

                //"s" stands for string (string datatype is expected) ... i for integer, d for double
                //followed by the variables which will be bound to the parameters
                $stmt->bind_param("s", $token);
                $stmt->execute();
                $checkCartId2_res = $stmt->get_result(); // get the mysqli result

                if ($checkCartId2_res->num_rows > 0) {

                    $deleteCart = $checkCartId2_res->fetch_assoc()['cart_id'];

                    $delete = "DELETE FROM `cart` WHERE `cart_id` ='$deleteCart'";
                    $stmt = $db_obj->prepare($delete);

                    //execute statement
                    $stmt->execute();

                    //close db connection
                    $db_obj->close();
                }

            }
        }

    }

    //show contents of order
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

        //check if user exists
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
                $quantityArray = $productArray[2]['quantity'];


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
                    $products[] = '';
                    $orders[] ='';

                    array_push($products, $productSingleArray, $quantityArray);
                    array_push($order, $orderIdArray, $orderDateArray);

                }

                $orderData = json_encode(['orderData' => $order,'productData' => $products]);

                return $orderData;

            }

        }
    }




    //delete product from order
    function deleteProductOrder($order_id)
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $delete = "DELETE FROM orders where order_id='$order_id'";
        $stmt = $db_obj->prepare($delete);

        //execute statement
        $stmt->execute();
        //close statement
        $stmt->close();

        //close db connection
        $db_obj->close();
    }
}