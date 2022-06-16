<?php

include("../logic/orderLogic.php");

$method = "";
$order_id = "";

//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["order_id"]) ? $order_id = $_POST["order_id"] : false;

$logic = new OrderLogic();

$logic->deleteProductOrder($order_id);