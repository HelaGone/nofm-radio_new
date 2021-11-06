(function($){
	"use strict";
	$(function(){
		if ('serviceWorker' in navigator) {
		  window.addEventListener('load', function() {
		    //navigator.serviceWorker.register('/sw.js?v=5.1.3');
		  });
		}
	});
})(jQuery);
