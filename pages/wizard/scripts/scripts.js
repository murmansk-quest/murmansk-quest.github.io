/* Modal window */

window.addEventListener("click", closeModal);

function closeModal(event) {
	target = event.target
	if( !target.classList.contains("modal") && modal_count == 1 ) {
		modal_block.style.display = "none";
		modal_count = 0;
		var all = document.querySelectorAll("header, main")
		for( i = 0; i < all.length; i++ ) {
			all[i].style.webkitFilter = "blur(0)";
		}
	}
}


// Add time

var time = document.getElementsByClassName("time");

var selected_date = document.getElementById("selected_date");

var month_in_modal = document.getElementById("month_in_modal");

var selected_time = document.getElementById("selected_time");

for( i = 0; i < time.length; i++ ) {
	time[i].addEventListener("click", pickTime)
}

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
	cost_footer.innerHTML = target.parentElement.getElementsByClassName("bottom_price")[0].innerHTML;
	selected_date.innerHTML = target.parentElement.parentElement.parentElement.getElementsByClassName("date_schedule")[0].innerHTML;
	selected_time.innerHTML = target.innerHTML;
	var all = document.querySelectorAll("header, main")
	for( i = 0; i < all.length; i++ ) {
		all[i].style.webkitFilter = "blur(2px)";
	}
}

// Slider

var p = document.getElementById("amount"),
    res = document.getElementById("result");

p.addEventListener("input", function() {
    res.innerHTML = p.value;
}, false); 

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