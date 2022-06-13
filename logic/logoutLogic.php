<?php

include("../config/dataHandler.php");

class LogoutLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }

    //logout
    function deleteSessionDB($tokenHash) {

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
        $cookieDeadline = $row["created_at"];

        //get current system timestamp
        $date = new DateTime();
        echo $date->getTimestamp();
        $currenttimestamp = date("Y-m-d H:i:s", strtotime($date));

        //check if current time is higher than session expire timestamp
        if($cookieDeadline >= $currenttimestamp){
            $delete = "DELETE FROM session where token='$tokenHash'";
            $stmt = $db_obj->prepare($delete);

            //execute statement
            $stmt->execute();
            //close statement
            $stmt->close();

            $returnLogoutElement = false;
        } else
            $returnLogoutElement = true;

        return $this->dataHandler->logoutElement($returnLogoutElement);
    }

}