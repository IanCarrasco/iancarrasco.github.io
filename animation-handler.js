
$("#content-frame").hide()
window.onload = () =>{
	if(window.location.href == 'http://iancarras.co/'){
		routie('home')
	}
}

var ExpandNav = (name) =>{
	$("#nav-holder").fadeOut(500).delay(1000);
	$("#name-container").addClass("full");
	$("#name").html((name.toLowerCase()));
	document.getElementById('content-frame').src = name.toLowerCase() +'.html'
	document.title = "Ian Carrasco | " + name;
	$(".content-box").css({"opacity" : "1"}).delay(1000).show(1);
	$("#close-expand").css({"visibility":"visible","opacity":"1"})
	
	$("#content-frame").css({zIndex:99})
	$("#content-frame").delay(500).fadeIn(100)
}
var CollapseNav = (name) =>{
	$("#name-container").removeClass("full");
	document.title = "Ian Carrasco | " + name;
	$("#name").delay(500).html("ian<br>carrasco");
	$("#close-expand").css({"visibility":"hidden","opacity":"0"})
	$("#nav-holder").fadeIn(500)
	$("#content-frame").fadeOut(200)
}


routie('projects', function() {
	ExpandNav('Projects')
});
routie('work', function() {
	ExpandNav('Work')
});
routie('resume', function() {
	ExpandNav('Resume')
});
routie('contact', function() {
	ExpandNav('Contact')
});
routie('home', function() {
	CollapseNav('Home')
});

//PARTICLE BACKGROUND
