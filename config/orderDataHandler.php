<?php

include("../logic/orderLogic.php");

$method = "";
$user_id = "";


//set data receiving from ajax function
isset($_GET["method"]) ? $method = $_GET["method"] : false;
isset($_GET["user_id"]) ? $user_id = $_GET["user_id"] : false;

$logic = new OrderLogic();

$result = $logic->userOrderData($user_id);

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
            echo(json_encode($data));
            break;
        default:
            http_response_code(405);
            echo("Method not supported yet!");
    }
}