<?php

include("../logic/cartLogic.php");
$cartLogic = new cartLogic();

$cartToken = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";

isset($_GET['productid']) ? $productId = $_GET['productid'] : false;

$cartLogic->addToCart($cartToken,$productId);