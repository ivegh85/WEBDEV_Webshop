<?php
include("../logic/ProfileLogic.php");

$userNameUpdate= "";
$passwordUpdate= "";
$emailUpdate= "";
$titleUpdate= "";
$firstNameUpdate= "";
$lastNameUpdate= "";
$addressUpdate= "";
$cityUpdate= "";
$postalCodeUpdate= "";

//set data receiving from ajax function
isset($_POST["username"]) ? $userNameUpdate = $_POST["username"] : false;
isset($_POST["pw"]) ? $passwordUpdate = $_POST["pw"] : false;
isset($_POST["email"]) ? $emailUpdate = $_POST["email"] : false;
isset($_POST["title"]) ? $titleUpdate = $_POST["title"] : false;
isset($_POST["fn"]) ? $firstNameUpdate = $_POST["fn"] : false;
isset($_POST["ln"]) ? $lastNameUpdate = $_POST["ln"] : false;
isset($_POST["address"]) ? $addressUpdate = $_POST["address"] : false;
isset($_POST["city"]) ? $cityUpdate = $_POST["city"] : false;
isset($_POST["zip"]) ? $postalCodeUpdate = $_POST["zip"] : false;


$logic = new ProfileLogic();

$result = $logic->updateUserProfile($userNameUpdate, $passwordUpdate, $emailUpdate, $titleUpdate, $firstNameUpdate, $lastNameUpdate,
    $addressUpdate, $cityUpdate, $postalCodeUpdate);

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
