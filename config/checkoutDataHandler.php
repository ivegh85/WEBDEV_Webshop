<?php

include("../logic/cartLogic.php");
$cartLogic = new cartLogic();



if(!$cartLogic->checkLoggedIn()){
    $cartLogic->response("GET", 500, '');
}else{

    $token = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";
    $cartLogic->response("GET", 200, json_encode(['cartData' => $cartLogic->readCart($token,'array'),'userData' => $cartLogic->getUserInfo()]));


}

