$(document).ready(function(){

	$("#close_social").on("click", function(){
		//$(".social_network_header").hide("fast");
		//localStorage.setItem("shouldHideElem", true);
	});
	
	let should_hide_elem = localStorage.getItem("shouldHideElem");
	if(typeof Storage !== "undefined" && should_hide_elem){
		//$(".social_network_header").css({display: "none"});
	}

	$(".btn_play_live").on("click", function(){
		console.log("open player click");
	});

});
