// Set height of quest_article. Height = width / 1.7

var articles = document.querySelectorAll(".quests_block article");

var price = document.querySelectorAll(".price");

var time = document.querySelectorAll(".price .time");

if(price[1].childNodes.length == 9) {
	alert("!")
}

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


// Shedule

	// Shedule main variables