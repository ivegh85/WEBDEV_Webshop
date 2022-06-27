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
                    "<b><p>Product ID</p></b>"+
                    "<div><input id='productId' type=\"hidden\" value=\"" + p["productId"] +"\">"+ p['productId'] + "</input></div>" +
                    "<b><p>Category</p></b>"+"<div><select id=\"category\">"+
                    "                    <option>"+ p['category'] + "</option>" +
                    "                    <option value=\"Bread and Pastries\">Bread & Pastries</option>\n" +
                    "                    <option value=\"Meat and Fish\">Meat & Fish</option>" +
                    "                    <option value=\"Fruits and Vegetables\">Fruits & Vegetables</option>\n" +
                    "                    <option value=\"Vegan and Drinks\">Vegan & Drinks</option>\n" +
                    "                    <option value=\"Health and Care\">Health & Care</option></select></div>" +
                    "<b><p>Subcategory</p></b>"+"<div><select id=\"subcategory\">"+
                    "                    <option>"+ p['subcategory'] + "</option>" +
                    "        <optgroup label=\"Bread & Pastries\">" +
                    "                    <option value=\"Bread\">Bread</option>\n" +
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

                    "<div><b><p style=\"text-align: center\">Product Image</p></b>"+"<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<p>Select image to upload:</p>"+
                    "<input className=\"form-control form-control-sm\" id=\"imageName\" type=\"file\">" +
                    "<div><b><p style=\"text-align: center\">Name:</p></b>"+"<input style=\"text-align: center\" name ='productname' value=\"" + p["productname"] + "\" id=\"productname\"></input>"+
                    "<div><b><p style=\"text-align  center\">Description:</p></b>"+"<input style=\"text-align: center\" name ='productdescription' value=\"" + p["description"] + "\" id=\"description\"></input>"+
                    "<div><b><p style=\"text-align: center\">Price in EUR:</p></b>"+"<input style=\"text-align: center\" type='number' id=\"price\" value=" + parseFloat(p["price"]) + " ></input>"+
                    "<div><b><p style=\"text-align: center\">Rating:</p></b>"+ "<input type='number' style=\"text-align: center\" name ='rating' id=\"rating\" value=" + parseFloat(p["rating"]) + " ></input>"+"<br>"+
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


function deleteProducts(element) {

}

function updateProducts() {

    let permanentProductId = document.getElementById("productId").value;
    let updatedProductname = document.getElementById("productname").value;
    let updatedDescription = document.getElementById("description").value;
    let updatedPrice = document.getElementById("price").value;
    let updatedRating = document.getElementById("rating").value;
    let updatedCategory = document.getElementById("category").value;
    let updatedSubcategory = document.getElementById("subcategory").value;

    let oldImage = document.getElementById("imageName").value;
    let updatedImage = oldImage.replace("C:\\fakepath\\", "");

    $.ajax({
        type: "POST",
        async: false,
        url: "../config/productUpdateDataHandler.php",
        data: {productId:permanentProductId, productname:updatedProductname, description:updatedDescription, price :updatedPrice, rating :updatedRating,
            category:updatedCategory, subcategory:updatedSubcategory, image:updatedImage},
        dataType: "json",
        success: function (response) {
            //test log
            console.log(response);

            if(response === true){
                //window.alert("User was created successfully!")
                //window.location.href= "../sites/login.html"
                console.log("Product was added successfully!")

                $(".errorMsg").remove();
                $(".successMsg").remove();
                $("#productAddMessage").append("<p class='successMsg'>Product was updated successfully!</p>");

                //redirect to login
                setTimeout(function (){
                    window.location.href = "../sites/products.html";
                }, 1500);

            } else {
                //window.alert("User is already registered, try again with a different username & email!")
                //window.location.href= "../index.html"

                $(".successMsg").remove();
                $("#productAddMessage").append("<p class='errorMsg'>Product exists already</p>");

            }

        },
        error: function () {
            //show error message if no response (no successful login)
            console.log("mysterious error message")

            $(".successMsg").remove();
            $("#productAddMessage").append("<p class='errorMsg'>An error occurred!</p>");

        }

    });
}


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


