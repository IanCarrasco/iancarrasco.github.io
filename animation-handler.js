
$("#content-frame").hide()
function pagination(){
	var pages = ["home","work","resume","projects","contact"]
	var page_no = pages.indexOf(window.location.hash.substring(1));
	console.log(page_no)
	if(page_no==0){
		$("#prev_name").text('')
		$("#next_name").text('')
	}
	else if(page_no>0 && page_no<4){
		$("#prev_name").text(pages[page_no-1])
		$("#next_name").text(pages[page_no+1])
		$("#prev_name").click(()=>{
			window.location.href = "#" + pages[page_no-1];			
		})
		$("#next_name").click(()=>{
			window.location.href = "#" + pages[page_no+1];			
		})
	}
	else if(page_no==4){
		$("#prev_name").text(pages[page_no-1])
		$("#prev_name").click(()=>{
			window.location.href = "#" + pages[page_no-1];			
		})
	}
}
window.onload = () =>{
	if(window.location.href == 'http://iancarras.co/'){
		routie('home')
	}
	pagination()
}
window.onhashchange = function() {
	pagination()
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
	var pages = ["work","resume","projects","contact"]
	var page_no = pages.indexOf(name);
	if(page_no>0){
		$("#prev_name").text('')
		$("#next_name").text('')
	}
	else{
		$("#next_name").text('')
		$("#prev_name").text('')
	}
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
