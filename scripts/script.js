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


/* Shedule actions */

// Schedule variables
// !!!!! Other schedule variables in schedule.js !!!!!

var arrow_left = document.getElementById("arrow_left");
var arrow_right = document.getElementById("arrow_right");
var date_inner = document.querySelectorAll(".date_inner");
var current_position = 0;

arrow_left.addEventListener("click", goLeft);

function goLeft() {
	for( i = 0; i < date_inner.length; i++ ) {
		date_inner[i].style.opacity = "1";
		date_inner[i].nextElementSibling.style.opacity = "1";
	}
	if( parseInt(date_inner[0].innerHTML, 10) == 1 ) {
		current_position = 0;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 8 ) {
		current_position = 1;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 15 ) {
		current_position = 2;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 22 ) {
		current_position = 3;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 29 ) {
		current_position = 4;
	}
	if( current_position == 0 ) {
		for( i = 0; i < date_inner.length; i++ ) {
			date_inner[i].innerHTML = parseInt(date_inner[i].innerHTML, 10) + 28;
		}
	}
	if( current_position > 0 ) {
		for( i = 0; i < date_inner.length; i++ ) {
			date_inner[i].innerHTML = parseInt(date_inner[i].innerHTML, 10) - 7;
		}
	}
	for( i = 0; i < date_inner.length; i++ ) {
		if( parseInt(date_inner[i].innerHTML, 10) > day_in_month) {
				date_inner[i].style.opacity = "0";
				date_inner[i].nextElementSibling.style.opacity = "0";
		}
	}
}

arrow_right.addEventListener("click", goRight);

function goRight() {
	for( i = 0; i < date_inner.length; i++ ) {
		date_inner[i].style.opacity = "1";
		date_inner[i].nextElementSibling.style.opacity = "1";
		date_inner[i].innerHTML = parseInt(date_inner[i].innerHTML, 10) + 7;
	}
	if( parseInt(date_inner[0].innerHTML, 10) == 36) {
			for( i = 0; i < date_inner.length; i++ ) {
				date_inner[i].innerHTML = i + 1
			}
	}
	if(current_position == 4) {
		for( i = 0; i < date_inner.length; i++ ) {
			date_inner[i].style.opacity = "1"
			date_inner[i].nextElementSibling.style.opacity = "1"
		}
	}
	current_position++;
	if( current_position == 6 ) {
		for( i = 0; i < date_inner.length; i++ ) {
			date_inner[i].innerHTML = parseInt(date_inner[i].innerHTML, 10) - 28;
		}
		current_position = 0;
	}
	if( parseInt(date_inner[0].innerHTML, 10) == 1 ) {
		current_position = 0;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 8 ) {
		current_position = 1;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 15 ) {
		current_position = 2;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 22 ) {
		current_position = 3;
	} else if( parseInt(date_inner[0].innerHTML, 10) == 29 ) {
		current_position = 4;
	}
	for( i = 0; i < date_inner.length; i++ ) {
		if( parseInt(date_inner[i].innerHTML, 10) > day_in_month) {
				date_inner[i].style.opacity = "0";
				date_inner[i].nextElementSibling.style.opacity = "0";
		}
	}
}


// Set month

var current_month = document.querySelectorAll(".month");

for( i = 0; i < current_month.length; i++ ) {
	current_month[i].innerHTML = set_month;
}


/* Shedule actions end */