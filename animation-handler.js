
$("#content-frame").hide()
$(".nav-button").click(function(e){
	$("#name-container").toggleClass("full");
	$("#name").html((e.target.innerText));
	document.getElementById('content-frame').src = e.target.innerText +'.html'
	$(".content-box").css({"opacity" : "1"}).delay(1000).show(1);
	$("#close-expand").css({"visibility":"visible","opacity":"1"})
	$("#nav-holder").fadeOut(500).delay(1000);
	$("#content-frame").css({zIndex:99})
	$("#content-frame").delay(500).fadeIn(200)
});
$("#close-expand").click(function(){
	$("#name-container").toggleClass("full");
	$("#name").delay(500).html("ian<br>carrasco");
	$("#close-expand").css({"visibility":"hidden","opacity":"0"})
	$("#nav-holder").fadeIn(500)
	$("#content-frame").fadeOut(200)
});

//PARTICLE BACKGROUND
particlesJS.load('particle-container', './assets/particlesjs-config.json');