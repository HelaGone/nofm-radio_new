$(document).ready(function(){
	console.log('wp functions js');
	$('body :not(.wp-embedded-content)').fitVids();

	// Hace la animación del botón menú
	let btnMenu = document.getElementById('btn_menu');
	btnMenu.addEventListener('click', ()=>{
		btnMenu.classList.toggle('change');
		console.log('click menu');
	});

});