(function($){

	"use strict";
	$(function(){
		console.log('hello from functions.js');


		const bg_url = `${window.location.origin}/~rizika/nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sample_player_bg.jpg` ; //DEV
		// const bg_url = `${window.location.origin}/wp-content/themes/nofm-radio/src/img/week/sample_player_bg.jpg` ; //PROD

		const dom_figure = document.getElementById('envivo_figure');
		$(dom_figure).find('.day_main_background').attr("src", bg_url);
		console.log(bg_url);

	});

})(jQuery);