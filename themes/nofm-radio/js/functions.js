(function($){
	"use strict";
	$(function(){
		const today = new Date();
		const bg_url = `https://nofm-radio.com/wp-content/themes/nofm-radio/images/week/${today.getDay()}.jpg` ; //PROD

		const dom_figure = document.getElementById('envivo_figure');
		$(dom_figure).find('.day_main_background').attr("src", bg_url);

		if ('serviceWorker' in navigator) {
		  window.addEventListener('load', function() {
		    //navigator.serviceWorker.register('/sw.js?v=5.1.3');
		  });
		}
	});
})(jQuery);
