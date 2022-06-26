function loadBreadEdit(){
    $.ajax({
        type: "GET",
        url: "../config/breadDataHandler.php",
        cache: false,
        data: {method: "getBreadData"},
        dataType: "json",

        success: function (response) {

            //console.log(response);
            $('#productdata').empty();
            $('#productdata').hide();

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div name=\"cartElement\" class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b><p>Category</p></b>"+"<div><select>"+
                    "                    <option>"+ p['category'] + "</option>" +
                    "                    <option value=\"Bread & Pastries\">Bread & Pastries</option>\n" +
                    "                    <option value=\"Meat & Fish\">Meat & Fish</option>" +
                    "                    <option value=\"Fruits & Vegetables\">Fruits & Vegetables</option>\n" +
                    "                    <option value=\"Vegan & Drinks\">Vegan & Drinks</option>\n" +
                    "                    <option value=\"Health & Care\">Health & Care</option></select></div>" + "<br>" +
                    "<b><p>Subcategory</p></b>"+"<div><select>"+
                    "                    <option>"+ p['subcategory'] + "</option>" +
                    "        <optgroup label=\"Bread & Pastries\">" +
                    "                    <option value=\"Pastries\">Pastries</option>\n" +
                    "                    <option value=\"Rolls\">Rolls</option>" +
                    "                    <option value=\"Confectionery\">Confectionery</option>\n" +
                    "        <optgroup label=\"Meat & Fish\">"+
                    "                    <option value=\"Poultry\">Poultry</option>\n" +
                    "                    <option value=\"Pork\">Pork</option>\n" +
                    "                    <option value=\"Beef\">Beef</option>\n" +
                    "                    <option value=\"Seafood\">Seafood</option>\n" +
                    "        <optgroup label=\"Fruits & Vegetables\">"+
                    "                    <option value=\"Fruits\">Fruits</option>\n" +
                    "                    <option value=\"Herbs\">Herbs</option>\n" +
                    "                    <option value=\"Salads\">Salads</option>\n" +
                    "                    <option value=\"Vegetables\">Vegetables</option>\n" +
                    "        <optgroup label=\"Vegan & Drinks\">"+
                    "                    <option value=\"Meat Substitutes\">Meat Substitutes</option>\n" +
                    "                    <option value=\"Milk Substitutes\">Milk Substitutes</option>\n" +
                    "                    <option value=\"Cheese Substitutes\">Cheese Substitutes</option>\n" +
                    "                    <option value=\"Tofu Variations\">Tofu Variations</option>\n" +
                    "                    <option value=\"Juices\">Juices</option>\n" +
                    "                    <option value=\"Smoothies\">Smoothies</option>\n" +
                    "                    <option value=\"Milk and Hot Chocolate\">Milk and Hot Chocolate</option>\n" +
                    "                    <option value=\"Alcoholic Beverages\">Alcoholic Beverages</option>\n" +
                    "        <optgroup label=\"Health & Care\">"+
                    "                    <option value=\"Pastries\">Health Products</option>\n" +
                    "                    <option value=\"Pastries\">Natural Cosmetics</option></select></div>" + "<br>" +
                    "<div><input type=\"hidden\" value=\"" + p["productId"] +"\"></input></div>" +
                    "<div><b><p style=\"text-align: center\">Product Image</p></b>"+"<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<div><input type=\"hidden\" value=\"" + p['image'] +"\"></input></div>" +
                    "<div><b><p style=\"text-align: center\">Name:</p></b>"+"<input style=\"text-align: center\" name ='productname' value=\"" + p["productname"] + "\"></input>"+
                    "<div><b><p style=\"text-align  center\">Description:</p></b>"+"<input style=\"text-align: center\" name ='productdescription' value=\"" + p["description"] + "\"></input>"+
                    "<div><b><p style=\"text-align: center\">Price in EUR:</p></b>"+"<input style=\"text-align: center\" type='number' value=" + parseFloat(p["price"]) + "></input>"+
                    "<div><b><p style=\"text-align: center\">Rating:</p></b>"+ "<input type='number' style=\"text-align: center\" name ='rating' value=" + parseFloat(p["rating"]) + "></input>"+"<br>"+
                    "<br>"+"<button href=\"#\" onclick=\"updateProducts(this);\" class=\"btn btn-primary\">"+"Save Changes"+"</button>"+"<br>"+
                    "<br>"+"<button href=\"#\" onclick=\"deleteProducts(this);\" class=\"btn btn-danger\">"+"Delete"+"</button>"+
                    "</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}





function deleteProducts(element){
    element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML = '';

    var allCartElements = document.getElementsByName('cartElement');
    var deleteCartArray = new Array(6).fill(null);
    allCartElements.forEach(function (element) {

        var inputProductImage = element.getElementsByTagName('img')
        var inputSubcategory = element.getElementsByTagName('select');
        var allInputsOfCardElement = element.getElementsByTagName('input');
        //console.log(allInputsOfCardElement);

        deleteCartArray.push({
            productID: allInputsOfCardElement[0],
            subcategory: inputSubcategory[1],
            image: allInputsOfCardElement[2],
            productname: allInputsOfCardElement[3],
            description: allInputsOfCardElement[4],
            price: allInputsOfCardElement[5],
            rating: allInputsOfCardElement[6],
        });
    });
    console.log(deleteCartArray);
}

function updateProducts() {
    var allCartElements = document.getElementsByName('cartElement');
    var newCartArray = [];
    allCartElements.forEach(function (element) {

        var inputProductImage = element.getElementsByTagName('img')
        var inputCategories = element.getElementsByTagName('select');
        var allInputsOfCardElement = element.getElementsByTagName('input');
        //console.log(allInputsOfCardElement);

        newCartArray.push({
            category: inputCategories[0].value,
            subcategory: inputCategories[1].value,
            productId: allInputsOfCardElement[0].value,
            image: allInputsOfCardElement[1].value,
            productname: allInputsOfCardElement[2].value,
            description: allInputsOfCardElement[3].value,
            price: allInputsOfCardElement[4].value,
            rating: allInputsOfCardElement[5].value,
        });
    });
    console.log(newCartArray);

    $.ajax({
        type: "POST",
        url: "../config/productUpdateDataHandler.php",
        cache: false,
        data: {products: JSON.stringify(newCartArray)},
        dataType: "json",
        success: function (response) {

            console.log(response);


        }
    });


    function loadPorkEdit() {
        $.ajax({
            type: "GET",
            url: "../config/porkDataHandler.php",
            cache: false,
            data: {method: "getPorkData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadPastriesEdit() {
        $.ajax({
            type: "GET",
            url: "../config/pastriesDataHandler.php",
            cache: false,
            data: {method: "getPastriesData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadRollsEdit() {
        $.ajax({
            type: "GET",
            url: "../config/rollsDataHandler.php",
            cache: false,
            data: {method: "getRollsData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadConfectioneryEdit() {
        $.ajax({
            type: "GET",
            url: "../config/confectioneryDataHandler.php",
            cache: false,
            data: {method: "getConfectioneryData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadPoultryEdit() {
        $.ajax({
            type: "GET",
            url: "../config/poultryDataHandler.php",
            cache: false,
            data: {method: "getPoultryData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadBeefEdit() {
        $.ajax({
            type: "GET",
            url: "../config/beefDataHandler.php",
            cache: false,
            data: {method: "getBeefData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }


    function loadSeafoodEdit() {
        $.ajax({
            type: "GET",
            url: "../config/seafoodDataHandler.php",
            cache: false,
            data: {method: "getSeafoodData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadFruitsEdit() {
        $.ajax({
            type: "GET",
            url: "../config/fruitsDataHandler.php",
            cache: false,
            data: {method: "getFruitsData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadHerbsEdit() {
        $.ajax({
            type: "GET",
            url: "../config/herbsDataHandler.php",
            cache: false,
            data: {method: "getHerbsData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadSaladsEdit() {
        $.ajax({
            type: "GET",
            url: "../config/SaladsDataHandler.php",
            cache: false,
            data: {method: "getSaladsData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadVegetablesEdit() {
        $.ajax({
            type: "GET",
            url: "../config/vegetablesDataHandler.php",
            cache: false,
            data: {method: "getVegetablesData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }


    function loadMeatSubEdit() {
        $.ajax({
            type: "GET",
            url: "../config/meatSubDataHandler.php",
            cache: false,
            data: {method: "getMeatSubData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadMilkSubEdit() {
        $.ajax({
            type: "GET",
            url: "../config/milkSubDataHandler.php",
            cache: false,
            data: {method: "getMilkSubData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }


    function loadCheeseSubEdit() {
        $.ajax({
            type: "GET",
            url: "../config/cheeseSubDataHandler.php",
            cache: false,
            data: {method: "getCheeseSubData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadTofuVarEdit() {
        $.ajax({
            type: "GET",
            url: "../config/tofuVarDataHandler.php",
            cache: false,
            data: {method: "getTofuVarData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }


    function loadJuicesEdit() {
        $.ajax({
            type: "GET",
            url: "../config/juicesDataHandler.php",
            cache: false,
            data: {method: "getJuicesData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadSmoothiesEdit() {
        $.ajax({
            type: "GET",
            url: "../config/smoothiesDataHandler.php",
            cache: false,
            data: {method: "getSmoothiesData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadMilkAndHotChocolateEdit() {
        $.ajax({
            type: "GET",
            url: "../config/milkAndHotChocolateDataHandler.php",
            cache: false,
            data: {method: "getMilkAndHotChocolateData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadAlcoholicBevEdit() {
        $.ajax({
            type: "GET",
            url: "../config/alcoholicBevDataHandler.php",
            cache: false,
            data: {method: "getalcoholicBevData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadHealthProdEdit() {
        $.ajax({
            type: "GET",
            url: "../config/healthProdDataHandler.php",
            cache: false,
            data: {method: "getHealthProdData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }

    function loadNaturalCosmeticsEdit() {
        $.ajax({
            type: "GET",
            url: "../config/naturalCosmeticsDataHandler.php",
            cache: false,
            data: {method: "getNaturalCosmeticsData"},
            dataType: "json",

            success: function (response) {

                //console.log(response);
                $('#productdata').empty();
                $('#productdata').hide();

                $.each(response, function (i, p) {
                    $("#productdata").append(
                        "<div class=\"d-flex justify-content-between p-3\">" +
                        "<div class=\"col\">" +
                        "<div class=\"card text-center h-100\" style=\"width: 15rem;\">" +
                        "<div class=\"card-body\">" +
                        "<b>" + p["subcategory"] + "</b>" + "<br>" +
                        "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                        "<h4>" + p["productname"] + "</h4>" +
                        "<h5>" + "<b>" + "€ " + p["price"] + "</h5>" +
                        "<p>" + "Rating: " + p["rating"] + "</p>" +
                        "<button href=\"#\" onclick=\" ('" + p["productId"] + "');\" class=\"btn btn-primary\">" + "Add To Cart" + "</button>" + "</div>" + "</div>" + "</div>" + "</div>");
                });
                $('#productdata').show();

            },
            error: function (e) {
                $("#productdata").text("something went wrong!");
            }
        });
    }
}

