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
  // console.log('main src functions js');
  $('body :not(.wp-embedded-content)').fitVids(); // Hace la animación del botón menú

  var btnMenu = document.getElementById('btn_menu');
  btnMenu.addEventListener('click', function () {
    // btnMenu.classList.toggle('change');
    // console.log('click menu');
    $('.main_navigation').animate({
      width: '100%'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmaXRWaWRzIiwiYnRuTWVudSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJ3aWR0aCIsImJ0bkNsb3NlTWVudSIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDM0I7QUFDQUYsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNHLE9BQXJDLEdBRjJCLENBSTNCOztBQUNBLE1BQUlDLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQUQsU0FBTyxDQUFDRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFJO0FBQ3JDO0FBQ0E7QUFDQU4sS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JPLE9BQXRCLENBQThCO0FBQUNDLFdBQUssRUFBQztBQUFQLEtBQTlCO0FBQ0EsR0FKRDtBQU1BLE1BQUlDLFlBQVksR0FBR1IsUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUF4QixDQUFuQjtBQUNBSSxjQUFZLENBQUNILGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQUk7QUFDMUNOLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTyxPQUF0QixDQUE4QjtBQUFDQyxXQUFLLEVBQUM7QUFBUCxLQUE5QjtBQUNBLEdBRkQ7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsQ0F2Q0QsRTs7Ozs7Ozs7Ozs7QUNDQVIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCLE1BQUksbUJBQW1CUSxTQUF2QixFQUFrQyxDQWVqQyxDQWZELENBQ0M7QUFDRTtBQUNBO0FBQ0M7QUFDRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSDs7QUFFQSxDQXBCRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9qcy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0ICcuL2pzL3NjcmlwdHMuanMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdC8vIGNvbnNvbGUubG9nKCdtYWluIHNyYyBmdW5jdGlvbnMganMnKTtcblx0JCgnYm9keSA6bm90KC53cC1lbWJlZGRlZC1jb250ZW50KScpLmZpdFZpZHMoKTtcblxuXHQvLyBIYWNlIGxhIGFuaW1hY2nDs24gZGVsIGJvdMOzbiBtZW7DulxuXHRsZXQgYnRuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbWVudScpO1xuXHRidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntcblx0XHQvLyBidG5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjbGljayBtZW51Jyk7XG5cdFx0JCgnLm1haW5fbmF2aWdhdGlvbicpLmFuaW1hdGUoe3dpZHRoOicxMDAlJ30pO1xuXHR9KTtcblxuXHRsZXQgYnRuQ2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21haW5fbWVudScpXG5cdGJ0bkNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0JCgnLm1haW5fbmF2aWdhdGlvbicpLmFuaW1hdGUoe3dpZHRoOicwJ30pO1xuXHR9KTtcblxuXG5cdC8qbGV0IHBsYXllciA9IG51bGw7XG5cdCQoXCIucGxheWVyX2NvbnRhaW5lciBzdmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwib3BlbiBwbGF5ZXIgY2xpY2tcIik7XG5cdFx0b3BlbldpbmRvdygpO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuV2luZG93ID0gKCk9Pntcblx0XHRwbGF5ZXIgPSB3aW5kb3cub3BlbihcImh0dHA6Ly9sb2NhbGhvc3QvfnJpemlrYS9ub2ZtLXJhZGlvLmNvbS9wbGF5ZXIvXCIsIFwiX2JsYW5rXCIsIFwibWVudWJhcj0wLHN0YXR1cz0wXCIpO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXaW5kb3cgPSAoKT0+e1xuXHRcdGlmKHBsYXllciE9bnVsbCl7XG5cdFx0XHRwbGF5ZXIuY2xvc2UoKTtcdFxuXHRcdH1cblx0fVxuXG5cdCQoJy5jbG9zZV9wbGF5ZXJfd2luZG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnY2xvc2UgcGxheWVyJyk7XG5cdFx0Y2xvc2VXaW5kb3coKTtcblx0fSk7Ki9cblxufSk7IiwiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuXHRcdC8vY29uc29sZS5sb2coJ3RoZXJlIGlzIHNlcnZpY2Ugd29ya2VyJyk7XG5cdCAgXHQvLyBVc2UgdGhlIHdpbmRvdyBsb2FkIGV2ZW50IHRvIGtlZXAgdGhlIHBhZ2UgbG9hZCBwZXJmb3JtYW50XG5cdCAgXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0ICAgIC8vIFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4vd3AtY29udGVudC90aGVtZXMvYmFzZS10aGVtZS9kaXN0L3NlcnZpY2Utd29ya2VyLmpzJyk7XG5cdCAgXHQvLyB9KTtcblxuXHQgIFx0Ly8gY29uc29sZS5sb2coJ1N3Pj4+PicpO1xuXHQgIFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuXHQgIFx0Ly8gXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi9zdy5qcycpLnRoZW4ocmVnaXN0cmF0aW9uPT57XG5cdCAgXHQvLyBcdFx0Y29uc29sZS5sb2coIGBTdWNjZXNzOiAke3JlZ2lzdHJhdGlvbi5zY29wZX1gKTtcblx0ICBcdC8vIFx0fSwgZXJyPT57XG5cdCAgXHQvLyBcdFx0Y29uc29sZS5lcnJvcihgRmFpbGVkOiAke2Vycn1gKTtcblx0ICBcdC8vIFx0fSlcblx0ICBcdC8vIH0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ3NyYy9zY3JpcHRzLmpzJyk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=