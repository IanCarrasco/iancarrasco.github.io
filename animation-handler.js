$(".content-box").hide(0);
$(".nav-button").click(function(e){
	$("#name-container").toggleClass("full");
	$("#name").html((e.target.innerText));
	$(".content-box").css({"opacity" : "1"}).delay(1000).show(1);
	$("#close-expand").css({"visibility":"visible","opacity":"1"})
});
$("#close-expand").click(function(){
	$("#name-container").toggleClass("full");
	$("#name").delay(500).html("ian carrasco");
	$("#close-expand").css({"visibility":"hidden","opacity":"0"})

});

//PARTICLE BACKGROUND
particlesJS.load('particle-container', './assets/particlesjs-config.json');