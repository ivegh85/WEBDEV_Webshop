function loadProducts(){
    $.ajax({
        type: "GET",
        url: "../config/allProductsDataHandler.php",
        cache: false,
        data: {method: "getProductData"},
        dataType: "json",
        success: function (response) {
            //test log
            console.log(response);
            console.log(response[2].name);
            console.log(response[0].id);
            console.log(response.length);

            //insert elements
            //create dynamic row for every Product
            //create table elements

            for(let i=0; i < response.length; i++) {

                //create dynamic row for every Product
                let tableVar = "#productTable" + i;
                let ProductTable = $(tableVar);

                //create table elements
                ProductTable.append("<td id=\'productID" + response[i].id + "\'> </td>");
                ProductTable.append("<td id=\'name" + response[i].id + "\'> </td>");
                ProductTable.append("<td id=\'description" + response[i].id + "\'> </td>");
                ProductTable.append("<td id=\'rating" + response[i].id + "\'> </td>");
                ProductTable.append("<td id=\'price" + response[i].id + "\'> </td>");
                ProductTable.append("<td id=\'btnActions" + response[i].id + "\'> </td>");

                //create buttons
                let btnActionsColumn = "#btnActions" + response[i].id;
                let buttonsColumn = $(btnActionsColumn);
                buttonsColumn.append("<a><button id=\'editButton" + response[i].id + "\' class=\'btn btn-primary\'onclick=\'editProduct(" + response[i].id + ")\'>Edit</button></a>")
                buttonsColumn.append("<a><button id=\'deleteButton" + response[i].id + "\' class=\'btn btn-danger\' onclick=\'deleteProduct(" + response[i].id + ")\'>Delete</button></a>")

                //add data
                $("#productID" + response[i].id).append(response[i].id);
                $("#name" + response[i].id).append(response[i].name);
                $("#description" + response[i].id).append(response[i].description);
                $("#rating" + response[i].id).append(response[i].rating);
                $("#price" + response[i].id).append(response[i].price);


                //create a new table for next Product
                let nextCnt = i + 1;
                ProductTable.after("<tr id=\'productTable" + nextCnt + "\'>");


            }
        },
        error: function () {

            console.log("error")
        }
    });


}


function editProduct(id){

}


function deleteProduct(id){

}
