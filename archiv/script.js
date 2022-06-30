//Starting point for JQuery init
$(document).ready(function (){

});


//read cookie (not up to date)
function readCookie() {

    let cookie = document.cookie.split('=');

    if (document.cookie === "") {
        return null;
    } else {
        return JSON.parse(cookie[1]);
    }
}



