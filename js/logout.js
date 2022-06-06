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
require("../js/cookieHandling.js");


function logout(){
    //delete cookie in backend (DB)
    /*if(deleteSessionCookieDB() === true){
        //delete in frontend
        deleteCookie();
        //display Logout Message
        $(".errorMsg").remove();
        $("#logoutMsg").append("<p class='successMsg'>Logout successful</p>");
    }else{
        $(".successMsg").remove();
        $("#logoutMsg").append("<p class='errorMsg'>Logout not successful!</p>");
    }*/

    //delete cookie in backend (DB)
    deleteSessionCookieDB();

    //delete in frontend
    deleteCookie();

    //show message
    $(".errorMsg").remove();
    $("#logoutMsg").append("<p class='successMsg'>Logout successful</p>");

    //redirect to home
    setTimeout(function (){
        window.location.href = "../sites/home.html";
    }, 1500);
}