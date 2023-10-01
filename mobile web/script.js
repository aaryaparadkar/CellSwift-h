var cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    displayCart();
}

function displayCart() {
    var cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    var totalPrice = 0;

    cart.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.productName + " - $" + item.price;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    var total = document.createElement("li");
    total.textContent = "Total: $" + totalPrice;
    cartList.appendChild(total);
}