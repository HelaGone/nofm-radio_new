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
  $(".episodios_list_carousel").bxSlider({
    pager: false,
    auto: true,
    minSlides: 2,
    maxSlides: 12,
    moveSlides: 2,
    slideWidth: 150,
    touchEnabled: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzQxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/ZGY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84YjdmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2hvbWUtc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/M2VjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImhpZGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwid2luZG93Iiwic2hvdWxkX2hpZGVfZWxlbSIsImdldEl0ZW0iLCJidG5NZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9tX2ZpZ3VyZSIsImRvbV9sb2dvX2RheSIsInF1ZXJ5U2VsZWN0b3IiLCJkb21fZGF5X2J0biIsInNldExpdmVJbWFnZXMiLCJ3ZWVrZGF5cyIsIndlZWtkYXlfbG9nbyIsIndlZWtkYXlfcGxheSIsInRoZV9kYXRlIiwiRGF0ZSIsImRheV9zZXQiLCJBcnJheSIsImRheV9udW0iLCJnZXREYXkiLCJwdXNoIiwiZmluZCIsImF0dHIiLCJjc3MiLCJieFNsaWRlciIsInBhZ2VyIiwiYXV0byIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsIm1vdmVTbGlkZXMiLCJzbGlkZVdpZHRoIiwidG91Y2hFbmFibGVkIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1pBLHVDOzs7Ozs7Ozs7OztBQ0NBMUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCLE1BQUksbUJBQW1CeUMsU0FBdkIsRUFBa0MsQ0FLakMsQ0FMRCxDQUNHO0FBQ0E7QUFDQTtBQUNBO0FBR0g7O0FBRUEsQ0FWRCxFIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Zvb3Rlci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9mb290ZXItc2NyaXB0cyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coXCJoZWFkZXIganNcIik7XG5cblx0JChcIiNjbG9zZV9zb2NpYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjbGljaycpO1xuXHRcdCQoXCIuc29jaWFsX25ldHdvcmtfaGVhZGVyXCIpLmhpZGUoXCJmYXN0XCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvdWxkSGlkZUVsZW1cIiwgXCJ0cnVlXCIpO1xuXHRcdC8vICQoJyNtYWluX3NpdGVfaGVhZGVyJykuY3NzKHtwb3NpdGlvbjonZml4ZWQnfSk7XG5cdH0pO1xuXG5cdCQoXCJidG5fb3Blbl9wbGF5ZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG5cdH0pO1xuXG5cdCQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKXtcblx0XHRsZXQgc2hvdWxkX2hpZGVfZWxlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvdWxkSGlkZUVsZW1cIik7XG5cdFx0aWYoc2hvdWxkX2hpZGVfZWxlbT09PVwidHJ1ZVwiKXtcblx0XHRcdCQoXCIuc29jaWFsX25ldHdvcmtfaGVhZGVyXCIpLmhpZGUoXCJmYXN0XCIpO1xuXHRcdH1cblx0fSk7XG5cbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9oZWFkZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uJyk7XG5cdC8vIEhhY2UgbGEgYW5pbWFjacOzbiBkZWwgYm90w7NuIG1lbsO6XG5cdGxldCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9tZW51Jyk7XG5cdGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRcdGJ0bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdH0pO1xuXG59KTsiLCJpbXBvcnQgJy4vc2lkZWJhci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zaWRlYmFyLXNjcmlwdHMnOyIsImNvbnNvbGUubG9nKCdzaWRlYmFyIGhlcmUnKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZyhcImxvYWQgaG9tZSBqc1wiKTtcblxuXHRjb25zdCBkb21fZmlndXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vudml2b19maWd1cmUnKTtcblx0Y29uc3QgZG9tX2xvZ29fZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29fZGF5Jyk7XG5cdGNvbnN0IGRvbV9kYXlfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9wbGF5X2xpdmUnKTtcblx0Ly9jb25zb2xlLmxvZyhkb21fZGF5X2J0bik7XG5cblx0Y29uc3Qgc2V0TGl2ZUltYWdlcyA9ICgpPT57XG5cdFx0Y29uc3Qgd2Vla2RheXMgPSBbXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2RvbWluZ28vZG9taW5nby5qcGdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbHVuZXMvbHVuZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21hcnRlcy9tYXJ0ZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21pZXJjb2xlcy9taWVyY29sZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2p1ZXZlcy9qdWV2ZXMuanBnXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3ZpZXJuZXMvdmllcm5lcy5qcGdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvc2FiYWRvL3NhYmFkby5qcGdcIlxuXHRcdF07XG5cblx0XHRjb25zdCB3ZWVrZGF5X2xvZ28gPSBbXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2RvbWluZ28vbG9nb2RvbWluZ28ucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2x1bmVzL2xvZ29sdW5lcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWFydGVzL2xvZ29tYXJ0ZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21pZXJjb2xlcy9sb2dvbWllcmNvbGVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9qdWV2ZXMvbG9nb2p1ZXZlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvdmllcm5lcy9sb2dvdmllcm5lcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvc2FiYWRvL2xvZ29zYWJhZG8ucG5nXCJcblx0XHRdO1xuXG5cdFx0Y29uc3Qgd2Vla2RheV9wbGF5ID0gW1xuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9kb21pbmdvL3BsYXlkb21pbmdvLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9sdW5lcy9wbGF5bHVuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21hcnRlcy9wbGF5bWFydGVzLnBuZ1wiLFxuXHRcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9taWVyY29sZXMvcGxheW1pZXJjb2xlcy5wbmdcIixcblx0XHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvanVldmVzL3BsYXlqdWV2ZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3ZpZXJuZXMvcGxheXZpZXJuZXMucG5nXCIsXG5cdFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhYmFkby9wbGF5c2FiYWRvLnBuZ1wiXG5cdFx0XVxuXG5cdFx0Y29uc3QgdGhlX2RhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRheV9zZXQgPSBuZXcgQXJyYXkoKTtcblx0XHRjb25zdCBkYXlfbnVtID0gdGhlX2RhdGUuZ2V0RGF5KCk7XG5cdFx0ZGF5X3NldC5wdXNoKHdlZWtkYXlzW2RheV9udW1dLCB3ZWVrZGF5X2xvZ29bZGF5X251bV0sIHdlZWtkYXlfcGxheVtkYXlfbnVtXSk7XG5cdFx0cmV0dXJuIGRheV9zZXQ7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhzZXRMaXZlSW1hZ2VzKClbMF0pO1xuXG5cdCQoZG9tX2ZpZ3VyZSkuZmluZCgnLmRheV9tYWluX2JhY2tncm91bmQnKS5hdHRyKFwic3JjXCIsIHNldExpdmVJbWFnZXMoKVswXSk7XG5cdCQoZG9tX2xvZ29fZGF5KS5hdHRyKFwic3JjXCIsIHNldExpdmVJbWFnZXMoKVsxXSk7XG5cdCQoZG9tX2RheV9idG4pLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgYHVybCgke3NldExpdmVJbWFnZXMoKVsyXX0pYCk7XG5cblx0JChcIi5lcGlzb2Rpb3NfbGlzdF9jYXJvdXNlbFwiKS5ieFNsaWRlcih7XG5cdFx0cGFnZXI6IGZhbHNlLFxuXHRcdGF1dG86IHRydWUsXG5cdFx0bWluU2xpZGVzOiAyLFxuXHRcdG1heFNsaWRlczogMTIsXG5cdFx0bW92ZVNsaWRlczogMixcblx0XHRzbGlkZVdpZHRoOiAxNTAsXG5cdFx0dG91Y2hFbmFibGVkOiBmYWxzZVxuXHR9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypHZW5lcmFsIFN0eWxlcyovXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG4vKkxvY2FsIFN0eWxlcyovXG5pbXBvcnQgJy4vaG9tZS1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9ob21lLXNjcmlwdHMuanMnO1xuXG4vKkNvbXBvbmVudHMqL1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9oZWFkZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9mb290ZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9zaWRlYmFyL2luZGV4JztcblxuLypHbG9iYWwgU2NyaXB0cyovXG5pbXBvcnQgJy4uLy4uLy4uL2pzL3NjcmlwdHMuanMnIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuXHQgIFx0Ly8gVXNlIHRoZSB3aW5kb3cgbG9hZCBldmVudCB0byBrZWVwIHRoZSBwYWdlIGxvYWQgcGVyZm9ybWFudFxuXHQgIFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdCAgIC8vICBcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3dwLWNvbnRlbnQvdGhlbWVzL2Jhc2UtdGhlbWUvZGlzdC9zZXJ2aWNlLXdvcmtlci5qcycpO1xuXHQgIFx0Ly8gfSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZygnc3JjL3NjcmlwdHMuanMnKTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==