<?php

include("../logic/userLogic.php");
$userLogic = new userLogic();

$userName = isset($_GET['displayUser']) ? $_GET['displayUser'] : "";

$userLogic->showLoggedInUser($userName);