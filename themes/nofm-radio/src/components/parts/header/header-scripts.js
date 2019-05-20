$(document).ready(function(){
	console.log("header js");

	$("#close_social").on("click", function(){
		// console.log('click');
		$(".social_network_header").hide("fast");
		localStorage.setItem("shouldHideElem", "true");
		// $('#main_site_header').css({position:'fixed'});
	});

	$("btn_open_player").on("click", function(){
		console.log("click");
	});

	$(window).on("load", function(){
		let should_hide_elem = localStorage.getItem("shouldHideElem");
		if(should_hide_elem==="true"){
			$(".social_network_header").hide("fast");
		}
	});

});