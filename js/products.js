//breadAndPastries
function addCart(productId){
    $.ajax({
        type: "GET",
        url: "../config/cartDataHandler.php",
        cache: false,
        data: {productid: productId},
        dataType: "json",
        success: function (response) {
            var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
            document.cookie =  "cart=" + response['cartToken'] + ";expires=" + expires + ";path=/";
            document.getElementById('card-quantity').innerHTML = response['cartQuantity'];

        },
    });
}

function loadBread(){
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
                "<div class=\"d-flex justify-content-between p-3\">"+
                "<div class=\"col\">"+
                "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                "<div class=\"card-body\">"+
                "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                "<h4>"+p["productname"]+"</h4>"+
                "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                "<p>"+"Rating: "+p["rating"]+"</p>"+
                "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}


function loadPork(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadPastries(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadRolls(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadConfectionery(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadPoultry(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadBeef(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}


function loadSeafood(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadFruits(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadHerbs(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadSalads(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadVegetables(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}


function loadMeatSub(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadMilkSub(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}


function loadCheeseSub(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadTofuVar(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}


function loadJuices(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadSmoothies(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadMilkAndHotChocolate(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadAlcoholicBev(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadHealthProd(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

function loadNaturalCosmetics(){
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

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}

$("#btnAddProductClicked").click(function (){
    //interrupt submit in case input is missing or incorrect
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })();
    addProduct();
});


function addProduct() {

    let newProductname = document.getElementById("productname").value;
    let newDescription = document.getElementById("description").value;
    let newPrice = document.getElementById("price").value;
    let newRating = document.getElementById("rating").value;
    let newCategory = document.getElementById("category").value;
    let newSubcategory = document.getElementById("subcategory").value;

    let oldImage = document.getElementById("imageName").value;
    let newImage = oldImage.replace("C:\\fakepath\\", "");




    $.ajax({
        type: "POST",
        async: false,
        url: "../config/addProductDataHandler.php",
        data: {productname: newProductname, description: newDescription, price : newPrice, rating : newRating,
            category: newCategory, subcategory: newSubcategory, image: newImage},
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
                $("#productAddMessage").append("<p class='successMsg'>Product was added successfully!</p>");

                //redirect to login
                setTimeout(function (){
                    window.location.href = "../sites/productManagement.html";
                }, 1500);

            } else {
                //window.alert("User is already registered, try again with a different username & email!")
                //window.location.href= "../index.html"
                console.log("User is already registered, try again with a different username & email!")

                $(".successMsg").remove();
                $("#productAddMessage").append("<p class='errorMsg'>Product is already in database</p>");

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



function loadAllProducts(){
    $.ajax({
        type: "GET",
        url: "../config/allProductsDataHandler.php",
        cache: false,
        data: {method: "getAllProductsData"},
        dataType: "json",

        success: function (response) {

            //console.log(response);
            $('#productdata').empty();
            $('#productdata').hide();

            $.each(response, function(i, p) {
                $("#productdata").append(
                    "<div class=\"d-flex justify-content-between p-3\">"+
                    "<div class=\"col\">"+
                    "<div class=\"card text-center h-100\" style=\"width: 15rem;\">"+
                    "<div class=\"card-body\">"+
                    "<b>"+p["subcategory"]+ "</b>"+"<br>"+
                    "<img style=\"width: 100%; object-fit: cover\" src ='" + p["image"] + "'></img>" +
                    "<h4>"+p["productname"]+"</h4>"+
                    "<h5>"+"<b>"+"€ "+p["price"]+"</h5>"+
                    "<p>"+"Rating: "+p["rating"]+"</p>"+
                    "<button href=\"#\" onclick=\"addCart('" + p["productId"] + "');\" class=\"btn btn-primary\">"+"Add To Cart"+"</button>"+"</div>"+"</div>"+"</div>"+"</div>");
            });
            $('#productdata').show();

        },
        error: function (e) {
            $("#productdata").text("something went wrong!");
        }
    });
}