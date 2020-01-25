$(document).ready(function(){
	$('body :not(.wp-embedded-content)').fitVids();

	// Hace la animación del botón menú
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

	let btnCloseMenu = document.getElementById('close_main_menu')
	btnCloseMenu.addEventListener('click', ()=>{
		$('.main_navigation').animate({width:'0'});
	});


	/*let player = null;
	$(".player_container svg").on("click", function(){
		console.log("open player click");
		openWindow();
	});

	const openWindow = ()=>{
		player = window.open("http://localhost/~rizika/nofm-radio.com/player/", "_blank", "menubar=0,status=0");
	}

	const closeWindow = ()=>{
		if(player!=null){
			player.close();
		}
	}

	$('.close_player_window').on('click', function(){
		console.log('close player');
		closeWindow();
	});*/

});
