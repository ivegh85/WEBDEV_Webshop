let userNameUpdate = document.getElementById("usernameUpdate");
let passwordUpdate = document.getElementById("passwordUpdate")
let emailUpdate = document.getElementById("emailUpdate");
let titleUpdate = document.getElementById("titleUpdate");
let firstNameUpdate = document.getElementById("firstNameUpdate");
let lastNameUpdate = document.getElementById("lastNameUpdate");
let addressUpdate = document.getElementById("addressUpdate");
let cityUpdate = document.getElementById("cityUpdate");
let postalCodeUpdate = document.getElementById("postalCodeUpdate");

/*get username from cookie
const loggedInUser = readSessionCookie(getCookie()).username;
const strLoggedInUser = loggedInUser.toString();
let stringifyLoggedInUser = JSON.stringify(loggedInUser)

console.log(loggedInUser)
console.log(strLoggedInUser)
*/

function loadProfile (loggedInUser) {

        $.ajax({
            url: '../config/userDataHandler.php',
            type: 'GET',
            cache: false,
            datatype: "json",
            data: {
                loggedInUser: loggedInUser,
            },
            success: function (response) {

                for (let i = 0; i < response.length; i++) {

                    //create dynamic row for every user
                    let tableVar = "#profileTable" + i;
                    let userTable = $(tableVar);

                    //create table elements
                    userTable.append("<td id=\'userID" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'username" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'firstname" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'surname" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'mail" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'Address" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'City" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'Postalcode" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'createdAt" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'status" + response[i].id + "\'> </td>");


                    //add data
                    $("#userID" + response[i].id).append(response[i].id);
                    $("#username" + response[i].id).append(response[i].username);
                    $("#firstname" + response[i].id).append(response[i].firstname);
                    $("#surname" + response[i].id).append(response[i].surname);
                    $("#mail" + response[i].id).append(response[i].usermail);
                    $("#Address" + response[i].id).append(response[i].address);
                    $("#Postalcode" + response[i].id).append(response[i].postalcode);
                    $("#City" + response[i].id).append(response[i].city);
                    $("#createdAt" + response[i].id).append(response[i].createDate);
                    $("#status" + response[i].id).append(response[i].status);


                    userNameUpdate.value = response[0].username;
                    passwordUpdate.value = response[0].password;
                    emailUpdate.value = response[0].usermail;
                    titleUpdate.value = response[0].title;
                    firstNameUpdate.value = response[0].firstname;
                    lastNameUpdate.value = response[0].surname;
                    addressUpdate.value = response[0].address;
                    cityUpdate.value = response[0].city;
                    postalCodeUpdate.value = response[0].postalcode;

                    const updateForm = document.getElementById("profileData");
                    updateForm.addEventListener('submit', function (e) {
                        e.preventDefault();
                        updateProfile();
                    });

                    loadOrdersWithOutButton(response[i].id);

                }


            },
            error: function () {

                console.log("error")
            }
        });

}
function updateProfile() {

    console.log("firstname:" + firstNameUpdate.value);

    $.ajax({
        url: '../config/userUpdateHandler.php',
        type: 'POST',
        cache: false,
        datatype: "json",
        data: {
            username: userNameUpdate.value,
            pw: passwordUpdate.value,
            email: emailUpdate.value,
            title: titleUpdate.value,
            fn: firstNameUpdate.value,
            ln: lastNameUpdate.value,
            address: addressUpdate.value,
            city: cityUpdate.value,
            zip: postalCodeUpdate.value,
        },
        success: function (response) {

            console.log("success")
            console.log(response[0].username)
            },
        error: function () {

            console.log("error")
        }
    });

}



