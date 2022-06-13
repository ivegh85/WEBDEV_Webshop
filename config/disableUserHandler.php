<?php

include("../logic/userLogic.php");

$method = "";
$user_id = "";


//set data receiving from ajax function
isset($_POST["method"]) ? $method = $_POST["method"] : false;
isset($_POST["user_id"]) ? $user_id = $_POST["user_id"] : false;

$logic = new UserLogic();

$logic->deactivateUser($user_id);
