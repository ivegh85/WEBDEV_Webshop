<?php
include("../logic/requestLogic.php");

$newUserName= "";
$newPassword= "";
$newEmail= "";
$newTitle= "";
$newFirstName= "";
$newLastName= "";
$newAddress= "";
$newCity= "";
$newPostal= "";


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

$logic = new RequestLogic();

$result = $logic->registerRequest($newUserName, $newPassword, $newEmail, $newTitle, $newFirstName, $newLastName,
    $newAddress, $newCity, $newPostal);

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
