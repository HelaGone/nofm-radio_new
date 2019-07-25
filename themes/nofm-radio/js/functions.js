(function($){

	"use strict";
	$(function(){
		console.log('hello from functions.js');

		const today = new Date();
		// const bg_url = `${window.location.origin}/~rizika/nofm-radio.com/wp-content/themes/nofm-radio/images/week/${today.getDay()}.jpg` ; //DEV
		const bg_url = `${window.location.origin}/wp-content/themes/nofm-radio/images/week/${today.getDay()}.jpg` ; //PROD

		const dom_figure = document.getElementById('envivo_figure');
		$(dom_figure).find('.day_main_background').attr("src", bg_url);
	});

})(jQuery);