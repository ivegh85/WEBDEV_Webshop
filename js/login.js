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
                    console.log("username= " + readSessionCookie().username); //username
                    console.log("token= " + readSessionCookie().token); //token
                    console.log("expire= " + readSessionCookie().expires); //expire timestamp (created_time + 30 min)
                    console.log("remember= " + readSessionCookie().remember); //remember
                    console.log("role= " + readSessionCookie().role); //role

                    //redirect to home
                    setTimeout(function (){
                        window.location.href = "../sites/home.html";
                    }, 1500);

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




