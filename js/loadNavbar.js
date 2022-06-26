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
require("../js/script.js");
require("../js/cookieHandling.js");

//navbar display according to permissions
function loadNavbar(){

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

            $(".loadNavbar").load("../sites/loadNavbarCustomer.html");

            /*$("#navLogout").show();
            $("#navLogin").hide();
            $("#navRegistration").hide();*/
        }
        if(permissions === "admin"){

            $(".loadNavbar").load("../sites/loadNavbarAdmin.html");

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
        $(".loadNavbar").load("../sites/loadNavbarDef.html");
    }
}
function loadFooter() {
    $(".loadFooter").load("../sites/loadFooter.html");
}
//navbar display according to permissions
function loadNavbarIdx(){

    //hide permission elements
    /*$("#navLogout").hide();
    $("#navCurrentUser").hide();
    $("#navEditProducts").hide();
    $("#navEditCustomers").hide();*/

    $(".loadNavbar").load("./sites/loadNavbarIndex.html");

}