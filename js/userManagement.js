

function loadUsers(){
    $.ajax({
        type: "GET",
        url: "../config/allUserDataHandler.php",
        cache: false,
        data: {method: "getUserData"},
        dataType: "json",
        success: function (response) {
            //test log
            //console.log(response);
            //console.log(response[2].id);

            //insert elements

            //create dynamic row for every user

            //create table elements
           /* let tableVar = "#userTable" + cnt
            let userTable = $(tableVar);
            $("#userID" + cnt).append(response.id);
            $("#username" + cnt).append(response.username);
            $("#mail" + cnt).append(response.usermail);
            $("#role" + cnt).append(response.role);
            $("#createdAt" + cnt).append(response.createDate);**/

            for(let i=0; i < response.length; i++) {

                //create dynamic row for every user
                let tableVar = "#userTable" + i;
                let userTable = $(tableVar);

                //create table elements
                userTable.append("<td id=\'userID" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'username" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'mail" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'role" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'createdAt" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'status" + response[i].id + "\'> </td>");
                userTable.append("<td id=\'btnActions" + response[i].id + "\'> </td>");

                //create buttons
                let btnActionsColumn = "#btnActions" + response[i].id;
                let buttonsColumn = $(btnActionsColumn);
                //buttonsColumn.append("<a><button id=\'resetButton" + response[i].id + "\' class=\'btn btn-primary\' onclick=\'resetPassword(" + response[i].id + ")\'>Password reset</button></a>")
                //buttonsColumn.append("<a><button id=\'editButton" + response[i].id + "\' class=\'btn btn-primary\'onclick=\'editUser(" + response[i].id + ")\'>Edit</button></a>")
                buttonsColumn.append("<a><button id=\'ordersButton" + response[i].id + "\' class=\'btn btn-primary\' onclick=\'showOrders(" + response[i].id + ")\'>Show Orders</button></a>")
                buttonsColumn.append("<a><button id=\'activateButton" + response[i].id + "\' class=\'btn btn-primary\' onclick=\'activateUser(" + response[i].id + ")\'>Activate User</button></a>")
                buttonsColumn.append("<a><button id=\'deactivateButton" + response[i].id + "\' class=\'btn btn-danger\' onclick=\'deactivateUser(" + response[i].id + ")\'>Deactivate User</button></a>")
                //buttonsColumn.append("<a><button id=\'deleteButton" + response[i].id + "\' class=\'btn btn-danger\' onclick=\'deleteUser(" + response[i].id + ")\'>Delete</button></a>")

                //add data
                $("#userID" + response[i].id).append(response[i].id);
                $("#username" + response[i].id).append(response[i].username);
                $("#mail" + response[i].id).append(response[i].usermail);
                $("#role" + response[i].id).append(response[i].role);
                $("#createdAt" + response[i].id).append(response[i].createDate);
                $("#status" + response[i].id).append(response[i].status);


                //create a new table for next user
                let nextCnt = i + 1;
                userTable.after("<tr id=\'userTable" + nextCnt + "\'>");



            }
        },
        error: function () {

            console.log("error")
        }
    });


}

function showOrders(id){
    //redirect with parameters
    window.location = "../sites/orderManagement.html?userid=" + id;
}


function deactivateUser(id){
    //update db
    $.ajax({
        type: "POST",
        url: "../config/disableUserHandler.php",
        cache: false,
        data: {method: "disableUserData", user_id: id},
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function () {

        console.log("error")
    }
});

    //reload page
    location.reload();
}

function activateUser(id){
    //update db
    $.ajax({
        type: "POST",
        url: "../config/enableUserHandler.php",
        cache: false,
        data: {method: "disableUserData", user_id: id},
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function () {

            console.log("error")
        }
    });

    //reload page
    location.reload();
}
