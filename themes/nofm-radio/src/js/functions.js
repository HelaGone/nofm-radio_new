$(document).ready(function(){
	console.log('wp functions js');
	$('body :not(.wp-embedded-content)').fitVids();

	// Hace la animación del botón menú
	let btnMenu = document.getElementById('btn_menu');
	btnMenu.addEventListener('click', ()=>{
		btnMenu.classList.toggle('change');
		console.log('click menu');
		$('.main_navigation').animate({width:'100%'});
	});

	let btnCloseMenu = document.getElementById('close_main_menu')
	btnCloseMenu.addEventListener('click', ()=>{
		$('.main_navigation').animate({width:'0'});
	});

	// $(".player_container").on("click", function(){
	// 	console.log("open player click");
	// 	$('.audio6_html5_sticky_div').show('fast');
	// });

});