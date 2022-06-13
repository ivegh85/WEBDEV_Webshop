<?php

include("../logic/productLogic.php");

$method = "";


//set data receiving from ajax function
isset($_GET["method"]) ? $method = $_GET["method"] : false;

$logic = new ProductLogic();
$result = $logic->getTofuVarData();

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