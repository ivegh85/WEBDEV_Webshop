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
            console.log(response);

            if(response === true){
                //window.alert("User was created successfully!")
                //window.location.href= "../sites/login.html"
                console.log("User was created successfully!")

                $(".errorMsg").remove();
                $(".successMsg").remove();
                $("#registrationMessage").append("<p class='successMsg'>User was created successfully!</p>");

                //redirect to login
                setTimeout(function (){
                    window.location.href = "../sites/login.html";
                }, 1500);

            } else {
                //window.alert("User is already registered, try again with a different username & email!")
                //window.location.href= "../index.html"
                console.log("User is already registered, try again with a different username & email!")

                $(".successMsg").remove();
                $("#registrationMessage").append("<p class='errorMsg'>User is already registered, try again with a different username & email!</p>");

            }

        },
        error: function () {
            //show error message if no response (no successful login)
            console.log("mysterious error message")

            $(".successMsg").remove();
            $("#registrationMessage").append("<p class='errorMsg'>An error occurred!</p>");

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