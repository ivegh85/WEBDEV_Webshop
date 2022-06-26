<?php

include("../logic/orderLogic.php");
$orderLogic = new orderLogic();

isset($_GET['cartId']) ? $cartId = $_GET['cartId'] : false;

$orderLogic->addToOrder($cartId);