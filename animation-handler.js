$(".content-box").hide(0);
$(".nav-button").click(function(e){
	$("#name-container").toggleClass("full");
	$("#name").html((e.target.innerText));
	$(".content-box").css({"opacity" : "1"}).delay(1000).show(1);
});
