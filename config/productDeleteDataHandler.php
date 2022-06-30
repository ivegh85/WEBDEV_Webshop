<?php

include("../logic/productLogic.php");

$permanentProductId="";



//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["productId"]) ? $permanentProductId = $_POST["productId"] : false;

$productLogic =  new ProductLogic();

$result = $productLogic->deleteProducts($permanentProductId);

if ($result == false) {
    response( "POST",400, false);
} else {
    response( "POST",200, true);
}

function response($method, $httpStatus, $data)
{
    header('Content-Type: application/json');
    switch ($method) {
        case "POST":
            http_response_code($httpStatus);
            echo (json_encode($data));
            break;
        default:
            http_response_code(405);
            echo ("Method not supported yet!");
    }
}
