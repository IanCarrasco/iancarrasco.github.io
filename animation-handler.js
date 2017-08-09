
$("#content-frame").hide()
window.onload = () =>{
	if(window.location == 'http://iancarras.co'){
		routie('home')
	}
}

var ExpandNav = (name) =>{
	$("#nav-holder").fadeOut(500).delay(1000);
	$("#name-container").addClass("full");
	$("#name").html((name));
	document.getElementById('content-frame').src = name +'.html'
	document.title = "Ian Carrasco | " + name;
	$(".content-box").css({"opacity" : "1"}).delay(1000).show(1);
	$("#close-expand").css({"visibility":"visible","opacity":"1"})
	
	$("#content-frame").css({zIndex:99})
	$("#content-frame").delay(500).fadeIn(100)
}
var CollapseNav = () =>{
	$("#name-container").removeClass("full");
	$("#name").delay(500).html("ian<br>carrasco");
	$("#close-expand").css({"visibility":"hidden","opacity":"0"})
	$("#nav-holder").fadeIn(500)
	$("#content-frame").fadeOut(200)
}


routie('projects', function() {
	ExpandNav('projects')
});
routie('work', function() {
	ExpandNav('work')
});
routie('resume', function() {
	ExpandNav('resume')
});
routie('contact', function() {
	ExpandNav('contact')
});
routie('home', function() {
	CollapseNav()
});

//PARTICLE BACKGROUND
