//Starting point for JQuery init
$(document).ready(function () {

    //load basic data to show on site
    //loaddata();

    //login and cancel login
    $("#btnLoginClicked").click(function (){
        login();
    });
    $("#btnCancelLoginClicked").click(function (){
        cancelLogin();
    });

});


// ajax backend calls
//basic webshop data
function loaddata() {
    $.ajax({
        type: "GET",
        url: "../config/requestHandler.php",
        cache: false,
        data: {method: ""},
        dataType: "json",
        success: function (response) {


        },
        error: function () {

        }

    });
}
//login
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //check if fields are filled
    if (username === "" || password === ""){
        $("#loginBtnBox").append("<p class='errorMsg' id='loginMissing'>Username or Password is missing!</p>");
    }else {

        //remember check and set remember value
        let remember = false;
        if ($("#rememberLogin").is(":checked")) {
            remember = true;
        }

        //test log
        //console.log(username + " " + password);
        //console.log(remember);

        //remove error messages
        $(".errorMsg").remove();

        //not fully implemented yet
        $.ajax({
            type: "GET",
            url: "../config/requestHandler.php",
            cache: false,
            data: {method: "login", username: username, pw: password, remember: remember},
            dataType: "json",
            success: function (response) {
                //test log
                console.log(response);

                if(response !== null){
                    //show success and welcome message if username and password are correct
                    $(".errorMsg").remove();
                    $(".successMsg").remove();
                    $("#loginBtnBox").append("<p class='successMsg'>Hi " + response.username + "!</p>");
                }

            },
            error: function () {
                //show error message if no response (no successful login)
                $(".successMsg").remove();
                $("#loginBtnBox").append("<p class='errorMsg'>Wrong username/e-mail or password!</p>");
            }

        });
    }
}


//cancel login function
function cancelLogin(){
    window.location.href = "../index.html";
}