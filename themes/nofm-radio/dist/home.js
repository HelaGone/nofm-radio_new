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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/templates/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/parts/footer/footer-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/parts/footer/footer-scripts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/parts/footer/footer-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/parts/footer/footer-styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/parts/footer/index.js":
/*!**********************************************!*\
  !*** ./src/components/parts/footer/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-styles.css */ "./src/components/parts/footer/footer-styles.css");
/* harmony import */ var _footer_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-scripts */ "./src/components/parts/footer/footer-scripts.js");
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/parts/header/header-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/parts/header/header-scripts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  console.log('header js');
  $('#close_social').on('click', function () {
    console.log('click');
    $('.social_network_header').hide('fast'); // $('#main_site_header').css({position:'fixed'});
  });
  $('btn_open_player').on('click', function () {
    console.log('click');
  });
});

/***/ }),

/***/ "./src/components/parts/header/header-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/parts/header/header-styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/parts/header/index.js":
/*!**********************************************!*\
  !*** ./src/components/parts/header/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/components/parts/header/navigation.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-styles.css */ "./src/components/parts/header/header-styles.css");
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-scripts */ "./src/components/parts/header/header-scripts.js");
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_scripts__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/components/parts/header/navigation.js":
/*!***************************************************!*\
  !*** ./src/components/parts/header/navigation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  console.log('navigation'); // Hace la animación del botón menú

  var btnMenu = document.getElementById('btn_menu');
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('change');
  });
});

/***/ }),

/***/ "./src/components/parts/sidebar/index.js":
/*!***********************************************!*\
  !*** ./src/components/parts/sidebar/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-styles.css */ "./src/components/parts/sidebar/sidebar-styles.css");
/* harmony import */ var _sidebar_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-scripts */ "./src/components/parts/sidebar/sidebar-scripts.js");
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/parts/sidebar/sidebar-scripts.js":
/*!*********************************************************!*\
  !*** ./src/components/parts/sidebar/sidebar-scripts.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('sidebar here');

/***/ }),

/***/ "./src/components/parts/sidebar/sidebar-styles.css":
/*!*********************************************************!*\
  !*** ./src/components/parts/sidebar/sidebar-styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/templates/home/home-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/templates/home/home-scripts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  console.log("load home js");
  var dom_figure = document.getElementById('envivo_figure');
  var dom_logo_day = document.querySelector('.logo_day');
  var dom_day_btn = document.querySelector('.btn_play_live');
  console.log(dom_day_btn);

  var setLiveImages = function setLiveImages() {
    var weekdays = ["../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/domingo.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/lunes.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/martes.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/miercoles.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/jueves.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/viernes.jpg", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/sabado.jpg"];
    var weekday_logo = ["../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/logodomingo.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/logolunes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/logomartes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/logomiercoles.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/logojueves.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/logoviernes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/logosabado.png"];
    var weekday_play = ["../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/playdomingo.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/playlunes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/playmartes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/playmiercoles.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/playjueves.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/playviernes.png", "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/playsabado.png"];
    var the_date = new Date();
    var day_set = new Array();
    var day_num = the_date.getDay();
    day_set.push(weekdays[day_num], weekday_logo[day_num], weekday_play[day_num]);
    return day_set;
  };

  console.log(setLiveImages()[0]);
  $(dom_figure).find('.day_main_background').attr("src", setLiveImages()[0]);
  $(dom_logo_day).attr("src", setLiveImages()[1]);
  $(dom_day_btn).css("background-image", "url(".concat(setLiveImages()[2], ")"));
});

/***/ }),

/***/ "./src/components/templates/home/home-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/templates/home/home-styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/templates/home/index.js":
/*!************************************************!*\
  !*** ./src/components/templates/home/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-styles.css */ "./src/components/templates/home/home-styles.css");
/* harmony import */ var _home_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-scripts.js */ "./src/components/templates/home/home-scripts.js");
/* harmony import */ var _home_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scripts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/scripts.js */ "./src/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_6__);
/*General Styles*/

/*Local Styles*/



/*Components*/




