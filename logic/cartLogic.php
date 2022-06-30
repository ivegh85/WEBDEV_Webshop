<?php

include ("../config/dataHandler.php");

class cartLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();

    }

    //check cart content
    function readCart($token,$returnType = 'response'){
        require('../config/dbaccess.php');

        //db connection
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //check if cart exists
        $checkCartExists = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result

        //when card exists query for products
        if ($checkCartExists_res->num_rows > 0) {

            $entryCart = $checkCartExists_res->fetch_assoc();

            $productArray = json_decode($entryCart['product'],true);
            $showCart = [];
            foreach ($productArray as $entryCart) {
                $readProductId = $entryCart['productId'];
                $readProducts = "SELECT * FROM products WHERE product_id = ?";

                $stmt = $db_obj->prepare($readProducts);
                //"s" stands for string (string datatype is expected) ... i for integer, d for double
                //followed by the variables which will be bound to the parameters
                $stmt->bind_param("i", $readProductId);
                $stmt->execute();
                $readProducts_res = $stmt->get_result(); // get the mysqli result
                $productSingleArray = $readProducts_res->fetch_assoc();
                $productSingleArray += ['quantity' => $entryCart['quantity']];
                array_push( $showCart,$productSingleArray);


            }
            //return json
        $showCartEntries = json_encode(($showCart));
        $result = $this->dataHandler->ShowCartElement($showCartEntries);

        if($returnType == 'response')
        $this->response("GET", 200, $result);
        else{
            return $showCartEntries;

        }

        }


    }


    // check cart product quantity
    function readCartQuantity($token)
    {

        //check if cart exists
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }
        $cartQuantity = 0;
        $checkCartExists = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result

        //when cart exists write quantity of products into an array and return it
        if ($checkCartExists_res->num_rows > 0) {

            $entryCart = $checkCartExists_res->fetch_assoc();

            $productArray = json_decode($entryCart['product'],true);
            foreach($productArray as $product){
                $cartQuantity += $product['quantity'];
            }

            $result = $this->dataHandler->cartElement($token,$cartQuantity);
            $this->response("GET", 200, $result);



        }else{
            //return qty zero
            $result = $this->dataHandler->cartElement($token,0);
            $this->response("GET", 200, $result);
        }
    }

    //cart update
    function updateCart($token,$cartJson)
    {

        //update cart table with products json and session id token
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }
        $sql = "UPDATE `cart` SET product = ? WHERE sessionid = ?";

        //use prepare function
        $stmt = $db_obj->prepare($sql);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters

        $stmt->bind_param("ss", $cartJson,$token);
        $stmt->execute();


        $db_obj->close();
    }

    //create new cart entry
    function addToCart($token,$productId)
    {
        $cartQuantity = 0;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }
        if(empty($token)){
            $pretoken = openssl_random_pseudo_bytes(16);
            //Convert the binary data into hexadecimal representation.
            $token = bin2hex($pretoken);

        }

        //check if cart already exists
        $checkCartExists = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result


        //when cart doesn't exist, create product array from json
        if ($checkCartExists_res->num_rows > 0) {

            $entryCart = $checkCartExists_res->fetch_assoc();

            $productArray = json_decode($entryCart['product'],true);
            $productNewArray = [];
            $checkProductExists = false;
            foreach($productArray as $product){
                $cartQuantity += $product['quantity'];
                if($product['productId'] == $productId){
                    $checkProductExists = true;
                    $product['quantity']++;
                }

             array_push($productNewArray,$product);
            }
            //update products in existing cart entry
            if(!$checkProductExists)array_push($productArray,['productId' => $productId,'quantity' => 1]);
            else $productArray = $productNewArray;

            $cartQuantity++;

            $sql = "UPDATE `cart` SET product = ? WHERE sessionid = ?";

            //use prepare function
            $stmt = $db_obj->prepare($sql);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $productJson = json_encode($productArray);
            $stmt->bind_param("ss", $productJson,$token);
            $stmt->execute();


            $db_obj->close();


        } else {
            //insert products into cart table
            $sql = "INSERT INTO `cart` (`sessionid`,`product`) VALUES (?, ?)";

            //use prepare function
            $stmt = $db_obj->prepare($sql);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $productJson = json_encode([['productId' => $productId,'quantity' => 1]]);
            $stmt->bind_param("ss", $token,$productJson);
            $stmt->execute();
            $cartQuantity = 1;
        }
        $result = $this->dataHandler->cartElement($token,$cartQuantity);
        $this->response("GET", 200, $result);
    }

    //response function
    function response($method, $httpStatus, $data)
    {
        header('Content-Type: application/json');
        switch ($method) {
            case "GET":
                http_response_code($httpStatus);
                echo(json_encode($data));
                break;
            default:
                http_response_code(405);
                echo("Method not supported yet!");
        }
    }

    //check active session
    public function checkLoggedIn(){
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if(empty($session))return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //compare session table with current session id token
        $checkCartExists = "SELECT * FROM session WHERE token = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $sessionToken);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result


        if ($checkCartExists_res->num_rows > 0) return true;


        return false;

    }

    // return user information
    public function getUserInfo(){
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if(empty($session))return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //select session with same session id token
        $userInfo = "SELECT * FROM session WHERE token = ? LIMIT 1";
        $stmt = $db_obj->prepare($userInfo);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $sessionToken);
        $stmt->execute();
        $userInfo_res = $stmt->get_result(); // get the mysqli result

        //get user information from users table
        if ($userInfo_res->num_rows > 0) {
            $userId = $userInfo_res->fetch_assoc()['user_id'];
            $userInfo = "SELECT usermail,title,firstname,surname,postalcode,city,address FROM users WHERE user_id = ? LIMIT 1";
            $stmt = $db_obj->prepare($userInfo);

            //"s" stands for string (string datatype is expected) ... i for integer, d for double
            //followed by the variables which will be bound to the parameters
            $stmt->bind_param("i",$userId );
            $stmt->execute();
            $userInfo_res = $stmt->get_result(); // get the mysqli result
            return $userInfo_res->fetch_assoc();
        }


        return false;

    }
}