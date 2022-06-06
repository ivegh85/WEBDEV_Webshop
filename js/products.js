//starting point for jquery init

$(document).ready(function (){
getProducts();
});


// get products
function getProducts() {

    $.ajax({
        type: "GET",
        url: "../config/productsHandler.php",
        dataType: "json",
        success: function (response) {

        console.log(response);


        },

        error: function (jqXHR, textStatus, error) {
            //show error message if no response

            console.log(jqXHR, textStatus, error);

        }

    });

}