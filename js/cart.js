function showCart(){
    $.ajax({
        type: "GET",
        url: "../config/readCartDataHandler.php",
        cache: false,
        data: {},
        dataType: "json",
        success: function (response) {

            var products = JSON.parse(response['cartProducts']);
            var tableProduct = document.getElementById('productTable');
            products.forEach(function(product){

                tableProduct.insertAdjacentHTML('beforeend','   <tr><td style="width:20%"><img style=\"width: 100%; object-fit: cover\" src ="/webshop/res/img/products/'
                    + product["image"] +
                    '"></td><td>' + product['productname'] + '</td><td>' + product['quantity'] + '</td><td>' + product['price']*product['quantity'] + '</td></tr>' );
            });
        },
    });
}

showCart();

