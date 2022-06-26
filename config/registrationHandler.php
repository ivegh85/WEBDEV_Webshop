<?php
include("../logic/RegistrationLogic.php");

$newUserName= "";
$newPassword= "";
$newEmail= "";
$newTitle= "";
$newFirstName= "";
$newLastName= "";
$newAddress= "";
$newCity= "";
$newPostal= "";
$newPaymentType= "";
$newCardNumber= "";


//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["username"]) ? $newUserName = $_POST["username"] : false;
isset($_POST["pw"]) ? $newPassword = $_POST["pw"] : false;
isset($_POST["email"]) ? $newEmail = $_POST["email"] : false;
isset($_POST["title"]) ? $newTitle = $_POST["title"] : false;
isset($_POST["fn"]) ? $newFirstName = $_POST["fn"] : false;
isset($_POST["ln"]) ? $newLastName = $_POST["ln"] : false;
isset($_POST["address"]) ? $newAddress = $_POST["address"] : false;
isset($_POST["city"]) ? $newCity = $_POST["city"] : false;
isset($_POST["zip"]) ? $newPostal = $_POST["zip"] : false;
//isset($_POST["pt"]) ? $newPaymentType = $_POST["pt"] : false;
//isset($_POST["cn"]) ? $newCardNumber = $_POST["cn"] : false;

$logic = new RegistrationLogic();

$result = $logic->registerRequest($newUserName, $newPassword, $newEmail, $newTitle, $newFirstName, $newLastName,
    $newAddress, $newCity, $newPostal, $newPaymentType, $newCardNumber);

if ($result == null) {
    response( "POST",400, null);
} else {
    response( "POST",200, $result);
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
