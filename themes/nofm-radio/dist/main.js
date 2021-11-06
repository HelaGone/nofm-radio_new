/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (() => {

$(document).ready(function () {
  $('body :not(.wp-embedded-content)').fitVids(); // Hace la animación del botón menú

  var btnMenu = document.getElementById('btn_menu');
  btnMenu.addEventListener('click', function () {
    var width_pecent = "0%";
    var screen_width = window.screen.width;

    if (screen_width >= 1024) {
      width_pecent = "40%";
    } else if (screen_width >= 768 && screen_width < 1024) {
      width_pecent = "60%";
    } else {
      width_pecent = "100%";
    }

    $('.main_navigation').animate({
      width: width_pecent
    });
  });
  var btnCloseMenu = document.getElementById('close_main_menu');
  btnCloseMenu.addEventListener('click', function () {
    $('.main_navigation').animate({
      width: '0'
    });
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

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ (() => {

$(document).ready(function () {
  if ('serviceWorker' in navigator) {} //console.log('there is service worker');
  // Use the window load event to keep the page load performant
  // window.addEventListener('load', () => {
  // 	navigator.serviceWorker.register('./wp-content/themes/base-theme/dist/service-worker.js');
  // });
  // console.log('Sw>>>>');
  // window.addEventListener('load', ()=>{
  // 	navigator.serviceWorker.register('./sw.js').then(registration=>{
  // 		console.log( `Success: ${registration.scope}`);
  // 	}, err=>{
  // 		console.error(`Failed: ${err}`);
  // 	})
  // });
  // console.log('src/scripts.js');

});

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/functions.js */ "./src/js/functions.js");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_functions_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scripts.js */ "./src/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCRixFQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0csT0FBckMsR0FEMkIsQ0FHM0I7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQUk7QUFDckMsUUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBakM7O0FBQ0EsUUFBR0gsWUFBWSxJQUFJLElBQW5CLEVBQXlCO0FBQ3hCRCxNQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNBLEtBRkQsTUFFTSxJQUFHQyxZQUFZLElBQUksR0FBaEIsSUFBdUJBLFlBQVksR0FBRyxJQUF6QyxFQUE4QztBQUNuREQsTUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDQSxLQUZLLE1BRUQ7QUFDSkEsTUFBQUEsWUFBWSxHQUFHLE1BQWY7QUFDQTs7QUFDRFAsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JZLE9BQXRCLENBQThCO0FBQUNELE1BQUFBLEtBQUssRUFBQ0o7QUFBUCxLQUE5QjtBQUNBLEdBWEQ7QUFhQSxNQUFJTSxZQUFZLEdBQUdaLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixpQkFBeEIsQ0FBbkI7QUFDQVEsRUFBQUEsWUFBWSxDQUFDUCxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFJO0FBQzFDTixJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksT0FBdEIsQ0FBOEI7QUFBQ0QsTUFBQUEsS0FBSyxFQUFDO0FBQVAsS0FBOUI7QUFDQSxHQUZEO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLENBN0NEOzs7Ozs7Ozs7O0FDQ0FYLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUMzQixNQUFJLG1CQUFtQlksU0FBdkIsRUFBa0MsQ0FlakMsQ0FmRCxDQUNDO0FBQ0U7QUFDQTtBQUNDO0FBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0g7O0FBRUEsQ0FwQkQ7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvanMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvanMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQkKCdib2R5IDpub3QoLndwLWVtYmVkZGVkLWNvbnRlbnQpJykuZml0VmlkcygpO1xuXG5cdC8vIEhhY2UgbGEgYW5pbWFjacOzbiBkZWwgYm90w7NuIG1lbsO6XG5cdGxldCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9tZW51Jyk7XG5cdGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRcdGxldCB3aWR0aF9wZWNlbnQgPSBcIjAlXCI7XG5cdFx0bGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG5cdFx0aWYoc2NyZWVuX3dpZHRoID49IDEwMjQgKXtcblx0XHRcdHdpZHRoX3BlY2VudCA9IFwiNDAlXCI7XG5cdFx0fWVsc2UgaWYoc2NyZWVuX3dpZHRoID49IDc2OCAmJiBzY3JlZW5fd2lkdGggPCAxMDI0KXtcblx0XHRcdHdpZHRoX3BlY2VudCA9IFwiNjAlXCI7XG5cdFx0fWVsc2V7XG5cdFx0XHR3aWR0aF9wZWNlbnQgPSBcIjEwMCVcIjtcblx0XHR9XG5cdFx0JCgnLm1haW5fbmF2aWdhdGlvbicpLmFuaW1hdGUoe3dpZHRoOndpZHRoX3BlY2VudH0pO1xuXHR9KTtcblxuXHRsZXQgYnRuQ2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21haW5fbWVudScpXG5cdGJ0bkNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0JCgnLm1haW5fbmF2aWdhdGlvbicpLmFuaW1hdGUoe3dpZHRoOicwJ30pO1xuXHR9KTtcblxuXG5cdC8qbGV0IHBsYXllciA9IG51bGw7XG5cdCQoXCIucGxheWVyX2NvbnRhaW5lciBzdmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwib3BlbiBwbGF5ZXIgY2xpY2tcIik7XG5cdFx0b3BlbldpbmRvdygpO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuV2luZG93ID0gKCk9Pntcblx0XHRwbGF5ZXIgPSB3aW5kb3cub3BlbihcImh0dHA6Ly9sb2NhbGhvc3QvfnJpemlrYS9ub2ZtLXJhZGlvLmNvbS9wbGF5ZXIvXCIsIFwiX2JsYW5rXCIsIFwibWVudWJhcj0wLHN0YXR1cz0wXCIpO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXaW5kb3cgPSAoKT0+e1xuXHRcdGlmKHBsYXllciE9bnVsbCl7XG5cdFx0XHRwbGF5ZXIuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHQkKCcuY2xvc2VfcGxheWVyX3dpbmRvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coJ2Nsb3NlIHBsYXllcicpO1xuXHRcdGNsb3NlV2luZG93KCk7XG5cdH0pOyovXG5cbn0pO1xuIiwiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuXHRcdC8vY29uc29sZS5sb2coJ3RoZXJlIGlzIHNlcnZpY2Ugd29ya2VyJyk7XG5cdCAgXHQvLyBVc2UgdGhlIHdpbmRvdyBsb2FkIGV2ZW50IHRvIGtlZXAgdGhlIHBhZ2UgbG9hZCBwZXJmb3JtYW50XG5cdCAgXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0ICAgIC8vIFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4vd3AtY29udGVudC90aGVtZXMvYmFzZS10aGVtZS9kaXN0L3NlcnZpY2Utd29ya2VyLmpzJyk7XG5cdCAgXHQvLyB9KTtcblxuXHQgIFx0Ly8gY29uc29sZS5sb2coJ1N3Pj4+PicpO1xuXHQgIFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuXHQgIFx0Ly8gXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi9zdy5qcycpLnRoZW4ocmVnaXN0cmF0aW9uPT57XG5cdCAgXHQvLyBcdFx0Y29uc29sZS5sb2coIGBTdWNjZXNzOiAke3JlZ2lzdHJhdGlvbi5zY29wZX1gKTtcblx0ICBcdC8vIFx0fSwgZXJyPT57XG5cdCAgXHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRmFpbGVkOiAke2Vycn1gKTtcblx0ICBcdC8vIFx0fSlcblx0ICBcdC8vIH0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ3NyYy9zY3JpcHRzLmpzJyk7XG5cbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vanMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCAnLi9qcy9zY3JpcHRzLmpzJzsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmaXRWaWRzIiwiYnRuTWVudSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoX3BlY2VudCIsInNjcmVlbl93aWR0aCIsIndpbmRvdyIsInNjcmVlbiIsIndpZHRoIiwiYW5pbWF0ZSIsImJ0bkNsb3NlTWVudSIsIm5hdmlnYXRvciJdLCJzb3VyY2VSb290IjoiIn0=