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