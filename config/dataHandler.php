<?php

include ("../models/user.php");

class DataHandler{

    public function loginUserToElement($userID,$username,$role,$mail){
        //create array
        $result = array(
            "id" => $userID,
            "username" => $username,
            "role" => $role,
            "usermail" => $mail
        );

        //return array
        return $result;

    }

    public function registerUserToElement($userID,$username,$role,$mail){
        //create array
        $result = array(
            "id" => $userID,
            "username" => $username,
            "role" => $role,
            "usermail" => $mail
        );

        //return array
        return $result;

    }


}