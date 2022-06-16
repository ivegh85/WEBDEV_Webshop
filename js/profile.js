/*get username from cookie
const loggedInUser = readSessionCookie(getCookie()).username;
const strLoggedInUser = loggedInUser.toString();
let stringifyLoggedInUser = JSON.stringify(loggedInUser)

console.log(loggedInUser)
console.log(strLoggedInUser)
*/
function loadProfile (loggedInUser) {

    console.log(loggedInUser)
    if (loggedInUser == null) {
        window.location.href = '../index.html';
    } else {

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
                    userTable.append("<td id=\'btnActions" + response[i].id + "\'> </td>");

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

                }
            },
            error: function () {

                console.log("error")
            }
        });
    }
}

