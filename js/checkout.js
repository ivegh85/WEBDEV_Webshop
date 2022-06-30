
//show checkout summary
function showCheckout(){
    $.ajax({
        type: "GET",
        url: "../config/checkoutDataHandler.php",
        cache: false,
        data: {},
        dataType: "json",
        success: function (response) {
            var sumQuantity = 0;
            var sumPrice = 0;

            //get products in cart
            var products = JSON.parse(JSON.parse(response)['cartData']);
            console.log(products);

            //get user data
            var userData = JSON.parse(response)['userData'];
            console.log(userData);

            var userDataString = userData['title'] + ' ' + userData['firstname'] + ' ' + userData['surname'];
            var userDataAddress = userData['address'] + ', ' + userData['postalcode'] + ' ' + userData['city'];

            document.getElementById('userData').innerHTML = userDataString;
            document.getElementById('userAddress').innerHTML = userDataAddress;

            var tableProduct = document.getElementById('productTable');

            //list items with name, quantity and price
            products.forEach(function(product){

                tableProduct.insertAdjacentHTML('beforeend','   <tr><td style="width:15%; text-align: center"><img style=\"width: 50%; object-fit: cover\" src ="/webshop/res/img/products/'
                    + product["image"] +
                    '"><td style="text-align: center">' + product['productname'] + '</td><td style="text-align: center">' + product['quantity'] + '</td><td style="text-align: center">' + (parseFloat(product['price'])*parseFloat(product['quantity'])).toFixed(2) + '</td></tr>' );

                //show total price and quantity
                sumQuantity += parseFloat(product['quantity']);
                sumPrice += parseFloat(product['quantity'])*parseFloat(product['price']);
            });
            document.getElementById('cartQuantity').innerHTML = sumQuantity;
            document.getElementById('productPrice').innerHTML = sumPrice.toFixed(2);
            console.log(sumQuantity, sumPrice.toFixed(2))
        },
        statusCode: {
            500: function() {
                location.href = "login.html";
            }
        }

    });
}

showCheckout();

function addOrder(){
    $.ajax({
        type: "GET",
        url: "../config/orderDataHandler.php",
        cache: false,
        dataType: "json",
        success: function (response) {

        },
    });
}