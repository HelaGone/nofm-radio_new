$(document).ready(function(){
	console.log('main src functions js');
	$('body :not(.wp-embedded-content)').fitVids();

	// Hace la animación del botón menú
	let btnMenu = document.getElementById('btn_menu');
	btnMenu.addEventListener('click', ()=>{
		// btnMenu.classList.toggle('change');
		// console.log('click menu');
		$('.main_navigation').animate({width:'100%'});
	});

	let btnCloseMenu = document.getElementById('close_main_menu')
	btnCloseMenu.addEventListener('click', ()=>{
		$('.main_navigation').animate({width:'0'});
	});

	$(".player_container svg").on("click", function(){
		console.log("open player click");

		window.open("http://localhost/~rizika/nofm-radio.com/player/", "_blank", "menubar=0,status=0");
	});

});