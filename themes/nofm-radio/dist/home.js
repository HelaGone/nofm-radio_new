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
  $("#close_social").on("click", function () {//$(".social_network_header").hide("fast");
    //localStorage.setItem("shouldHideElem", true);
  });
  var should_hide_elem = localStorage.getItem("shouldHideElem");

  if (typeof Storage !== "undefined" && should_hide_elem) {//$(".social_network_header").css({display: "none"});
  }

  $(".btn_play_live").on("click", function () {
    console.log("open player click");
  });

  if ('IntersectionObserver' in window) {
    var observer_options = {
      root: null,
      rootMargin: '275px 0px 0px 0px',
      threshold: 1.0
    };
    var oberver_target = document.querySelector('#main_header_section');
    var check = false;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          console.log('unfix');
          check = true;
          $('#central_header').removeClass('fix-header');
          $('#central_header').addClass('container');
          $('#barra_noticias').removeClass('paddingTop');
        } else if (check) {
          console.log('fix');
          $('#barra_noticias').addClass('paddingTop');
          $('#central_header').addClass('fix-header');
          $('#central_header').removeClass('container');
        }
      });
    }, observer_options);
    observer.observe(oberver_target);
  }

  var bg_url = "../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sample_player_bg.jpg";
  var dom_figure = document.getElementById('envivo_figure');
  $(dom_figure).find('.day_main_background').attr("src", bg_url);
  console.log(bg_url);
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
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-scripts */ "./src/components/parts/header/header-scripts.js");
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scripts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/components/parts/header/navigation.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-styles.css */ "./src/components/parts/header/header-styles.css");
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_styles_css__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/components/parts/header/navigation.js":
/*!***************************************************!*\
  !*** ./src/components/parts/header/navigation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  console.log('navigation');
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
  console.log("load home js"); // const dom_figure = document.getElementById('envivo_figure');
  // const dom_logo_day = document.querySelector('.logo_day');
  // const dom_day_btn = document.querySelector('.btn_play_live');
  // //console.log(dom_day_btn);
  // const setLiveImages = ()=>{
  // 	const weekdays = [
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/domingo.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/lunes.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/martes.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/miercoles.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/jueves.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/viernes.jpg",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/sabado.jpg"
  // 	];
  // 	const weekday_logo = [
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/logodomingo.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/logolunes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/logomartes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/logomiercoles.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/logojueves.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/logoviernes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/logosabado.png"
  // 	];
  // 	const weekday_play = [
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/domingo/playdomingo.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/lunes/playlunes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/martes/playmartes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/miercoles/playmiercoles.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/jueves/playjueves.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/viernes/playviernes.png",
  // 		"../nofm-radio.com/wp-content/themes/nofm-radio/src/img/week/sabado/playsabado.png"
  // 	]
  // 	const the_date = new Date();
  // 	const day_set = new Array();
  // 	const day_num = the_date.getDay();
  // 	day_set.push(weekdays[day_num], weekday_logo[day_num], weekday_play[day_num]);
  // 	return day_set;
  // }
  // //console.log(setLiveImages()[0]);
  // $(dom_figure).find('.day_main_background').attr("src", setLiveImages()[0]);
  // $(dom_logo_day).attr("src", setLiveImages()[1]);
  // $(dom_day_btn).css("background-image", `url(${setLiveImages()[2]})`);
  // $(".programas_list_carousel").bxSlider({
  // 	pager: false,
  // 	auto: true,
  // 	minSlides: 1,
  // 	maxSlides: 7,
  // 	moveSlides: 1,
  // 	slideWidth: 320,
  // 	touchEnabled: false,
  // 	keyboardEnabled:true,
  // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzQxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/ZGY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84YjdmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2hvbWUtc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/M2VjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwic2hvdWxkX2hpZGVfZWxlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9ic2VydmVyX29wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9iZXJ2ZXJfdGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsImNoZWNrIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJvYnNlcnZlIiwiYmdfdXJsIiwiZG9tX2ZpZ3VyZSIsImdldEVsZW1lbnRCeUlkIiwiZmluZCIsImF0dHIiLCJuYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7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QyxLQUFaLENBQWtCLFlBQVU7QUFDM0JNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFEMkIsQ0FHM0I7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTlERCxFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDWkEsdUM7Ozs7Ozs7Ozs7O0FDQ0FULENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUMzQixNQUFJLG1CQUFtQjhCLFNBQXZCLEVBQWtDLENBS2pDLENBTEQsQ0FDRztBQUNBO0FBQ0E7QUFDQTtBQUdIOztBQUVBLENBVkQsRSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0JChcIiNjbG9zZV9zb2NpYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdC8vJChcIi5zb2NpYWxfbmV0d29ya19oZWFkZXJcIikuaGlkZShcImZhc3RcIik7XG5cdFx0Ly9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNob3VsZEhpZGVFbGVtXCIsIHRydWUpO1xuXHR9KTtcblx0XG5cdGxldCBzaG91bGRfaGlkZV9lbGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG91bGRIaWRlRWxlbVwiKTtcblx0aWYodHlwZW9mIFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc2hvdWxkX2hpZGVfZWxlbSl7XG5cdFx0Ly8kKFwiLnNvY2lhbF9uZXR3b3JrX2hlYWRlclwiKS5jc3Moe2Rpc3BsYXk6IFwibm9uZVwifSk7XG5cdH1cblxuXHQkKFwiLmJ0bl9wbGF5X2xpdmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKFwib3BlbiBwbGF5ZXIgY2xpY2tcIik7XG5cdH0pO1xuXG5cdGlmKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KXtcblx0XHRjb25zdCBvYnNlcnZlcl9vcHRpb25zID0ge3Jvb3Q6bnVsbCxyb290TWFyZ2luOicyNzVweCAwcHggMHB4IDBweCcsdGhyZXNob2xkOjEuMH1cblx0XHRjb25zdCBvYmVydmVyX3RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX2hlYWRlcl9zZWN0aW9uJyk7XG5cdFx0bGV0IGNoZWNrID0gZmFsc2U7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcik9PnsgXG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnk9Pntcblx0XHRcdFx0aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmcpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd1bmZpeCcpO1xuXHRcdFx0XHRcdGNoZWNrID0gdHJ1ZTtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5yZW1vdmVDbGFzcygnZml4LWhlYWRlcicpO1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLmFkZENsYXNzKCdjb250YWluZXInKTtcblx0XHRcdFx0XHQkKCcjYmFycmFfbm90aWNpYXMnKS5yZW1vdmVDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9ZWxzZSBpZihjaGVjayl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZpeCcpO1xuXHRcdFx0XHRcdCQoJyNiYXJyYV9ub3RpY2lhcycpLmFkZENsYXNzKCdwYWRkaW5nVG9wJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykuYWRkQ2xhc3MoJ2ZpeC1oZWFkZXInKTtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0IH0sIG9ic2VydmVyX29wdGlvbnMpO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShvYmVydmVyX3RhcmdldCk7XG5cdH1cblxuXHRjb25zdCBiZ191cmwgPSBcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL3NhbXBsZV9wbGF5ZXJfYmcuanBnXCI7XG5cblx0Y29uc3QgZG9tX2ZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnZpdm9fZmlndXJlJyk7XG5cdCQoZG9tX2ZpZ3VyZSkuZmluZCgnLmRheV9tYWluX2JhY2tncm91bmQnKS5hdHRyKFwic3JjXCIsIGJnX3VybCk7XG5cdGNvbnNvbGUubG9nKGJnX3VybCk7XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2hlYWRlci1zY3JpcHRzJztcbmltcG9ydCAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9oZWFkZXItc3R5bGVzLmNzcyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ25hdmlnYXRpb24nKTtcbn0pOyIsImltcG9ydCAnLi9zaWRlYmFyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXItc2NyaXB0cyc7IiwiY29uc29sZS5sb2coJ3NpZGViYXIgaGVyZScpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKFwibG9hZCBob21lIGpzXCIpO1xuXG5cdC8vIGNvbnN0IGRvbV9maWd1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW52aXZvX2ZpZ3VyZScpO1xuXHQvLyBjb25zdCBkb21fbG9nb19kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb19kYXknKTtcblx0Ly8gY29uc3QgZG9tX2RheV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX3BsYXlfbGl2ZScpO1xuXHQvLyAvL2NvbnNvbGUubG9nKGRvbV9kYXlfYnRuKTtcblxuXHQvLyBjb25zdCBzZXRMaXZlSW1hZ2VzID0gKCk9Pntcblx0Ly8gXHRjb25zdCB3ZWVrZGF5cyA9IFtcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvZG9taW5nby9kb21pbmdvLmpwZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9sdW5lcy9sdW5lcy5qcGdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWFydGVzL21hcnRlcy5qcGdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWllcmNvbGVzL21pZXJjb2xlcy5qcGdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvanVldmVzL2p1ZXZlcy5qcGdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvdmllcm5lcy92aWVybmVzLmpwZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9zYWJhZG8vc2FiYWRvLmpwZ1wiXG5cdC8vIFx0XTtcblxuXHQvLyBcdGNvbnN0IHdlZWtkYXlfbG9nbyA9IFtcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvZG9taW5nby9sb2dvZG9taW5nby5wbmdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbHVuZXMvbG9nb2x1bmVzLnBuZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9tYXJ0ZXMvbG9nb21hcnRlcy5wbmdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWllcmNvbGVzL2xvZ29taWVyY29sZXMucG5nXCIsXG5cdC8vIFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2p1ZXZlcy9sb2dvanVldmVzLnBuZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay92aWVybmVzL2xvZ292aWVybmVzLnBuZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9zYWJhZG8vbG9nb3NhYmFkby5wbmdcIlxuXHQvLyBcdF07XG5cblx0Ly8gXHRjb25zdCB3ZWVrZGF5X3BsYXkgPSBbXG5cdC8vIFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2RvbWluZ28vcGxheWRvbWluZ28ucG5nXCIsXG5cdC8vIFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL2x1bmVzL3BsYXlsdW5lcy5wbmdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvbWFydGVzL3BsYXltYXJ0ZXMucG5nXCIsXG5cdC8vIFx0XHRcIi4uL25vZm0tcmFkaW8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2ltZy93ZWVrL21pZXJjb2xlcy9wbGF5bWllcmNvbGVzLnBuZ1wiLFxuXHQvLyBcdFx0XCIuLi9ub2ZtLXJhZGlvLmNvbS93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbWcvd2Vlay9qdWV2ZXMvcGxheWp1ZXZlcy5wbmdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvdmllcm5lcy9wbGF5dmllcm5lcy5wbmdcIixcblx0Ly8gXHRcdFwiLi4vbm9mbS1yYWRpby5jb20vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvaW1nL3dlZWsvc2FiYWRvL3BsYXlzYWJhZG8ucG5nXCJcblx0Ly8gXHRdXG5cblx0Ly8gXHRjb25zdCB0aGVfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdC8vIFx0Y29uc3QgZGF5X3NldCA9IG5ldyBBcnJheSgpO1xuXHQvLyBcdGNvbnN0IGRheV9udW0gPSB0aGVfZGF0ZS5nZXREYXkoKTtcblx0Ly8gXHRkYXlfc2V0LnB1c2god2Vla2RheXNbZGF5X251bV0sIHdlZWtkYXlfbG9nb1tkYXlfbnVtXSwgd2Vla2RheV9wbGF5W2RheV9udW1dKTtcblx0Ly8gXHRyZXR1cm4gZGF5X3NldDtcblx0Ly8gfVxuXG5cdC8vIC8vY29uc29sZS5sb2coc2V0TGl2ZUltYWdlcygpWzBdKTtcblxuXHQvLyAkKGRvbV9maWd1cmUpLmZpbmQoJy5kYXlfbWFpbl9iYWNrZ3JvdW5kJykuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMF0pO1xuXHQvLyAkKGRvbV9sb2dvX2RheSkuYXR0cihcInNyY1wiLCBzZXRMaXZlSW1hZ2VzKClbMV0pO1xuXHQvLyAkKGRvbV9kYXlfYnRuKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoJHtzZXRMaXZlSW1hZ2VzKClbMl19KWApO1xuXG5cdC8vICQoXCIucHJvZ3JhbWFzX2xpc3RfY2Fyb3VzZWxcIikuYnhTbGlkZXIoe1xuXHQvLyBcdHBhZ2VyOiBmYWxzZSxcblx0Ly8gXHRhdXRvOiB0cnVlLFxuXHQvLyBcdG1pblNsaWRlczogMSxcblx0Ly8gXHRtYXhTbGlkZXM6IDcsXG5cdC8vIFx0bW92ZVNsaWRlczogMSxcblx0Ly8gXHRzbGlkZVdpZHRoOiAzMjAsXG5cdC8vIFx0dG91Y2hFbmFibGVkOiBmYWxzZSxcblx0Ly8gXHRrZXlib2FyZEVuYWJsZWQ6dHJ1ZSxcblx0Ly8gfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL2hvbWUtc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS1zY3JpcHRzLmpzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7XG5cbi8qR2xvYmFsIFNjcmlwdHMqL1xuaW1wb3J0ICcuLi8uLi8uLi9qcy9zY3JpcHRzLmpzJyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAvLyAgXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ3NyYy9zY3JpcHRzLmpzJyk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=