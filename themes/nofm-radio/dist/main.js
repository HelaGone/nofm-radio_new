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
  console.log('main src functions js');
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
  var player = null;
  $(".player_container svg").on("click", function () {
    console.log("open player click");
    openWindow();
  });

  var openWindow = function openWindow() {
    player = window.open("http://localhost/~rizika/nofm-radio.com/player/", "_blank", "menubar=0,status=0");
  };

  var closeWindow = function closeWindow() {
    if (player != null) {
      player.close();
    }
  };

  $('.close_player_window').on('click', function () {
    console.log('close player');
    closeWindow();
  });
});

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ('serviceWorker' in navigator) {
    console.log('there is service worker'); // Use the window load event to keep the page load performant
    // window.addEventListener('load', () => {
    //  	navigator.serviceWorker.register('./wp-content/themes/base-theme/dist/service-worker.js');
    // });

    console.log('Sw>>>>');
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').then(function (registration) {
        console.log("Success: ".concat(registration.scope));
      }, function (err) {
        console.error("Failed: ".concat(err));
      });
    });
  } // console.log('src/scripts.js');

});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZml0VmlkcyIsImJ0bk1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlIiwid2lkdGgiLCJidG5DbG9zZU1lbnUiLCJwbGF5ZXIiLCJvbiIsIm9wZW5XaW5kb3ciLCJ3aW5kb3ciLCJvcGVuIiwiY2xvc2VXaW5kb3ciLCJjbG9zZSIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJzY29wZSIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUosR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNLLE9BQXJDLEdBRjJCLENBSTNCOztBQUNBLE1BQUlDLE9BQU8sR0FBR0wsUUFBUSxDQUFDTSxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQUQsU0FBTyxDQUFDRSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFJO0FBQ3JDO0FBQ0E7QUFDQVIsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JTLE9BQXRCLENBQThCO0FBQUNDLFdBQUssRUFBQztBQUFQLEtBQTlCO0FBQ0EsR0FKRDtBQU1BLE1BQUlDLFlBQVksR0FBR1YsUUFBUSxDQUFDTSxjQUFULENBQXdCLGlCQUF4QixDQUFuQjtBQUNBSSxjQUFZLENBQUNILGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQUk7QUFDMUNSLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUyxPQUF0QixDQUE4QjtBQUFDQyxXQUFLLEVBQUM7QUFBUCxLQUE5QjtBQUNBLEdBRkQ7QUFJQSxNQUFJRSxNQUFNLEdBQUcsSUFBYjtBQUNBWixHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmEsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBVTtBQUNoRFYsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQVUsY0FBVTtBQUNWLEdBSEQ7O0FBS0EsTUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSTtBQUN0QkYsVUFBTSxHQUFHRyxNQUFNLENBQUNDLElBQVAsQ0FBWSxpREFBWixFQUErRCxRQUEvRCxFQUF5RSxvQkFBekUsQ0FBVDtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSTtBQUN2QixRQUFHTCxNQUFNLElBQUUsSUFBWCxFQUFnQjtBQUNmQSxZQUFNLENBQUNNLEtBQVA7QUFDQTtBQUNELEdBSkQ7O0FBTUFsQixHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmEsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVTtBQUMvQ1YsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBYSxlQUFXO0FBQ1gsR0FIRDtBQUtBLENBdENELEU7Ozs7Ozs7Ozs7O0FDQ0FqQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDM0IsTUFBSSxtQkFBbUJpQixTQUF2QixFQUFrQztBQUNqQ2hCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBRGlDLENBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FXLFVBQU0sQ0FBQ1AsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBSTtBQUNuQ1csZUFBUyxDQUFDQyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxTQUFqQyxFQUE0Q0MsSUFBNUMsQ0FBaUQsVUFBQUMsWUFBWSxFQUFFO0FBQzlEcEIsZUFBTyxDQUFDQyxHQUFSLG9CQUF5Qm1CLFlBQVksQ0FBQ0MsS0FBdEM7QUFDQSxPQUZELEVBRUcsVUFBQUMsR0FBRyxFQUFFO0FBQ1B0QixlQUFPLENBQUN1QixLQUFSLG1CQUF5QkQsR0FBekI7QUFDQSxPQUpEO0FBS0EsS0FORDtBQU9GLEdBaEIwQixDQWtCM0I7O0FBRUEsQ0FwQkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vanMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCAnLi9qcy9zY3JpcHRzLmpzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZygnbWFpbiBzcmMgZnVuY3Rpb25zIGpzJyk7XG5cdCQoJ2JvZHkgOm5vdCgud3AtZW1iZWRkZWQtY29udGVudCknKS5maXRWaWRzKCk7XG5cblx0Ly8gSGFjZSBsYSBhbmltYWNpw7NuIGRlbCBib3TDs24gbWVuw7pcblx0bGV0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX21lbnUnKTtcblx0YnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0Ly8gYnRuTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcblx0XHQvLyBjb25zb2xlLmxvZygnY2xpY2sgbWVudScpO1xuXHRcdCQoJy5tYWluX25hdmlnYXRpb24nKS5hbmltYXRlKHt3aWR0aDonMTAwJSd9KTtcblx0fSk7XG5cblx0bGV0IGJ0bkNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9tYWluX21lbnUnKVxuXHRidG5DbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRcdCQoJy5tYWluX25hdmlnYXRpb24nKS5hbmltYXRlKHt3aWR0aDonMCd9KTtcblx0fSk7XG5cblx0bGV0IHBsYXllciA9IG51bGw7XG5cdCQoXCIucGxheWVyX2NvbnRhaW5lciBzdmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwib3BlbiBwbGF5ZXIgY2xpY2tcIik7XG5cdFx0b3BlbldpbmRvdygpO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuV2luZG93ID0gKCk9Pntcblx0XHRwbGF5ZXIgPSB3aW5kb3cub3BlbihcImh0dHA6Ly9sb2NhbGhvc3QvfnJpemlrYS9ub2ZtLXJhZGlvLmNvbS9wbGF5ZXIvXCIsIFwiX2JsYW5rXCIsIFwibWVudWJhcj0wLHN0YXR1cz0wXCIpO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXaW5kb3cgPSAoKT0+e1xuXHRcdGlmKHBsYXllciE9bnVsbCl7XG5cdFx0XHRwbGF5ZXIuY2xvc2UoKTtcdFxuXHRcdH1cblx0fVxuXG5cdCQoJy5jbG9zZV9wbGF5ZXJfd2luZG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnY2xvc2UgcGxheWVyJyk7XG5cdFx0Y2xvc2VXaW5kb3coKTtcblx0fSk7XG5cbn0pOyIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRjb25zb2xlLmxvZygndGhlcmUgaXMgc2VydmljZSB3b3JrZXInKTtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAvLyAgXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXG5cdCAgXHRjb25zb2xlLmxvZygnU3c+Pj4+Jyk7XG5cdCAgXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdCAgXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3N3LmpzJykudGhlbihyZWdpc3RyYXRpb249Pntcblx0ICBcdFx0XHRjb25zb2xlLmxvZyggYFN1Y2Nlc3M6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfWApO1xuXHQgIFx0XHR9LCBlcnI9Pntcblx0ICBcdFx0XHRjb25zb2xlLmVycm9yKGBGYWlsZWQ6ICR7ZXJyfWApO1xuXHQgIFx0XHR9KVxuXHQgIFx0fSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZygnc3JjL3NjcmlwdHMuanMnKTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==