<?php

include ("../models/user.php");

class DataHandler{

    public function loginUserToElement($userID,$username,$role,$mail){

        //crete and return array
        return array(
            "id" => $userID,
            "username" => $username,
            "role" => $role,
            "usermail" => $mail
        );

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

    public function logoutElement($bool){
        //create and return array
        return array(
            "result" => $bool
        );

    }

    public function productList($product_id, $product_name, $description, $price_per_unit, $category){
        //create and return array
        return array(
            "product id" => $product_id,
            "product name" => $product_name,
            "product description" => $description,
            "price" => $price_per_unit,
            "category" => $category
        );

    }

    public function registerUser($bool){

        //create and return array
        return array(
            "success" => $bool

        );

    }


}