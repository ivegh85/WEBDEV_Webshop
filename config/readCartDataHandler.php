<?php


include("../logic/cartLogic.php");
$cartLogic = new cartLogic();

$token = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";

$cartLogic->readCart($token);