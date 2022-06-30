<?php

include("../config/dataHandler.php");

class ProductLogic
{

    private $dataHandler;

    function __construct()
    {
        $this->dataHandler = new DataHandler();
    }
//get and return product data
    function getBreadData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'bread'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getPorkData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'pork'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getPastriesData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'pastries'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getRollsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'rolls'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getConfectioneryData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'confectionery'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getPoultryData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'poultry'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getBeefData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'beef'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getSeafoodData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'seafood'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getFruitsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'fruits'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getHerbsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'herbs'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getSaladsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'salads'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getVegetablesData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'vegetables'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getMeatSubData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'meat substitutes'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getMilkSubData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'milk substitutes'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getCheeseSubData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'cheese substitutes'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getTofuVarData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'tofu variations'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getJuicesData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'juices'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getSmoothiesData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'smoothies'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getMilkAndHotChocolateData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'milk and hot chocolate'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getAlcoholicBevData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'alcoholic beverages'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getHealthProdData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'health products'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }


    function getNaturalCosmeticsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE subcategory= 'natural cosmetics'";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function getAllProductsData()
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $db_product_id = '';
        $db_product_name = '';
        $db_description = '';
        $db_price = '';
        $db_rating = '';
        $db_category = '';
        $db_sub_category = '';
        $db_image = '';

        //get data from db
        $sql = "SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products";
        $result = $db_obj->query($sql);

        $responseElement = '';
        $combinedArray[] = '';

        while ($row = $result->fetch_assoc()) {
            $db_product_id = $row["product_id"];
            $db_product_name = $row["productname"];
            $db_description = $row["description"];
            $db_price = $row["price"];
            $db_rating = $row["rating"];
            $db_category = $row["category"];
            $db_sub_category = $row["subcategory"];
            $db_image = "/webshop/res/img/products/" . $row["image"];

            $responseElement = $this->dataHandler->productElement($db_product_id, $db_product_name, $db_description, $db_price, $db_rating, $db_category, $db_sub_category, $db_image);

            $combinedArray2[] = array_merge($responseElement, $combinedArray);
            $combinedArray = $combinedArray2;
        }

        //close db connection
        $db_obj->close();


        return $combinedArray;
    }

    function updateProducts($permanentProductId, $updatedProductname, $updatedDescription, $updatedPrice, $updatedRating, $updatedCategory, $updatedSubcategory, $updatedImage)
    {
        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        $sql = "UPDATE products SET product_id = '$permanentProductId', productname = '$updatedProductname', description = '$updatedDescription', price = '$updatedPrice', rating = '$updatedRating', category = '$updatedCategory', subcategory = '$updatedSubcategory', image = '$updatedImage' WHERE product_id = '$permanentProductId'";

        $db_obj->query($sql);

        //close db connection
        $db_obj->close();
        return true;
        //use prepare function


        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters



        $productId = $permanentProductId;
        $productname = $updatedProductname;
        $description = $updatedDescription;
        $price = $updatedPrice;
        $rating = $updatedRating;
        $category = $updatedCategory;
        $subcategory = $updatedSubcategory;
        $image = $updatedImage;


    }

    function deleteProducts($permanentProductId)
    {

        require('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);

            $sql = "DELETE FROM products WHERE `products`.`product_id` = '$permanentProductId'";

            $db_obj->query($sql);

            //close db connection
            $db_obj->close();
            return true;

        }
    }

    function addToProducts($newProductname, $newDescription, $newPrice, $newRating, $newCategory, $newSubcategory, $newImage)
    {

        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }


        $sql = "INSERT INTO `products` (`productname`,`description`,`price`,`rating`,`category`,`subcategory`, `image`) VALUES (?, ?, ?, ?, ?, ?, ?)";

        //use prepare function
        $stmt = $db_obj->prepare($sql);

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("ssddsss", $productname, $description, $price, $rating, $category, $subcategory, $image);

        $productname = $newProductname;
        $description = $newDescription;
        $price = $newPrice;
        $rating = $newRating;
        $category = $newCategory;
        $subcategory = $newSubcategory;
        $image = $newImage;


        //execute statement
        $stmt->execute();

        //close statement
        $stmt->close();

        //close connection
        $db_obj->close();
        return true;
    }


    function getSearchedProductData($searchedProduct)
    {
        //db connection
        require_once('../config/dbaccess.php');
        $db_obj = new mysqli($host, $user, $password, $database);
        if ($db_obj->connect_error) {
            die("Connection failed: " . $db_obj->connect_error);
        }

        //declare variables
        $productname = '';


        //get data from db
        $stmt = $db_obj->prepare("SELECT product_id, productname, description, price, rating, category, subcategory, image FROM products WHERE productname = ?");

        //"s" stands for string (string datatype is expected) ... i for integer, d for double
        //followed by the variables which will be bound to the parameters
        $stmt->bind_param("s", $searchedProduct);
        $stmt->execute();
        $sql_res = $stmt->get_result(); // get the mysqli result
        $value = $sql_res->fetch_assoc();
        $_GET['productname'] = $value->productname;
    }
}


