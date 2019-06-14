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
  console.log("header js");
  $("#close_social").on("click", function () {
    // console.log('click');
    $(".social_network_header").hide("fast");
    localStorage.setItem("shouldHideElem", "true"); // $('#main_site_header').css({position:'fixed'});
  });
  $("btn_open_player").on("click", function () {
    console.log("click");
  });
  $(window).on("load", function () {
    var should_hide_elem = localStorage.getItem("shouldHideElem");

    if (should_hide_elem === "true") {
      $(".social_network_header").hide("fast");
    }
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
    console.log('click menu');
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
  var dom_day_btn = document.querySelector('.btn_play_live'); //console.log(dom_day_btn);

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
  $(".programas_list_carousel").bxSlider({
    pager: false,
    auto: true,
    minSlides: 1,
    maxSlides: 7,
    moveSlides: 1,
    slideWidth: 320,
    touchEnabled: false,
    keyboardEnabled: true
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzQxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/ZGY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84YjdmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2hvbWUtc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/M2VjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImhpZGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwid2luZG93Iiwic2hvdWxkX2hpZGVfZWxlbSIsImdldEl0ZW0iLCJidG5NZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9tX2ZpZ3VyZSIsImRvbV9sb2dvX2RheSIsInF1ZXJ5U2VsZWN0b3IiLCJkb21fZGF5X2J0biIsInNldExpdmVJbWFnZXMiLCJ3ZWVrZGF5cyIsIndlZWtkYXlfbG9nbyIsIndlZWtkYXlfcGxheSIsInRoZV9kYXRlIiwiRGF0ZSIsImRheV9zZXQiLCJBcnJheSIsImRheV9udW0iLCJnZXREYXkiLCJwdXNoIiwiZmluZCIsImF0dHIiLCJjc3MiLCJieFNsaWRlciIsInBhZ2VyIiwiYXV0byIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsIm1vdmVTbGlkZXMiLCJzbGlkZVdpZHRoIiwidG91Y2hFbmFibGVkIiwia2V5Ym9hcmRFbmFibGVkIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUM7QUFSc0IsR0FBdkM7QUFVQSxDQTlERCxFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDWkEsdUM7Ozs7Ozs7Ozs7O0FDQ0EzQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDM0IsTUFBSSxtQkFBbUIwQyxTQUF2QixFQUFrQyxDQUtqQyxDQUxELENBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFHSDs7QUFFQSxDQVZELEUiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZm9vdGVyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Zvb3Rlci1zY3JpcHRzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZyhcImhlYWRlciBqc1wiKTtcblxuXHQkKFwiI2Nsb3NlX3NvY2lhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NsaWNrJyk7XG5cdFx0JChcIi5zb2NpYWxfbmV0d29ya19oZWFkZXJcIikuaGlkZShcImZhc3RcIik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG91bGRIaWRlRWxlbVwiLCBcInRydWVcIik7XG5cdFx0Ly8gJCgnI21haW5fc2l0ZV9oZWFkZXInKS5jc3Moe3Bvc2l0aW9uOidmaXhlZCd9KTtcblx0fSk7XG5cblx0JChcImJ0bl9vcGVuX3BsYXllclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coXCJjbGlja1wiKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpe1xuXHRcdGxldCBzaG91bGRfaGlkZV9lbGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG91bGRIaWRlRWxlbVwiKTtcblx0XHRpZihzaG91bGRfaGlkZV9lbGVtPT09XCJ0cnVlXCIpe1xuXHRcdFx0JChcIi5zb2NpYWxfbmV0d29ya19oZWFkZXJcIikuaGlkZShcImZhc3RcIik7XG5cdFx0fVxuXHR9KTtcblxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL25hdmlnYXRpb24nO1xuaW1wb3J0ICcuL2hlYWRlci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9oZWFkZXItc2NyaXB0cyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ25hdmlnYXRpb24nKTtcblx0Ly8gSGFjZSBsYSBhbmltYWNpw7NuIGRlbCBib3TDs24gbWVuw7pcblx0bGV0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX21lbnUnKTtcblx0YnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0YnRuTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcblx0XHRjb25zb2xlLmxvZygnY2xpY2sgbWVudScpO1xuXHR9KTtcblxufSk7IiwiaW1wb3J0ICcuL3NpZGViYXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2lkZWJhci1zY3JpcHRzJzsiLCJjb25zb2xlLmxvZygnc2lkZWJhciBoZXJlJyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coXCJsb2FkIGhvbWUganNcIik7XG5cblx0Y29uc3QgZG9tX2ZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnZpdm9fZmlndXJlJyk7XG5cdGNvbnN0IGRvbV9sb2dvX2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvX2RheScpO1xuXHRjb25zdCBkb21fZGF5X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fcGxheV9saXZlJyk7XG5cdC8vY29uc29sZS5sb2coZG9tX2RheV9idG4pO1xuXG5cdGNvbnN0IHNldExpdmVJbWFnZXMgPSAoKT0+e1xuXHRcdGNvbnN0IHdlZWtkYXlzID0gW1xuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9kb21pbmdvL2RvbWluZ28uanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2x1bmVzL2x1bmVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9tYXJ0ZXMvbWFydGVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9taWVyY29sZXMvbWllcmNvbGVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9qdWV2ZXMvanVldmVzLmpwZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay92aWVybmVzL3ZpZXJuZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhYmFkby9zYWJhZG8uanBnXCJcblx0XHRdO1xuXG5cdFx0Y29uc3Qgd2Vla2RheV9sb2dvID0gW1xuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9kb21pbmdvL2xvZ29kb21pbmdvLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9sdW5lcy9sb2dvbHVuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21hcnRlcy9sb2dvbWFydGVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9taWVyY29sZXMvbG9nb21pZXJjb2xlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvanVldmVzL2xvZ29qdWV2ZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3ZpZXJuZXMvbG9nb3ZpZXJuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhYmFkby9sb2dvc2FiYWRvLnBuZ1wiXG5cdFx0XTtcblxuXHRcdGNvbnN0IHdlZWtkYXlfcGxheSA9IFtcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvZG9taW5nby9wbGF5ZG9taW5nby5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbHVuZXMvcGxheWx1bmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9tYXJ0ZXMvcGxheW1hcnRlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWllcmNvbGVzL3BsYXltaWVyY29sZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2p1ZXZlcy9wbGF5anVldmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay92aWVybmVzL3BsYXl2aWVybmVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9zYWJhZG8vcGxheXNhYmFkby5wbmdcIlxuXHRcdF1cblxuXHRcdGNvbnN0IHRoZV9kYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlfc2V0ID0gbmV3IEFycmF5KCk7XG5cdFx0Y29uc3QgZGF5X251bSA9IHRoZV9kYXRlLmdldERheSgpO1xuXHRcdGRheV9zZXQucHVzaCh3ZWVrZGF5c1tkYXlfbnVtXSwgd2Vla2RheV9sb2dvW2RheV9udW1dLCB3ZWVrZGF5X3BsYXlbZGF5X251bV0pO1xuXHRcdHJldHVybiBkYXlfc2V0O1xuXHR9XG5cblx0Y29uc29sZS5sb2coc2V0TGl2ZUltYWdlcygpWzBdKTtcblxuXHQkKGRvbV9maWd1cmUpLmZpbmQoJy5kYXlfbWFpbl9iYWNrZ3JvdW5kJykuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMF0pO1xuXHQkKGRvbV9sb2dvX2RheSkuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMV0pO1xuXHQkKGRvbV9kYXlfYnRuKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoJHtzZXRMaXZlSW1hZ2VzKClbMl19KWApO1xuXG5cdCQoXCIucHJvZ3JhbWFzX2xpc3RfY2Fyb3VzZWxcIikuYnhTbGlkZXIoe1xuXHRcdHBhZ2VyOiBmYWxzZSxcblx0XHRhdXRvOiB0cnVlLFxuXHRcdG1pblNsaWRlczogMSxcblx0XHRtYXhTbGlkZXM6IDcsXG5cdFx0bW92ZVNsaWRlczogMSxcblx0XHRzbGlkZVdpZHRoOiAzMjAsXG5cdFx0dG91Y2hFbmFibGVkOiBmYWxzZSxcblx0XHRrZXlib2FyZEVuYWJsZWQ6dHJ1ZSxcblx0fSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL2hvbWUtc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS1zY3JpcHRzLmpzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7XG5cbi8qR2xvYmFsIFNjcmlwdHMqL1xuaW1wb3J0ICcuLi8uLi8uLi9qcy9zY3JpcHRzLmpzJyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAvLyAgXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ3NyYy9zY3JpcHRzLmpzJyk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=