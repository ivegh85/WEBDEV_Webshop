//get username from cookie
const loggedInUser = readSessionCookie(getCookie()).username;
let strLoggedInUser = loggedInUser.toString();

console.log(loggedInUser)
console.log(strLoggedInUser)

$(document).ready(function (){

    $.ajax({
        url: '../config/userDataHandler.php',
        type: 'GET',
        cache: false,
        datatype: "json",
        data: {
            method: "getUserData",
            loggedInUser: loggedInUser
        },
        success: function (response) {

            //trying everything under the sun
            console.log(response.username)
            console.log(response[0].username)

            for(let i=0; i < response.length; i++) {

                    //create dynamic row for every user
                    let tableVar = "#profileTable" + i;
                    let userTable = $(tableVar);

                    //create table elements
                    userTable.append("<td id=\'userID" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'username" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'mail" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'role" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'createdAt" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'status" + response[i].id + "\'> </td>");
                    userTable.append("<td id=\'btnActions" + response[i].id + "\'> </td>");

                    //add data
                    $("#userID" + response[i].id).append(response[i].id);
                    $("#username" + response[i].id).append(response[i].username);
                    $("#mail" + response[i].id).append(response[i].usermail);
                    $("#role" + response[i].id).append(response[i].role);
                    $("#createdAt" + response[i].id).append(response[i].createDate);
                    $("#status" + response[i].id).append(response[i].status);

                }
            },
            error: function () {

                console.log("error")
            }
        });
});

