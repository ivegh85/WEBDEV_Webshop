<?php

include("../logic/productLogic.php");

$productLogic = new ProductLogic();

//set data receiving from ajax function

$productId = isset($_GET['products']) ? $_GET['cart'] : exit();
$productsJson = isset($_POST["products"]) ? $products = $_POST["products"] : "";


$productLogic->updateProducts($productsJson);



