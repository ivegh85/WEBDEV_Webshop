//Starting point for JQuery init
$(document).ready(function (){






});



// not yet implemented
function loadSite() {



    if (document.cookie.length === 0) {

        content.setAttribute("class", "anonymous");

        document.getElementsByClassName("anonymous").innerHTML = '<object type="text/html" data="../sites/registration.html" ></object>';

    } else {

        let userRole = readCookie().role;

        if (userRole === "admin") {
            content.setAttribute("class", "admin");

            document.getElementsByClassName("admin").innerHTML = '<object type="text/html" data="../sites/products.html" ></object>';

        } else if (userRole === "customer") {
            content.setAttribute("class", "customer");

            document.getElementsByClassName("customer").innerHTML = '<object type="text/html" data="../sites/products.html" ></object>';

        }
    }
}



//load login
function loadLogin() {
    $("#loginBtn").click(function (){
        $("#pageContent").load("./sites/loadLogin.html");
        //login and cancel login
        /*$("#btnLoginClicked").click(function (){
            login();
        });
        $("#btnCancelLoginClicked").click(function (){
            cancelLogin();
        });*/
    })
}


//read cookie (not up to date)
function readCookie() {

    let cookie = document.cookie.split('=');

    if (document.cookie === "") {
        return null;
    } else {
        return JSON.parse(cookie[1]);
    }
}



