<?php

include("../logic/productLogic.php");

$permanentProductId="";
$updatedProductname= "";
$updatedDescription= "";
$updatedPrice= "";
$updatedRating= "";
$updatedCategory= "";
$updatedSubcategory= "";
$updatedImage= "";


//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["productId"]) ? $permanentProductId = $_POST["productId"] : false;
isset($_POST["productname"]) ? $updatedProductname = $_POST["productname"] : false;
isset($_POST["description"]) ? $updatedDescription = $_POST["description"] : false;
isset($_POST["price"]) ? $updatedPrice = $_POST["price"] : false;
isset($_POST["rating"]) ? $updatedRating = $_POST["rating"] : false;
isset($_POST["category"]) ? $updatedCategory = $_POST["category"] : false;
isset($_POST["subcategory"]) ? $updatedSubcategory = $_POST["subcategory"] : false;
isset($_POST["image"]) ? $updatedImage = $_POST["image"] : false;

$productLogic =  new ProductLogic();

$result = $productLogic->updateProducts($permanentProductId, $updatedProductname, $updatedDescription, $updatedPrice, $updatedRating, $updatedCategory, $updatedSubcategory, $updatedImage);

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
