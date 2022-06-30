<?php

include("../logic/productLogic.php");

$method="";
$searchedProduct="";



//set data receiving from ajax function
isset($_GET["method"]) ? $method = $_GET["method"] : false;
isset($_GET["productname"]) ? $searchedProduct = $_GET["productname"] : false;


$productLogic =  new ProductLogic();
$result = $productLogic->getSearchedProductData($searchedProduct);

if ($result == false) {
    response( "POST",400, false);
} else {
    response( "POST",200, true);
}

function response($method, $httpStatus, $data)
{
    header('Content-Type: application/json');
    switch ($method) {
        case "GET":
            http_response_code($httpStatus);
            echo (json_encode($data));
            break;
        default:
            http_response_code(405);
            echo ("Method not supported yet!");
    }
}