/*Global Scripts*/



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ('serviceWorker' in navigator) {} // Use the window load event to keep the page load performant
  // window.addEventListener('load', () => {
  //  	navigator.serviceWorker.register('./wp-content/themes/base-theme/dist/service-worker.js');
  // });
  // console.log('src/scripts.js');

});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzQxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/ZGY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84YjdmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2hvbWUtc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/M2VjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImhpZGUiLCJidG5NZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9tX2ZpZ3VyZSIsImRvbV9sb2dvX2RheSIsInF1ZXJ5U2VsZWN0b3IiLCJkb21fZGF5X2J0biIsInNldExpdmVJbWFnZXMiLCJ3ZWVrZGF5cyIsIndlZWtkYXlfbG9nbyIsIndlZWtkYXlfcGxheSIsInRoZV9kYXRlIiwiRGF0ZSIsImRheV9zZXQiLCJBcnJheSIsImRheV9udW0iLCJnZXREYXkiLCJwdXNoIiwiZmluZCIsImF0dHIiLCJjc3MiLCJuYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7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QUFjZSxJQUFkLENBQW1CLHNCQUFuQixFQUEyQ0MsSUFBM0MsQ0FBZ0QsS0FBaEQsRUFBdURaLGFBQWEsR0FBRyxDQUFILENBQXBFO0FBQ0FoQixHQUFDLENBQUNhLFlBQUQsQ0FBRCxDQUFnQmUsSUFBaEIsQ0FBcUIsS0FBckIsRUFBNEJaLGFBQWEsR0FBRyxDQUFILENBQXpDO0FBQ0FoQixHQUFDLENBQUNlLFdBQUQsQ0FBRCxDQUFlYyxHQUFmLENBQW1CLGtCQUFuQixnQkFBOENiLGFBQWEsR0FBRyxDQUFILENBQTNEO0FBRUEsQ0FwREQsRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1pBLHVDOzs7Ozs7Ozs7OztBQ0NBaEIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCLE1BQUksbUJBQW1CNEIsU0FBdkIsRUFBa0MsQ0FLakMsQ0FMRCxDQUNHO0FBQ0E7QUFDQTtBQUNBO0FBR0g7O0FBRUEsQ0FWRCxFIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Zvb3Rlci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9mb290ZXItc2NyaXB0cyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ2hlYWRlciBqcycpO1xuXG5cdCQoJyNjbG9zZV9zb2NpYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKCdjbGljaycpO1xuXHRcdCQoJy5zb2NpYWxfbmV0d29ya19oZWFkZXInKS5oaWRlKCdmYXN0Jyk7XG5cdFx0Ly8gJCgnI21haW5fc2l0ZV9oZWFkZXInKS5jc3Moe3Bvc2l0aW9uOidmaXhlZCd9KTtcblx0fSk7XG5cblx0JCgnYnRuX29wZW5fcGxheWVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnY2xpY2snKTtcblx0fSk7XG5cbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9oZWFkZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uJyk7XG5cdC8vIEhhY2UgbGEgYW5pbWFjacOzbiBkZWwgYm90w7NuIG1lbsO6XG5cdGxldCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9tZW51Jyk7XG5cdGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRcdGJ0bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdH0pO1xuXG59KTsiLCJpbXBvcnQgJy4vc2lkZWJhci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zaWRlYmFyLXNjcmlwdHMnOyIsImNvbnNvbGUubG9nKCdzaWRlYmFyIGhlcmUnKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZyhcImxvYWQgaG9tZSBqc1wiKTtcblxuXHRjb25zdCBkb21fZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vudml2b19maWd1cmUnKTtcblx0Y29uc3QgZG9tX2xvZ29fZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29fZGF5Jyk7XG5cdGNvbnN0IGRvbV9kYXlfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9wbGF5X2xpdmUnKTtcblx0Y29uc29sZS5sb2coZG9tX2RheV9idG4pO1xuXG5cdGNvbnN0IHNldExpdmVJbWFnZXMgPSAoKT0+e1xuXHRcdGNvbnN0IHdlZWtkYXlzID0gW1xuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9kb21pbmdvL2RvbWluZ28uanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2x1bmVzL2x1bmVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9tYXJ0ZXMvbWFydGVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9taWVyY29sZXMvbWllcmNvbGVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9qdWV2ZXMvanVldmVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay92aWVybmVzL3ZpZXJuZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhYmFkby9zYWJhZG8uanBnXCJcblx0XHRdO1xuXG5cdFx0Y29uc3Qgd2Vla2RheV9sb2dvID0gW1xuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9kb21pbmdvL2xvZ29kb21pbmdvLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9sdW5lcy9sb2dvbHVuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21hcnRlcy9sb2dvbWFydGVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9taWVyY29sZXMvbG9nb21pZXJjb2xlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvanVldmVzL2xvZ29qdWV2ZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3ZpZXJuZXMvbG9nb3ZpZXJuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhYmFkby9sb2dvc2FiYWRvLnBuZ1wiXG5cdFx0XTtcblxuXHRcdGNvbnN0IHdlZWtkYXlfcGxheSA9IFtcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvZG9taW5nby9wbGF5ZG9taW5nby5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbHVuZXMvcGxheWx1bmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9tYXJ0ZXMvcGxheW1hcnRlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWllcmNvbGVzL3BsYXltaWVyY29sZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2p1ZXZlcy9wbGF5anVldmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay92aWVybmVzL3BsYXl2aWVybmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9zYWJhZG8vcGxheXNhYmFkby5wbmdcIlxuXHRcdF1cblxuXHRcdGNvbnN0IHRoZV9kYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlfc2V0ID0gbmV3IEFycmF5KCk7XG5cdFx0Y29uc3QgZGF5X251bSA9IHRoZV9kYXRlLmdldERheSgpO1xuXHRcdGRheV9zZXQucHVzaCh3ZWVrZGF5c1tkYXlfbnVtXSwgd2Vla2RheV9sb2dvW2RheV9udW1dLCB3ZWVrZGF5X3BsYXlbZGF5X251bV0pO1xuXHRcdHJldHVybiBkYXlfc2V0O1xuXHR9XG5cblx0Y29uc29sZS5sb2coc2V0TGl2ZUltYWdlcygpWzBdKTtcblxuXHQkKGRvbV9maWd1cmUpLmZpbmQoJy5kYXlfbWFpbl9iYWNrZ3JvdW5kJykuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMF0pO1xuXHQkKGRvbV9sb2dvX2RheSkuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMV0pO1xuXHQkKGRvbV9kYXlfYnRuKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoJHtzZXRMaXZlSW1hZ2VzKClbMl19KWApO1xuXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL2hvbWUtc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS1zY3JpcHRzLmpzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7XG5cbi8qR2xvYmFsIFNjcmlwdHMqL1xuaW1wb3J0ICcuLi8uLi8uLi9qcy9zY3JpcHRzLmpzJyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAvLyAgXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ3NyYy9zY3JpcHRzLmpzJyk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=