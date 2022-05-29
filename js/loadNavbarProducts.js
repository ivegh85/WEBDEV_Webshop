//import js script (source: stackoverflow)
function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}
require("../../js/script.js");
require("../../js/cookieHandling.js");

//navbar display according to permissions
function loadNavbarBreadAndPastries(){

    //hide permission elements
    /*$("#navLogout").hide();
    $("#navCurrentUser").hide();
    $("#navEditProducts").hide();
    $("#navEditCustomers").hide();*/

    // $(".loadNavbar").load("../sites/loadNavbarDef.html");

    //check if cookie exists
    if(checkCookie() === true){
        //check for permissions
        let permissions = readSessionCookie().role;
        if(permissions === "customer"){

            $(".loadNavbarBreadAndPastries").load("../../sites/breadAndPastries/navbars/loadNavbarCustomerBreadAndPastries.html");

            /*$("#navLogout").show();
            $("#navLogin").hide();
            $("#navRegistration").hide();*/
        }
        if(permissions === "admin"){

            $(".loadNavbarBreadAndPastries").load("../../sites/breadAndPastries/navbars/loadNavbarAdminBreadAndPastries.html");

            /*$("#navRegistration").hide();
            $("#navLogout").show();
            $("#navEditProducts").show();
            $("#navEditCustomers").show();*/
        }
        //display user
        let username = readSessionCookie().username;
        $("#displayUser").text(username);
    }else{
        //load Navbar
        $(".loadNavbarBreadAndPastries").load("../../sites/breadAndPastries/navbars/loadNavbarDefBreadAndPastries.html");
    }
}

function loadNavbarMeatAndFish(){
    if(checkCookie() === true){
        //check for permissions
        let permissions = readSessionCookie().role;
        if(permissions === "customer"){

            $(".loadNavbarMeatAndFish").load("../../sites/meatAndFish/navbars/loadNavbarCustomerMeatAndFish.html");
        }
        if(permissions === "admin"){

            $(".loadNavbarMeatAndFish").load("../../sites/meatAndFish/navbars/loadNavbarAdminMeatAndFish.html");
        }
        //display user
        let username = readSessionCookie().username;
        $("#displayUser").text(username);
    }else{
        //load Navbar
        $(".loadNavbarMeatAndFish").load("../../sites/meatAndFish/navbars/loadNavbarDefMeatAndFish.html");
    }
}

function loadNavbarFruitsAndVegetables(){
    if(checkCookie() === true){
        //check for permissions
        let permissions = readSessionCookie().role;
        if(permissions === "customer"){

            $(".loadNavbarFruitsAndVegetables").load("../../sites/fruitsAndVegetables/navbars/loadNavbarCustomerFruitsAndVegetables.html");
        }
        if(permissions === "admin"){

            $(".loadNavbarFruitsAndVegetables").load("../../sites/fruitsAndVegetables/navbars/loadNavbarAdminFruitsAndVegetables.html");
        }
        //display user
        let username = readSessionCookie().username;
        $("#displayUser").text(username);
    }else{
        //load Navbar
        $(".loadNavbarFruitsAndVegetables").load("../../sites/fruitsAndVegetables/navbars/loadNavbarDefFruitsAndVegetables.html");
    }
}

function loadNavbarVeganAndDrinks(){
    if(checkCookie() === true){
        //check for permissions
        let permissions = readSessionCookie().role;
        if(permissions === "customer"){

            $(".loadNavbarVeganAndDrinks").load("../../sites/veganAndDrinks/navbars/loadNavbarCustomerVeganAndDrinks.html");
        }
        if(permissions === "admin"){

            $(".loadNavbarVeganAndDrinks").load("../../sites/veganAndDrinks/navbars/loadNavbarAdminVeganAndDrinks.html");
        }
        //display user
        let username = readSessionCookie().username;
        $("#displayUser").text(username);
    }else{
        //load Navbar
        $(".loadNavbarVeganAndDrinks").load("../../sites/veganAndDrinks/navbars/loadNavbarDefVeganAndDrinks.html");
    }
}

function loadNavbarHealthAndCare(){
    if(checkCookie() === true){
        //check for permissions
        let permissions = readSessionCookie().role;
        if(permissions === "customer"){

            $(".loadNavbarHealthAndCare").load("../../sites/healthAndCare/navbars/loadNavbarCustomerHealthAndCare.html");
        }
        if(permissions === "admin"){

            $(".loadNavbarHealthAndCare").load("../../sites/healthAndCare/navbars/loadNavbarAdminHealthAndCare.html");
        }
        //display user
        let username = readSessionCookie().username;
        $("#displayUser").text(username);
    }else{
        //load Navbar
        $(".loadNavbarHealthAndCare").load("../../sites/healthAndCare/navbars/loadNavbarDefHealthAndCare.html");
    }
}