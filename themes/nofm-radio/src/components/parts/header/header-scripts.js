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

	if('IntersectionObserver' in window){
		const observer_options = {root:null,rootMargin:'275px 0px 0px 0px',threshold:1.0}
		const oberver_target = document.querySelector('#main_header_section');
		let check = false;
		let observer = new IntersectionObserver((entries, observer)=>{ 
			entries.forEach(entry=>{
				if(entry.isIntersecting){
					console.log('unfix');
					check = true;
					$('#central_header').removeClass('fix-header');
					$('#central_header').addClass('container');
					$('#barra_noticias').removeClass('paddingTop');
				}else if(check){
					console.log('fix');
					$('#barra_noticias').addClass('paddingTop');
					$('#central_header').addClass('fix-header');
					$('#central_header').removeClass('container');
				}
			})
		 }, observer_options);

		observer.observe(oberver_target);
	}
});
