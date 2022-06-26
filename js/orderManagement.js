function loadOrders(userID){
    $.ajax({
        type: "GET",
        url: "../config/orderDataHandler.php",
        cache: false,
        data: {method: "getOrders", user_id: userID},
        dataType: "json",
        success: function (response) {
            //test log
            //console.log(response);

            //console.log(response[0].orderPackage);

            //console.log(response[0].userID);

            //console.log(response.length);

            //insert elements

            //create dynamic row for every user

            //create table elements
            for(let i=0; i < response.length; i++) {

                //create dynamic row for every user
                let tableVar = "#orderTable" + i;
                let orderTable = $(tableVar);

                //create table elements
                orderTable.append("<td id=\'userID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'productID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'product" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'price" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderPackage" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderDate" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'btnActions" + response[i].orderID + "\'> </td>");

                //create buttons
                let btnActionsColumn = "#btnActions" + response[i].orderID;
                let buttonsColumn = $(btnActionsColumn);
                //buttonsColumn.append("<a><button id=\'orderDetailsButton" + response[i].orderID + "\' class=\'btn btn-primary\' onclick=\'showOrderDetails(" + response[i].orderPackage + ")\'>Details</button></a>")
                buttonsColumn.append("<a><button id=\'deleteButton" + response[i].orderID + "\' class=\'btn btn-danger\' onclick=\'deleteProduct(" + response[i].orderID + ")\'>Delete</button></a>")

                //add data
                $("#userID" + response[i].orderID).append(response[i].userID);
                $("#orderID" + response[i].orderID).append(response[i].orderID);
                $("#productID" + response[i].orderID).append(response[i].productID);
                $("#product" + response[i].orderID).append(response[i].product);
                $("#price" + response[i].orderID).append(response[i].productPrice);
                $("#orderPackage" + response[i].orderID).append(response[i].orderPackage);
                $("#orderDate" + response[i].orderID).append(response[i].orderDate);


                //create a new table for next user
                let nextCnt = i + 1;
                orderTable.after("<tr id=\'orderTable" + nextCnt + "\'>");

            }
        },
        error: function () {

            console.log("error")
        }
    });


}

function loadOrdersWithOutButton(userID){
    $.ajax({
        type: "GET",
        url: "../config/orderDataHandler.php",
        cache: false,
        data: {method: "getOrders", user_id: userID},
        dataType: "json",
        success: function (response) {
            //test log
            //console.log(response);

            //console.log(response[0].orderPackage);

            //console.log(response[0].userID);

            //console.log(response.length);

            //insert elements

            //create dynamic row for every user

            //create table elements
            for(let i=0; i < response.length; i++) {

                //create dynamic row for every user
                let tableVar = "#orderTable" + i;
                let orderTable = $(tableVar);

                //create table elements
                orderTable.append("<td id=\'userID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'productID" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'product" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'price" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderPackage" + response[i].orderID + "\'> </td>");
                orderTable.append("<td id=\'orderDate" + response[i].orderID + "\'> </td>");

                //create buttons
                let btnActionsColumn = "#btnActions" + response[i].orderID;
                let buttonsColumn = $(btnActionsColumn);
                //buttonsColumn.append("<a><button id=\'orderDetailsButton" + response[i].orderID + "\' class=\'btn btn-primary\' onclick=\'showOrderDetails(" + response[i].orderPackage + ")\'>Details</button></a>")
                //buttonsColumn.append("<a><button id=\'deleteButton" + response[i].orderID + "\' class=\'btn btn-danger\' onclick=\'deleteProduct(" + response[i].orderID + ")\'>Delete</button></a>")

                //add data
                $("#userID" + response[i].orderID).append(response[i].userID);
                $("#orderID" + response[i].orderID).append(response[i].orderID);
                $("#productID" + response[i].orderID).append(response[i].productID);
                $("#product" + response[i].orderID).append(response[i].product);
                $("#price" + response[i].orderID).append(response[i].productPrice);
                $("#orderPackage" + response[i].orderID).append(response[i].orderPackage);
                $("#orderDate" + response[i].orderID).append(response[i].orderDate);


                //create a new table for next user
                let nextCnt = i + 1;
                orderTable.after("<tr id=\'orderTable" + nextCnt + "\'>");

            }
        },
        error: function () {

            console.log("error")
        }
    });


}

function deleteProduct(orderId){
//delete from db
    $.ajax({
        type: "POST",
        url: "../config/orderDeleteHandler.php",
        cache: false,
        data: {method: "deleteProduct", order_id: orderId},
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

