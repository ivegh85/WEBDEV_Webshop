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


    //------------------------user management
    //id element
    public function idElement($username, $userID){
        //create and return array
        return array(
            "username" => $username,
            "id" => $userID
        );

    }


    //user data
    public function userElement($db_user_name, $db_user_id, $db_role, $db_usermail, $db_title, $db_firstname, $db_surname, $db_postalcode, $db_city, $db_address, $db_created_at){
        return array(
            "username" => $db_user_name,
            "id" => $db_user_id,
            "role" => $db_role,
            "usermail" => $db_usermail,
            "title" => $db_title,
            "firstname" => $db_firstname,
            "surname" => $db_surname,
            "postalcode" => $db_postalcode,
            "city" => $db_city,
            "address" => $db_address,
            "createDate" => $db_created_at
        );
}


}