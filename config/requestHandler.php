<?php
include("../logic/requestLogic.php");

$username = "";
$pw = "";
$method = "";
$remember = false;


//set data receiving from ajax function
isset($_GET["method"]) ? $method = $_GET["method"] : false;
isset($_GET["username"]) ? $username = $_GET["username"] : false;
isset($_GET["pw"]) ? $pw = $_GET["pw"] : false;
isset($_GET["remember"]) ? $remember = $_GET["remember"] : false;

$logic = new RequestLogic();
$result = $logic->handleRequest($method, $username, $pw, $remember);
if ($result == null) {
    response("GET", 400, null);
} else {
    response("GET", 200, $result);
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
