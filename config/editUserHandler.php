<?php

include("../logic/requestLogic.php");

$method = "";
$userID = "";
$username = "";
$role = "";
$usermail = "";
$password = "";
$title = "";
$firstname = "";
$surname = "";
$postalcode = "";
$city = "";
$address = "";

//set data receiving from ajax function
isset($_GET["method"]) ? $method = $_GET["method"] : false;
isset($_GET["userID"]) ? $userID = $_GET["userID"] : false;
isset($_GET["username"]) ? $username = $_GET["username"] : false;
isset($_GET["role"]) ? $role = $_GET["role"] : false;
isset($_GET["usermail"]) ? $usermail = $_GET["usermail"] : false;
isset($_GET["password"]) ? $password = $_GET["password"] : false;
isset($_GET["title"]) ? $title = $_GET["title"] : false;
isset($_GET["firstname"]) ? $firstname = $_GET["firstname"] : false;
isset($_GET["surname"]) ? $surname = $_GET["surname"] : false;
isset($_GET["postalcode"]) ? $postalcode = $_GET["postalcode"] : false;
isset($_GET["city"]) ? $city = $_GET["city"] : false;
isset($_GET["address"]) ? $address = $_GET["address"] : false;

$logic = new RequestLogic();

$result = $logic->getUserID($method, $userID);

if ($result == null) {
    response("GET", 400, null);
} else {
    response("GET", 200, $result);
}

//to edit
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