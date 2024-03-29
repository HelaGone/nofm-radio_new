$(document).ready(function(){
	$('body :not(.wp-embedded-content)').fitVids();
	let btnMenu = document.getElementById('btn_menu');
	btnMenu.addEventListener('click', ()=>{
		let width_pecent = "0%";
		let screen_width = window.screen.width;
		if(screen_width >= 1024 ){
			width_pecent = "40%";
		}else if(screen_width >= 768 && screen_width < 1024){
			width_pecent = "60%";
		}else{
			width_pecent = "100%";
		}
		$('.main_navigation').animate({width:width_pecent});
	});
	let btnCloseMenu = document.getElementById('close_main_menu');
	btnCloseMenu.addEventListener('click', ()=>{
		$('.main_navigation').animate({width:'0'});
	});

	if('serviceWorker' in navigator){
		window.addEventListener('load', function(){
			console.log("LOAD");
			navigator.serviceWorker.register('./sw.js');
		})
	}
});
