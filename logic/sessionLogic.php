<?php

function checkSessionDB($tokenHash) {

    //db connection
    require_once('../config/dbaccess.php');
    $db_obj = new mysqli($host, $user, $password, $database);
    if ($db_obj->connect_error) {
        die("Connection failed: " . $db_obj->connect_error);
    }

    //get expire timestamp for current session
    $sql = "SELECT created_at FROM session WHERE token='$tokenHash'";
    $result = $db_obj->query($sql);
    $row = $result->fetch_assoc();
    $timestamp = $row["created_at"];

    //get current system timestamp
    $date = new DateTime();
    echo $date->getTimestamp();
    $currenttimestamp = date("Y-m-d H:i:s", strtotime($date));

    //check if current time is higher than session expire timestamp
    if($timestamp < $currenttimestamp){
        //delete
        // ...
    }

    //return value
    // ...
}

?>