function showCart(){
    $.ajax({
        type: "GET",
        url: "../config/readCartDataHandler.php",
        cache: false,
        data: {},
        dataType: "json",
        success: function (response) {
            var sumQuantity = 0;
            var sumPrice = 0;
            var products = JSON.parse(response['cartProducts']);
            var tableProduct = document.getElementById('productTable');

            products.forEach(function(product){

                tableProduct.insertAdjacentHTML('beforeend','   <tr><td style="width:20%"><img style=\"width: 100%; object-fit: cover\" src ="/webshop/res/img/products/'
                    + product["image"] +
                    '"></td><td style="text-align: center">' + product['productname'] + '</td><td style="text-align: center"><input type="hidden" name="productid" value="' + product['product_id'] +
                    '"></input><input type="number" oninput="updateCart()" value="'
                    + product['quantity'] + '" min="1" max="99"></input><input type="hidden" value="'
                    + product['price'] + '"></input></td><td>' + (parseFloat(product['price'])*parseFloat(product['quantity'])).toFixed(2) +
                    '</td><td><a style="display: flex; justify-content: center; align-items: center; cursor: pointer;" onclick="deleteProduct(this)">\n' +
                    '<img class="hvr-grow" src="../res/img/icons/loschen.png" alt="" width="40" height="40">\n' +
                    '</a></td></td></tr>' );
                sumQuantity += parseFloat(product['quantity']);
                sumPrice += parseFloat(product['quantity'])*parseFloat(product['price']);
            });
            document.getElementById('cartQuantity').innerHTML = sumQuantity;
            document.getElementById('productPrice').innerHTML = sumPrice.toFixed(2);
            console.log(sumQuantity, sumPrice.toFixed(2))
        },
    });
}

showCart();

function deleteProduct(element){
    element.parentElement.parentElement.innerHTML = '';
    updateCart();
}

function updateCart(){
var inputs = document.getElementsByName('productid');
var newCardArray = [];
inputs.forEach(function(element){

    newCardArray.push({
        productId: element.value,
        quantity:element.parentElement.getElementsByTagName('input')[1].value});
});
console.log(newCardArray);

        $.ajax({
            type: "POST",
            url: "../config/cartUpdateDataHandler.php",
            cache: false,
            data: {cart: JSON.stringify(newCardArray)},
            dataType: "json",
            success: function (response) {


            }
        });
    var inputs = document.getElementsByName('productid');
    var sumQuantity = 0;
    var sumPrice = 0;
    inputs.forEach(function(element){
        var thisTable = element.parentElement;
        sumQuantity += parseInt(thisTable.getElementsByTagName('input')[1].value);
        var sumPriceSingle =  parseFloat(thisTable.getElementsByTagName('input')[2].value) * parseFloat(thisTable.getElementsByTagName('input')[1].value);
        sumPrice += sumPriceSingle;
        thisTable.parentElement.getElementsByTagName('td')[3].innerHTML = sumPriceSingle.toFixed(2);

    });
    document.getElementById('cartQuantity').innerHTML = sumQuantity;
    document.getElementById('productPrice').innerHTML = sumPrice.toFixed(2);
}

/*
function addOrder(cartId){
    $.ajax({
        type: "GET",
        url: "../config/cartDataHandler.php",
        cache: false,
        data: {productid: cartId},
        dataType: "json",
        success: function (response) {
            var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
            document.cookie =  "cart=" + response['cartToken'] + ";expires=" + expires + ";path=/";
            document.getElementById('card-quantity').innerHTML = response['cartQuantity'];

        },
    });
}*/