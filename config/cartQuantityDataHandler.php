<?php

include("../logic/cartLogic.php");
$cartLogic = new cartLogic();

$cartToken = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";

$cartLogic->readCartQuantity($cartToken);