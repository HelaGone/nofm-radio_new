$(document).ready(function(){
	console.log('header js');

	$('#close_social').on('click', function(){
		console.log('click');
		$('.social_network_header').hide('fast');
		// $('#main_site_header').css({position:'fixed'});
	});

	$('btn_open_player').on('click', function(){
		console.log('click');
	});

});