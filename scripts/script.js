/* Circles position */

// Price and time variables

var price = document.querySelectorAll(".price");

var price_first = document.querySelectorAll(".price:first-of-type");

var price_last = document.querySelectorAll(".price:last-of-type");

var time = document.querySelectorAll(".price .time");

var second_price = document.querySelectorAll(".second_price");

// Find circles quantity in price_block, then set background-position

for(i = 0; i < price_first.length; i++ ) {

	if(price_first[i].childNodes.length == 13) {
		price_first[i].style.backgroundPosition = "0% 90%, 102% 90%, 102.5% 83%";
	} else if (price_first[i].childNodes.length == 9) {
		price_first[i].style.backgroundPosition = "0% 90%, 103.5% 90%, 102.5% 83%";
	} else if (price_first[i].childNodes.length == 7) {
		price_first[i].style.backgroundPosition = "0% 90%, 105% 90%, 102.5% 83%";
	}

}

for( i = 0; i < second_price.length; i++ ) {

	if(second_price[i].childNodes.length == 7) {
		second_price[i].style.backgroundPosition = "-3.9% 90%, 104% 90%, 102.5% 83%";
	} else if(second_price[i].childNodes.length == 11) {
		second_price[i].style.backgroundPosition = "-2.3% 90%, 101.9% 90%, 102.5% 83%";
	}

}

for(i = 0; i < price_last.length; i++ ) {

	if(price_last[i].childNodes.length == 9) {
		price_last[i].style.backgroundPosition = "-3% 90%, 102.5% 83%";
	} else if(price_last[i].childNodes.length == 11) {
		price_last[i].style.backgroundPosition = "-2% 90%, 102.5% 83%";
	} else if(price_last[i].childNodes.length == 13) {
		price_last[i].style.backgroundPosition = "-2% 90%, 102.5% 83%";
	} else if(price_last[i].childNodes.length == 15) {
		price_last[i].style.backgroundPosition = "-1.8% 90%, 102.5% 83%";
	} else if(price_last[i].childNodes.length == 17) {
		price_last[i].style.backgroundPosition = "-1.2% 90%, 102.5% 83%";
	}

}

/* Circles position end */



// Set height of quest_article. Height = width / 1.7

var articles = document.querySelectorAll(".quests_block article");

function articleSize(){
	var article_width = getComputedStyle(articles[0]).width;
	var article_width_fin = parseInt(article_width, 10);
	for( i = 0; i < articles.length; i++) {
		articles[i].style.height = article_width_fin / 1.7 + "px";
	}
}

articleSize();

window.addEventListener("resize", articleSize);



// For Microsoft browsers

if (document.documentMode || /Edge/.test(navigator.userAgent)) {
   var articles_q = document.querySelectorAll(".quests_block article");
   for( i = 0; articles_q.length; i++) {
   		articles_q[i].style.minHeight = "350px";
   }
}