
$(document).ready(function(){
	if ('serviceWorker' in navigator) {
		console.log('there is service worker');
	  	// Use the window load event to keep the page load performant
	  	// window.addEventListener('load', () => {
	   //  	navigator.serviceWorker.register('./wp-content/themes/base-theme/dist/service-worker.js');
	  	// });
	}

	// console.log('src/scripts.js');

});