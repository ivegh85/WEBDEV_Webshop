<?php

include ("../config/dataHandler.php");

class cartLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();

    }
    function readCart($token,$returnType = 'response'){
        require('../config/dbaccess.php');

        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //1. Step Cookie wird eingesetzt und damit wird die Cart rausgesucht aus der Datenbank
        //2. Step Produkte auslesen die sich in der Cart des Cookies/Users befindet
        //3. Step mit den ProduktId's in der Tabelle Products nach den entsprechenen Detailierten Daten suchen
        //4. Step Alle Detaillierten Daten zusammenfassen in ein Array mit der Product ID namen Anzahl Bild usw.
        //5. Step alles als eine Json als response zurückschicken


        //1. Step Schau erstmal was passiert und geh nochmal alles logisch durch
        //2. Step wenn du eine sache gefunden hast die eigenartig ist
        //3. Step überlege warum es dazu gekommen ist und welche faktoren das ergebnis beinflussen können

        $checkCartExists = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result


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
        $showCartEntries = json_encode(($showCart));
        $result = $this->dataHandler->ShowCartElement($showCartEntries);
        if($returnType == 'response')
        $this->response("GET", 200, $result);
        else{
            return $showCartEntries;
        }

        }


    }


    function readCartQuantity($token)
    {

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


        if ($checkCartExists_res->num_rows > 0) {

            $entryCart = $checkCartExists_res->fetch_assoc();

            $productArray = json_decode($entryCart['product'],true);
            foreach($productArray as $product){
                $cartQuantity += $product['quantity'];
            }

            $result = $this->dataHandler->cartElement($token,$cartQuantity);
            $this->response("GET", 200, $result);



        }else{

            $result = $this->dataHandler->cartElement($token,0);
            $this->response("GET", 200, $result);
        }
    }

    function updateCart($token,$cartJson)
    {

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

        $checkCartExists = "SELECT * FROM cart WHERE sessionid = ? LIMIT 1";
        $stmt = $db_obj->prepare($checkCartExists);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $token);
        $stmt->execute();
        $checkCartExists_res = $stmt->get_result(); // get the mysqli result


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
    public function checkLoggedIn(){
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if(empty($session))return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

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
    public function getUserInfo(){
        $session = isset($_COOKIE['session']) ? $_COOKIE['session'] : '';
        if(empty($session))return false;
        $sessionToken = json_decode($session)->token;
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $userInfo = "SELECT * FROM session WHERE token = ? LIMIT 1";
        $stmt = $db_obj->prepare($userInfo);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $sessionToken);
        $stmt->execute();
        $userInfo_res = $stmt->get_result(); // get the mysqli result


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