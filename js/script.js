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
    $("#btnRegisterUserClicked").click(function (){
        registerUser();
    });

});


//ajax backend calls
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

//register user function
function registerUser() {

    let newUserName = document.getElementById("username").value;
    let newPassword = document.getElementById("password").value;
    let newEmail = document.getElementById("email").value;
    let newTitle = document.getElementById("title").value;
    let newFirstName = document.getElementById("firstName").value;
    let newLastName = document.getElementById("lastName").value;
    let newAddress = document.getElementById("address").value;
    let newCity = document.getElementById("city").value;
    let newPostal = document.getElementById("postalCode").value;


    //data validation not yet implemented

    $.ajax({
        type: "POST",
        url: "../config/registrationHandler.php",
        cache: false,
        data: {method: "register", username: newUserName, pw: newPassword, email : newEmail, title : newTitle,
            fn: newFirstName, ln: newLastName, address : newAddress, city: newCity, zip: newPostal  },
        dataType: "json",
        success: function (response) {
            //test log
            //console.log(response);

            if(response !== null){
                //show success and welcome message if username and password are correct
                console.log("User was created successfully!")
            }

        },
        error: function () {
            //show error message if no response (no successful login)
            console.log("User was not created successfully!")

        }

    });
}

//interrupt submit in case input is missing or incorrect
(function() {
    'use strict';
    window.addEventListener('load', function() {

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
       Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();