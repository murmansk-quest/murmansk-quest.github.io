/* Circles position */

// Price and time variables

// Find circles quantity in price_block, then set background-position

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
   for( i = 0; i < articles_q.length; i++) {
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
		if( parseInt(date_inner[i].innerHTML, 10) > set_day_in_month) {
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
		if( parseInt(date_inner[i].innerHTML, 10) > set_day_in_month) {
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



// Set prices

function setPrice() {
	var price_one = document.querySelectorAll(".price_one");
	var price_two = document.querySelectorAll(".price_two");
	var price_tree = document.querySelectorAll(".price_tree");

	for( i = 0; i < price_one.length; i++ ) {
		price_one[i].innerHTML = set_first_price;
	}

	for( i = 0; i < price_two.length; i++ ) {
		price_two[i].innerHTML = set_second_price;
	}

	for( i = 0; i < price_tree.length; i++ ) {
		price_tree[i].innerHTML = set_third_price;
	}
}

setPrice()



// Set time


function questOne_firstSchedule() {

	document.querySelectorAll("#quest_1")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_1 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[1] + "</span> <span class=\"time\">" + first_set_time[2] + "</span><span class=\"time\">" + first_set_time[3] + "</span><span class=\"time\">" + first_set_time[4] +  "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_1 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[5] +  "</span><span class=\"time\">" + first_set_time[6] +  "</span><span class=\"time\">" + first_set_time[7] +  "</span><span class=\"time\">" + first_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();
}

questOne_firstSchedule()

function questOne_secondSchedule() {

	document.querySelectorAll("#quest_1")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section><section class=\"price third_price\"><div class=\"bottom_price price_tree\"></div></section>";									


	function questOne_secondSchedule() {
	document.querySelectorAll("#quest_1 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[1] + "</span><span class=\"time\">" + first_set_time[2] + "</span>" + "<span class=\"time\">" + first_set_time[3] + "</span>";                                                
	}

	questOne_secondSchedule();


	function questOne_firstSchedule() {
		document.querySelectorAll("#quest_1 .second_price")[0].innerHTML = "<div class=\"bottom_price price_two\"></div> <span class=\"time\">" + first_set_time[4] + "</span><span class=\"time\">" + first_set_time[5] + "</span>";
	}

	questOne_firstSchedule();

	function questOne_thirdSchedule() {
		document.querySelectorAll("#quest_1 .third_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[6] + "</span><span class=\"time\">" + first_set_time[7] + "</span> <span class=\"time\">" + first_set_time[8] + "</span>";
	}

	 questOne_thirdSchedule()


	setPrice()
}

function questOne_thirdSchedule() {

	document.querySelectorAll("#quest_1")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_1 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[0] + "</span><span class=\"time\">" + first_set_time[1] + "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_1 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[2] + "</span><span class=\"time\">" + first_set_time[3] + "</span><span class=\"time\">" + first_set_time[4] +  "</span><span class=\"time\">" + first_set_time[5] +  "</span><span class=\"time\">" + first_set_time[6] +  "</span><span class=\"time\">" + first_set_time[7] +  "</span><span class=\"time\">" + first_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();

}


function questTwo_firstSchedule() {

	document.querySelectorAll("#quest_2")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_2 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[0] + "</span> <span class=\"time\">" + first_set_time[1] + "</span> <span class=\"time\">" + first_set_time[2] + "</span><span class=\"time\">" + first_set_time[3] + "</span><span class=\"time\">" + first_set_time[4] +  "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_2 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[5] +  "</span><span class=\"time\">" + first_set_time[6] +  "</span><span class=\"time\">" + first_set_time[7] +  "</span><span class=\"time\">" + first_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();
}

function questTwo_secondSchedule() {

	document.querySelectorAll("#quest_2")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section><section class=\"price third_price\"><div class=\"bottom_price price_tree\"></div></section>";									


	function questOne_firstSchedule() {
		document.querySelectorAll("#quest_2 .second_price")[0].innerHTML = "<div class=\"bottom_price price_two\"></div> <span class=\"time\">" + first_set_time[4] + "</span><span class=\"time\">" + first_set_time[5] + "</span>";
	}

	questOne_firstSchedule();


	function questOne_secondSchedule() {
	document.querySelectorAll("#quest_2 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[0] + "</span><span class=\"time\">" + first_set_time[1] + "</span>" + "<span class=\"time\">" + first_set_time[2] + "</span>"+ "<span class=\"time\">" + first_set_time[3] + "</span>";                                                
	}

	questOne_secondSchedule();

	function questOne_thirdSchedule() {
		document.querySelectorAll("#quest_2 .third_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[6] + "</span><span class=\"time\">" + first_set_time[7] + "</span> <span class=\"time\">" + first_set_time[8] + "</span>";
	}

	 questOne_thirdSchedule()


	setPrice()
}

questTwo_secondSchedule() 




/* Shedule actions end */


