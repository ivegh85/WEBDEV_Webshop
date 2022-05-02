<?php

class user
{
    public $userID;
    public $username;
    public $role;
    public $mail;
    public $title;
    public $firstname;
    public $surname;
    public $address;
    public $postalCode;
    public $city;
    //maybe pw not necessary here?
    public $password;

    //session token
    public $token;
    public $timestamp;
    public $remember;
}

/*function __construct($userId, $username, $role, $mail, $firstname, $surname,$address,$postalCode,$city) {
    /*$this->id = $userId;
    $this->username = $username;
    $this->role = $role;
    $this->email=$mail;
    /*$this->firstname = $firstname;
    $this->surname = $surname;
    $this->address = $address;
    $this->postalCode = $postalCode;
    $this->city = $city;
}*/