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

    public function productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_category, $db_sub_category, $db_image){
        //create and return array
        return array(
            "productId" => $db_product_id,
            "productname" => $db_product_name,
            "description" => $db_description,
            "price" => $db_price,
            "category" => $db_category,
            "subcategory" => $db_sub_category,
            "image" => $db_image,
        );
    }

    public function cartElement($db_cart_id, $db_product_id, $db_product, $db_quantity, $db_price, $db_create){
        //create and return array
        return array(
            "cartId" => $db_cart_id,
            "productId" => $db_product_id,
            "product" => $db_product,
            "quantity" => $db_quantity,
            "price" => $db_price,
            "createDate" => $db_create,
        );
    }


    public function registerUserElement($uname){

        //create and return array
        return array(
            "username" => $uname

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
public function orderElement($order_id, $order_package, $user_id, $product_id, $product, $product_price, $created_at){
        return array(
            "orderID" => $order_id,
            "orderPackage" => $order_package,
            "userID" => $user_id,
            "productID" => $product_id,
            "product" => $product,
            "productPrice" => $product_price,
            "orderDate" => $created_at
        );
}




}