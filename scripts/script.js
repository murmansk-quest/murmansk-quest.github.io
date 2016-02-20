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
// !!!!! Control schedule variables in schedule.js !!!!!


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
	for( i = 0; i < circle.length; i++ ) {
		circle[i].style.background = "transparent";
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
	for( i = 0; i < circle.length; i++ ) {
		circle[i].style.background = "transparent";
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


// Set time of firs quest

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

questOne_firstSchedule();



// Set time of second quest

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

function questTwo_thirdSchedule() {

	document.querySelectorAll("#quest_2")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_2 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + first_set_time[0] + "</span><span class=\"time\">" + first_set_time[1] + "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_2 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + first_set_time[2] + "</span><span class=\"time\">" + first_set_time[3] + "</span><span class=\"time\">" + first_set_time[4] +  "</span><span class=\"time\">" + first_set_time[5] +  "</span><span class=\"time\">" + first_set_time[6] +  "</span><span class=\"time\">" + first_set_time[7] +  "</span><span class=\"time\">" + first_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();


	setPrice()
}

questTwo_firstSchedule();



// Set time of firs quest

function questTree_firstSchedule() {

	document.querySelectorAll("#quest_3")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_3 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + second_set_time[0] + "</span> <span class=\"time\">" + second_set_time[1] + "</span> <span class=\"time\">" + second_set_time[2] + "</span><span class=\"time\">" + second_set_time[3] + "</span><span class=\"time\">" + second_set_time[4] +  "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_3 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + second_set_time[5] +  "</span><span class=\"time\">" + second_set_time[6] +  "</span><span class=\"time\">" + second_set_time[7] +  "</span><span class=\"time\">" + second_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();
}

function questTree_secondSchedule() {

	document.querySelectorAll("#quest_3")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section><section class=\"price third_price\"><div class=\"bottom_price price_tree\"></div></section>";									


	function questOne_secondSchedule() {
	document.querySelectorAll("#quest_3 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + second_set_time[0] + "</span> <span class=\"time\">" + second_set_time[1] + "</span><span class=\"time\">" + second_set_time[2] + "</span>" + "<span class=\"time\">" + second_set_time[3] + "</span>";                                                
	}

	questOne_secondSchedule();


	function questOne_firstSchedule() {
		document.querySelectorAll("#quest_3 .second_price")[0].innerHTML = "<div class=\"bottom_price price_two\"></div> <span class=\"time\">" + second_set_time[4] + "</span><span class=\"time\">" + second_set_time[5] + "</span>";
	}

	questOne_firstSchedule();

	function questOne_thirdSchedule() {
		document.querySelectorAll("#quest_3 .third_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + second_set_time[6] + "</span><span class=\"time\">" + second_set_time[7] + "</span> <span class=\"time\">" + second_set_time[8] + "</span>";
	}

	questOne_thirdSchedule()


	setPrice()
}

function questTree_thirdSchedule() {

	document.querySelectorAll("#quest_3")[0].innerHTML = "<section class=\"price price first_price\"><div class=\"bottom_price price_one\"></div></section><section class=\"price second_price\"><div class=\"bottom_price price_two\"></div></section>";


	function questOne_firstSchedule() {
	document.querySelectorAll("#quest_3 .first_price")[0].innerHTML = "<div class=\"bottom_price price_one\"></div> <span class=\"time\">" + second_set_time[0] + "</span><span class=\"time\">" + second_set_time[1] + "</span>";
	setPrice()
	}

	questOne_secondSchedule();


	function questOne_secondSchedule() {
		document.querySelectorAll("#quest_3 .second_price")[0].innerHTML = "<div class=\"bottom_price price_tree\"></div> <span class=\"time\">" + second_set_time[2] + "</span><span class=\"time\">" + second_set_time[3] + "</span><span class=\"time\">" + second_set_time[4] +  "</span><span class=\"time\">" + second_set_time[5] +  "</span><span class=\"time\">" + second_set_time[6] +  "</span><span class=\"time\">" + second_set_time[7] +  "</span><span class=\"time\">" + second_set_time[8] +  "</span>";
		setPrice()
	}

	questOne_firstSchedule();


	setPrice()
}

questTree_firstSchedule();



// Circle actions

var schedule_one_circle = document.getElementsByClassName("schedule_one");
var schedule_two_circle = document.getElementsByClassName("schedule_two");
var schedule_tree_circle = document.getElementsByClassName("schedule_tree");

for( i = 0; i < schedule_one_circle.length; i++ ) {
	schedule_one_circle[i].addEventListener("click", scheduleOne)
}

function scheduleOne() {
	questOne_firstSchedule();
	questTwo_firstSchedule();
	questTree_firstSchedule();
	for( i = 0; i < time.length; i++ ) {
		time[i].addEventListener("click", pickTime)
	}
}

for( i = 0; i < schedule_two_circle.length; i++ ) {
	schedule_two_circle[i].addEventListener("click", scheduleTwo)
}

function scheduleTwo() {
	questOne_secondSchedule();
	questTwo_secondSchedule();
	questTree_secondSchedule();
	for( i = 0; i < time.length; i++ ) {
		time[i].addEventListener("click", pickTime)
	}
}

for( i = 0; i < schedule_tree_circle.length; i++ ) {
	schedule_tree_circle[i].addEventListener("click", scheduleTree)
}

function scheduleTree() {
	questOne_thirdSchedule();
	questTwo_thirdSchedule();
	questTree_thirdSchedule();
	for( i = 0; i < time.length; i++ ) {
		time[i].addEventListener("click", pickTime)
	}
}


// Pick circle

var circle = document.getElementsByClassName("circle");

for( i = 0; i < circle.length; i++ ) {
	circle[i].addEventListener("click", pickCircle)
}

function pickCircle(event) {
	for( i = 0; i < circle.length; i++ ) {
		circle[i].style.background = "transparent";
	}
	this.style.background = "#FF7F7F";
	target = event.target;
	if( target.parentNode.classList.contains("circle") ) {
		time_inner_target = event.target.parentNode
	}
	if( target.parentNode.parentNode.classList.contains("circle") ) {
		time_inner_target = event.target.parentNode.parentNode
	}
	if( target.classList.contains("circle") ) {
		time_inner_target = event.target
	}
}



// Pick time and modal window

var time = document.getElementsByClassName("time");
var modal_block = document.getElementById("modal_block");
var modal_window = document.getElementById("modal_window");
var modal_count = 0;

for( i = 0; i < time.length; i++ ) {
	time[i].addEventListener("click", pickTime)
}

var modal_cost;

function pickTime(event) {
	for( i = 0; i < time.length; i++ ) {
		time[i].style.background = "transparent";
	}
	this.style.background = "#c22e36";
	modal_block.style.display = "block";
	setTimeout( function() {
		modal_count = 1;
	}, 300 );
	target = event.target;
	cost_footer.innerHTML = target.parentElement.getElementsByClassName("bottom_price")[0].innerHTML
}


// Set quest names

var quest_name_one = document.getElementById("quest_name_one");
var quest_name_two = document.getElementById("quest_name_two");
var quest_name_tree = document.getElementById("quest_name_tree");

quest_name_one.innerHTML = quest_one;

quest_name_two.innerHTML = quest_two;

quest_name_tree.innerHTML = quest_tree;



/* Shedule actions end */


/* Modal window */

window.addEventListener("click", closeModal);

function closeModal(event) {
	target = event.target
	if( !target.classList.contains("modal") && modal_count == 1 ) {
		modal_block.style.display = "none";
		modal_count = 0;
	}
}


// Clear input

function doClear(theText) {
	if(theText.value == theText.defaultValue) {
		theText.value = "";
	} 
}

function doDefault(theText) { 
	if(theText.value == "") { 
		theText.value = theText.defaultValue 
	} 
}



// Get date, time, quest_name in modal window


// Get date

for( i = 0; i < circle.length; i++ ) {
	circle[i].addEventListener("click", getDate)
}


var selected_date = "1";
var date_in_modal = document.getElementById("selected_date");
date_in_modal.innerHTML = selected_date;


function getDate(event){
	target = event.target;
	selected_date = time_inner_target.querySelectorAll(".date_inner")[0].innerHTML;
	date_in_modal.innerHTML = selected_date;
	for( i = 0; i < time.length; i++ ) {
		time[i].addEventListener("click", getTime)
	}
}


// Get time


var selected_time = "10:00";
var time_in_modal = document.getElementById("selected_time");
var quest_name_modal = document.getElementById("quest_name_modal");
time_in_modal.innerHTML = selected_time;

for( i = 0; i < time.length; i++ ) {
	time[i].addEventListener("click", getTime)
}

function getTime(event) {
	target = event.target;
	time_in_modal.innerHTML = target.innerHTML;
	if( target.parentNode.parentNode.classList.contains("price_block_1") ) {
		quest_name_modal.innerHTML = quest_one;
	}
	if( target.parentNode.parentNode.classList.contains("price_block_2") ) {
		quest_name_modal.innerHTML = quest_two;
	}
	if( target.parentNode.parentNode.classList.contains("price_block_3") ) {
		quest_name_modal.innerHTML = quest_tree;
	}
}


// Set month

var month_in_modal = document.getElementById("month_in_modal");

month_in_modal.innerHTML = set_month;


// Slider

var p = document.getElementById("amount"),
    res = document.getElementById("result");

p.addEventListener("input", function() {
    res.innerHTML = p.value;
}, false); 

/* Modal window end */