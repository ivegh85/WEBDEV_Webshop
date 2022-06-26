<?php


include("../logic/cartLogic.php");
$cartLogic = new cartLogic();

$token = isset($_COOKIE['cart']) ? $_COOKIE['cart'] : "";
$cartJson = isset($_POST['cart']) ? $_POST['cart'] : exit();
$cartLogic->updateCart($token,$cartJson);