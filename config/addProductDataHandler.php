<?php
include("../logic/productLogic.php");

$newProductname= "";
$newDescription= "";
$newPrice= "";
$newRating= "";
$newCategory= "";
$newSubcategory= "";
$newImage= "";


//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["productname"]) ? $newProductname = $_POST["productname"] : false;
isset($_POST["description"]) ? $newDescription = $_POST["description"] : false;
isset($_POST["price"]) ? $newPrice = $_POST["price"] : false;
isset($_POST["rating"]) ? $newRating = $_POST["rating"] : false;
isset($_POST["category"]) ? $newCategory = $_POST["category"] : false;
isset($_POST["subcategory"]) ? $newSubcategory = $_POST["subcategory"] : false;
isset($_POST["image"]) ? $newImage = $_POST["image"] : false;


$logic = new ProductLogic();

$result = $logic->addToProducts($newProductname, $newDescription, $newPrice, $newRating, $newCategory, $newSubcategory, $newImage);

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
