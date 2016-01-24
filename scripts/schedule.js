var set_month = "october";

var day_in_month = "31";

var first_price = "2000rub";

var second_price = "2500rub";

var third_price = "3000rub";

var price_one = document.querySelectorAll(".price_one");
var price_two = document.querySelectorAll(".price_two");
var price_tree = document.querySelectorAll(".price_tree");

for( i = 0; i < price_one.length; i++ ) {
	price_one[i].innerHTML = first_price;
}

for( i = 0; i < price_two.length; i++ ) {
	price_two[i].innerHTML = second_price;
}

for( i = 0; i < price_tree.length; i++ ) {
	price_tree[i].innerHTML = third_price;
}



