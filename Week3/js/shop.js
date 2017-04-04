var price;
var quantity;
var Total;
var customerName = "Gem";

price = 5;
quantity = 14;
Total = price*quantity;

var customer = document.getElementById("name");
customer.textContent = customerName;


//document.write("Total is " + total);

var total = document.getElementById("price");
total.textContent = Total;