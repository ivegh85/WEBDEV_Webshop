//Starting point for JQuery init
$(document).ready(function (){


    $("#btnRegisterUserClicked").click(function (){
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
        registerUser();
    });



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

        //remove error messages
        $(".errorMsg").remove();

        $.ajax({
            type: "GET",
            url: "../config/loginHandler.php",
            cache: false,
            data: {method: "login", username: username, pw: password, remember: remember},
            dataType: "json",
            success: function (response) {
                //test log
                console.log(response);

                if (response !== null) {
                    //show success and welcome message if username and password are correct
                    $(".errorMsg").remove();
                    $(".successMsg").remove();
                    $("#loginBtnBox").append("<p class='successMsg'>Hi " + response.username + "!</p>");

                    //expire time
                    let expires
                    if(response.remember === "false"){
                        //one hour
                        expires = (new Date(Date.now()+ 3600*1000)).toUTCString();
                    }if(response.remember === "true"){
                        //one day
                        expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
                    }

                    //create cookie data as json string
                    const session = JSON.stringify({
                        "username": response.username,
                        "token": response.token,
                        "expire": expires,
                        "remember": response.remember,
                        "role": response.role
                    });

                    //create cookie with name, data and expire timestamp
                    document.cookie =  "session=" + session + ";expires=" + expires + ";path=/";


                    //test cookie output
                    console.log("username= " + readCookie().username); //username
                    console.log("token= " + readCookie().token); //token
                    console.log("expire= " + readCookie().expires); //expire timestamp (created_time + 30 min)
                    console.log("remember= " + readCookie().remember); //remember
                    console.log("role= " + readCookie().role); //role

                    //redirect to home
                    setTimeout(function (){
                        window.location.href = "../sites/home.html";
                    }, 2000);

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
    window.location.href = "../sites/home.html";
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

            if(response === true){
                window.alert("User was created successfully!")
                window.location.href= "../sites/login.html"
                console.log("User was created successfully!")
            } else {
                window.alert("User is already registered, try again with a different username & email!")
                window.location.href= "../index.html"
                console.log("User is already registered, try again with a different username & email!")
            }

        },
        error: function () {
            //show error message if no response (no successful login)
            console.log("mysterious error message")

        }

    });
}

//not yet implemented
function matchRegistrationPassword() {

    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;


    if (password !== password2 || password === "" || password2 ===""){
        password2.setCustomValidity("The supplied passwords are empty or do not match.")
        return false;
    } else
        return true;
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




