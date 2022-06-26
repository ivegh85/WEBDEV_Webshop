<?php

include ("../models/user.php");
include ("../models/product.php");

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

    public function sessionElement($token, $username, $role, $timestamp, $remember, $state){
        //create and return array
        return array(
            "token" => $token,
            "username" => $username,
            "role" => $role,
            "timestamp" => $timestamp,
            "remember" => $remember,
            "status" => $state
        );
    }

    public function logoutElement($bool){
        //create and return array
        return array(
            "result" => $bool
        );
    }
    public function cartElement($token,$cartQuantity){
        //create and return array
        return array(
            "cartToken" => $token,
            "cartQuantity" => $cartQuantity
        );
    }

    public function ShowCartElement($cartProducts){
        //create and return array
        return array(
            "cartProducts" => $cartProducts,
        );
    }

    public function productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image){
        //create and return array
        return array(
            "productId" => $db_product_id,
            "productname" => $db_product_name,
            "description" => $db_description,
            "price" => $db_price,
            "rating" => $db_rating,
            "category" => $db_category,
            "subcategory" => $db_sub_category,
            "image" => $db_image,
        );
    }

    public function sumCartElement($cartSum){
        //create and return array
        return array(
            "priceSum" => $cartSum,
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
    public function userElement($db_user_name, $db_user_id, $db_role, $db_usermail, $db_title, $db_firstname, $db_surname, $db_postalcode, $db_city, $db_address, $db_created_at, $db_state){
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
            "createDate" => $db_created_at,
            "status" => $db_state
        );
    }


//order management
    public function orderElement($userId, $cart){
        return array(
            "user_id" => $userId,
            "cart" => $cart,
        );
    }




}