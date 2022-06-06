
function getUserQuantity(){
    //get user quantity from db query
    return 10;

}


function loadTableElements(){

    //get user quantity
    let userQty = getUserQuantity();

    //while counter
    let cnt = 0;

    // user id counter
    let userIDCounter = cnt;

    while(cnt < userQty) {
        //get actual user id
        let temp = 0;
        let userID = getUserID(12+cnt);

        /*while (temp !== userID){
        setTimeout(function (){
                    userID = getUserID(userID);
                    }, 500);
            temp++;
        }*/


        userIDCounter = userID;
        console.log("userID: " + userID);

        //---------------------------------------------------

        //to delete (when getUserID function was implemented)
        //userID = cnt;

        //---------------------------------------------------

        //create dynamic row for every user
        let tableVar = "#userTable" + cnt
        let userTable = $(tableVar);

        //create table elements
        userTable.append("<td id=\'userID" + cnt +"\'> </td>");
        userTable.append("<td id=\'username" + cnt +"\'> </td>");
        userTable.append("<td id=\'mail" + cnt +"\'> </td>");
        userTable.append("<td id=\'role" + cnt +"\'> </td>");
        userTable.append("<td id=\'createdAt" + cnt +"\'> </td>");
        userTable.append("<td id=\'btnActions" + cnt +"\'> </td>");

        //create buttons
        let btnActionsColumn = "#btnActions" + cnt;
        let buttonsColumn = $(btnActionsColumn);
        buttonsColumn.append("<a><button id=\'resetButton" + cnt +"\' class=\'btn btn-primary\' onclick=\'resetPassword(" + userID + ")\'>Password reset</button></a>")
        buttonsColumn.append("<a><button id=\'editButton" + cnt +"\' class=\'btn btn-primary\'onclick=\'editUser(" + userID + ")\'>Edit</button></a>")
        buttonsColumn.append("<a><button id=\'deactivateButton" + cnt +"\' class=\'btn btn-danger\' onclick=\'deactivateUser(" + userID + ")\'>Deactivate</button></a>")
        buttonsColumn.append("<a><button id=\'deleteButton" + cnt +"\' class=\'btn btn-danger\' onclick=\'deleteUser(" + userID + ")\'>Delete</button></a>")

        //create a new table for next user
        let nextCnt = cnt+1;
        userTable.after("<tr id=\'userTable" + nextCnt + "\'>");

        //---------------------------------------------------

        //load user data into elements
        insertUserData(12+cnt);
        //insertUserDataManageSite(userData);

        //---------------------------------------------------
        //while counter
        cnt++;
    }
}

function getUserID(posNb) {
    //get user ID from db query

    let userID = posNb;
    let actualUserID;

        $.ajax({
            type: "GET",
            url: "../config/userIdHandler.php",
            cache: false,
            data: {method: "getID", userID: userID},
            dataType: "json",
            success: function (response) {
                //test log
                console.log("successlog: " + response.id);

                actualUserID = response.id;

            },
            error: function () {
                posNb++;
                console.log("Error Cnt: " + posNb);
                actualUserID = posNb;
            }
        });

    //return user ID
    return actualUserID;
}


function insertUserData(id){
    //data from db (query)

    let cnt = id - 12;

    $.ajax({
        type: "GET",
        url: "../config/userDataHandler.php",
        cache: false,
        data: {method: "getUserData", userID: id},
        dataType: "json",
        success: function (response) {
            //test log
            console.log(response);


            //insert elements

            //create dynamic row for every user

            //create table elements
            let tableVar = "#userTable" + cnt
            let userTable = $(tableVar);
            $("#userID" + cnt).append(response.id);
            $("#username" + cnt).append(response.username);
            $("#mail" + cnt).append(response.usermail);
            $("#role" + cnt).append(response.role);
            $("#createdAt" + cnt).append(response.createDate);


        },
        error: function () {

            console.log("error")
        }
    });

}

function insertUserDataManageSite(userData){
    //insert user data into elements



}


function resetPassword(id){

}

function editUser(id){

}

function deactivateUser(id){

}

function deleteUser(id){

}
