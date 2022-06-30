<?php

include("../logic/orderLogic.php");
$orderLogic = new orderLogic();

$cartToken = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";

$orderLogic->addToOrder($cartToken);