/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/functions.js */ "./src/js/functions.js");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_functions_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scripts.js */ "./src/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmaXRWaWRzIiwiYnRuTWVudSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoX3BlY2VudCIsInNjcmVlbl93aWR0aCIsIndpbmRvdyIsInNjcmVlbiIsIndpZHRoIiwiYW5pbWF0ZSIsImJ0bkNsb3NlTWVudSIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDM0JGLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDRyxPQUFyQyxHQUQyQixDQUczQjs7QUFDQSxNQUFJQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0FELFNBQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBSTtBQUNyQyxRQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxRQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFqQzs7QUFDQSxRQUFHSCxZQUFZLElBQUksSUFBbkIsRUFBeUI7QUFDeEJELGtCQUFZLEdBQUcsS0FBZjtBQUNBLEtBRkQsTUFFTSxJQUFHQyxZQUFZLElBQUksR0FBaEIsSUFBdUJBLFlBQVksR0FBRyxJQUF6QyxFQUE4QztBQUNuREQsa0JBQVksR0FBRyxLQUFmO0FBQ0EsS0FGSyxNQUVEO0FBQ0pBLGtCQUFZLEdBQUcsTUFBZjtBQUNBOztBQUNEUCxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksT0FBdEIsQ0FBOEI7QUFBQ0QsV0FBSyxFQUFDSjtBQUFQLEtBQTlCO0FBQ0EsR0FYRDtBQWFBLE1BQUlNLFlBQVksR0FBR1osUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUF4QixDQUFuQjtBQUNBUSxjQUFZLENBQUNQLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQUk7QUFDMUNOLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxPQUF0QixDQUE4QjtBQUFDRCxXQUFLLEVBQUM7QUFBUCxLQUE5QjtBQUNBLEdBRkQ7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsQ0E3Q0QsRTs7Ozs7Ozs7Ozs7QUNDQVgsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCLE1BQUksbUJBQW1CWSxTQUF2QixFQUFrQyxDQWVqQyxDQWZELENBQ0M7QUFDRTtBQUNBO0FBQ0M7QUFDRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSDs7QUFFQSxDQXBCRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9qcy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0ICcuL2pzL3NjcmlwdHMuanMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdCQoJ2JvZHkgOm5vdCgud3AtZW1iZWRkZWQtY29udGVudCknKS5maXRWaWRzKCk7XG5cblx0Ly8gSGFjZSBsYSBhbmltYWNpw7NuIGRlbCBib3TDs24gbWVuw7pcblx0bGV0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX21lbnUnKTtcblx0YnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0bGV0IHdpZHRoX3BlY2VudCA9IFwiMCVcIjtcblx0XHRsZXQgc2NyZWVuX3dpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcblx0XHRpZihzY3JlZW5fd2lkdGggPj0gMTAyNCApe1xuXHRcdFx0d2lkdGhfcGVjZW50ID0gXCI0MCVcIjtcblx0XHR9ZWxzZSBpZihzY3JlZW5fd2lkdGggPj0gNzY4ICYmIHNjcmVlbl93aWR0aCA8IDEwMjQpe1xuXHRcdFx0d2lkdGhfcGVjZW50ID0gXCI2MCVcIjtcblx0XHR9ZWxzZXtcblx0XHRcdHdpZHRoX3BlY2VudCA9IFwiMTAwJVwiO1xuXHRcdH1cblx0XHQkKCcubWFpbl9uYXZpZ2F0aW9uJykuYW5pbWF0ZSh7d2lkdGg6d2lkdGhfcGVjZW50fSk7XG5cdH0pO1xuXG5cdGxldCBidG5DbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfbWFpbl9tZW51Jylcblx0YnRuQ2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntcblx0XHQkKCcubWFpbl9uYXZpZ2F0aW9uJykuYW5pbWF0ZSh7d2lkdGg6JzAnfSk7XG5cdH0pO1xuXG5cblx0LypsZXQgcGxheWVyID0gbnVsbDtcblx0JChcIi5wbGF5ZXJfY29udGFpbmVyIHN2Z1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coXCJvcGVuIHBsYXllciBjbGlja1wiKTtcblx0XHRvcGVuV2luZG93KCk7XG5cdH0pO1xuXG5cdGNvbnN0IG9wZW5XaW5kb3cgPSAoKT0+e1xuXHRcdHBsYXllciA9IHdpbmRvdy5vcGVuKFwiaHR0cDovL2xvY2FsaG9zdC9+cml6aWthL25vZm0tcmFkaW8uY29tL3BsYXllci9cIiwgXCJfYmxhbmtcIiwgXCJtZW51YmFyPTAsc3RhdHVzPTBcIik7XG5cdH1cblxuXHRjb25zdCBjbG9zZVdpbmRvdyA9ICgpPT57XG5cdFx0aWYocGxheWVyIT1udWxsKXtcblx0XHRcdHBsYXllci5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdCQoJy5jbG9zZV9wbGF5ZXJfd2luZG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnY2xvc2UgcGxheWVyJyk7XG5cdFx0Y2xvc2VXaW5kb3coKTtcblx0fSk7Ki9cblxufSk7XG4iLCJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0Ly9jb25zb2xlLmxvZygndGhlcmUgaXMgc2VydmljZSB3b3JrZXInKTtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAgLy8gXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXG5cdCAgXHQvLyBjb25zb2xlLmxvZygnU3c+Pj4+Jyk7XG5cdCAgXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdCAgXHQvLyBcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3N3LmpzJykudGhlbihyZWdpc3RyYXRpb249Pntcblx0ICBcdC8vIFx0XHRjb25zb2xlLmxvZyggYFN1Y2Nlc3M6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfWApO1xuXHQgIFx0Ly8gXHR9LCBlcnI9Pntcblx0ICBcdC8vIFx0XHRjb25zb2xlLmVycm9yKGBGYWlsZWQ6ICR7ZXJyfWApO1xuXHQgIFx0Ly8gXHR9KVxuXHQgIFx0Ly8gfSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZygnc3JjL3NjcmlwdHMuanMnKTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==