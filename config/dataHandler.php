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

    public function sessionElement($token, $username, $role, $timestamp, $remember){
        //create and return array
        return array(
            "token" => $token,
            "username" => $username,
            "role" => $role,
            "timestamp" => $timestamp,
            "remember" => $remember
        );

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