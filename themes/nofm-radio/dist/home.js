/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/parts/footer/footer-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/parts/footer/footer-scripts.js ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/parts/footer/index.js":
/*!**********************************************!*\
  !*** ./src/components/parts/footer/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-styles.css */ "./src/components/parts/footer/footer-styles.css");
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-scripts */ "./src/components/parts/footer/footer-scripts.js");
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/parts/header/header-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/parts/header/header-scripts.js ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/parts/header/index.js":
/*!**********************************************!*\
  !*** ./src/components/parts/header/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-scripts */ "./src/components/parts/header/header-scripts.js");
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scripts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-styles.css */ "./src/components/parts/header/header-styles.css");



/***/ }),

/***/ "./src/components/parts/sidebar/index.js":
/*!***********************************************!*\
  !*** ./src/components/parts/sidebar/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-styles.css */ "./src/components/parts/sidebar/sidebar-styles.css");
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-scripts */ "./src/components/parts/sidebar/sidebar-scripts.js");
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/parts/sidebar/sidebar-scripts.js":
/*!*********************************************************!*\
  !*** ./src/components/parts/sidebar/sidebar-scripts.js ***!
  \*********************************************************/
/***/ (() => {

//console.log('sidebar here');

/***/ }),

/***/ "./src/components/templates/home/home-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/templates/home/home-scripts.js ***!
  \*******************************************************/
/***/ (() => {

$(document).ready(function () {//console.log("load home js");
});

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (() => {

$(document).ready(function () {
  $('body :not(.wp-embedded-content)').fitVids();
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

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      console.log("LOAD");
      navigator.serviceWorker.register('./sw.js');
    });
  }
});

/***/ }),

/***/ "./src/components/parts/footer/footer-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/parts/footer/footer-styles.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/parts/header/header-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/parts/header/header-styles.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/parts/sidebar/sidebar-styles.css":
/*!*********************************************************!*\
  !*** ./src/components/parts/sidebar/sidebar-styles.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/templates/home/home-styles.css":
/*!*******************************************************!*\
  !*** ./src/components/templates/home/home-styles.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!************************************************!*\
  !*** ./src/components/templates/home/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _home_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-styles.css */ "./src/components/templates/home/home-styles.css");
/* harmony import */ var _home_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-scripts.js */ "./src/components/templates/home/home-scripts.js");
/* harmony import */ var _home_scripts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scripts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/functions.js */ "./src/js/functions.js");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_functions_js__WEBPACK_IMPORTED_MODULE_6__);
/*General Styles*/

/*Local Styles*/



/*Components*/




/*Global Scripts*/


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVSxDQUMzQjtBQUNBLENBRkQ7Ozs7Ozs7Ozs7QUNBQUYsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCRixFQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0csT0FBckM7QUFDQSxNQUFJQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBSTtBQUNyQyxRQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxRQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFqQzs7QUFDQSxRQUFHSCxZQUFZLElBQUksSUFBbkIsRUFBeUI7QUFDeEJELE1BQUFBLFlBQVksR0FBRyxLQUFmO0FBQ0EsS0FGRCxNQUVNLElBQUdDLFlBQVksSUFBSSxHQUFoQixJQUF1QkEsWUFBWSxHQUFHLElBQXpDLEVBQThDO0FBQ25ERCxNQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNBLEtBRkssTUFFRDtBQUNKQSxNQUFBQSxZQUFZLEdBQUcsTUFBZjtBQUNBOztBQUNEUCxJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksT0FBdEIsQ0FBOEI7QUFBQ0QsTUFBQUEsS0FBSyxFQUFDSjtBQUFQLEtBQTlCO0FBQ0EsR0FYRDtBQVlBLE1BQUlNLFlBQVksR0FBR1osUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUF4QixDQUFuQjtBQUNBUSxFQUFBQSxZQUFZLENBQUNQLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQUk7QUFDMUNOLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxPQUF0QixDQUE4QjtBQUFDRCxNQUFBQSxLQUFLLEVBQUM7QUFBUCxLQUE5QjtBQUNBLEdBRkQ7O0FBSUEsTUFBRyxtQkFBbUJHLFNBQXRCLEVBQWdDO0FBQy9CTCxJQUFBQSxNQUFNLENBQUNILGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVU7QUFDekNTLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUYsTUFBQUEsU0FBUyxDQUFDRyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxTQUFqQztBQUNBLEtBSEQ7QUFJQTtBQUNELENBMUJEOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL3NpZGViYXIvc2lkZWJhci1zY3JpcHRzLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9mb290ZXItc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2hlYWRlci1zdHlsZXMuY3NzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84MTNlIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/NDc1NiIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsImltcG9ydCAnLi9oZWFkZXItc2NyaXB0cyc7XG5pbXBvcnQgJy4vaGVhZGVyLXN0eWxlcy5jc3MnOyIsImltcG9ydCAnLi9zaWRlYmFyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXItc2NyaXB0cyc7IiwiLy9jb25zb2xlLmxvZygnc2lkZWJhciBoZXJlJyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Ly9jb25zb2xlLmxvZyhcImxvYWQgaG9tZSBqc1wiKTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0JCgnYm9keSA6bm90KC53cC1lbWJlZGRlZC1jb250ZW50KScpLmZpdFZpZHMoKTtcblx0bGV0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX21lbnUnKTtcblx0YnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0bGV0IHdpZHRoX3BlY2VudCA9IFwiMCVcIjtcblx0XHRsZXQgc2NyZWVuX3dpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcblx0XHRpZihzY3JlZW5fd2lkdGggPj0gMTAyNCApe1xuXHRcdFx0d2lkdGhfcGVjZW50ID0gXCI0MCVcIjtcblx0XHR9ZWxzZSBpZihzY3JlZW5fd2lkdGggPj0gNzY4ICYmIHNjcmVlbl93aWR0aCA8IDEwMjQpe1xuXHRcdFx0d2lkdGhfcGVjZW50ID0gXCI2MCVcIjtcblx0XHR9ZWxzZXtcblx0XHRcdHdpZHRoX3BlY2VudCA9IFwiMTAwJVwiO1xuXHRcdH1cblx0XHQkKCcubWFpbl9uYXZpZ2F0aW9uJykuYW5pbWF0ZSh7d2lkdGg6d2lkdGhfcGVjZW50fSk7XG5cdH0pO1xuXHRsZXQgYnRuQ2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21haW5fbWVudScpO1xuXHRidG5DbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRcdCQoJy5tYWluX25hdmlnYXRpb24nKS5hbmltYXRlKHt3aWR0aDonMCd9KTtcblx0fSk7XG5cblx0aWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJMT0FEXCIpO1xuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4vc3cuanMnKTtcblx0XHR9KVxuXHR9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKkdlbmVyYWwgU3R5bGVzKi9cbmltcG9ydCAnLi4vLi4vLi4vY3NzL3N0eWxlLmNzcyc7XG5cbi8qTG9jYWwgU3R5bGVzKi9cbmltcG9ydCAnLi9ob21lLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2hvbWUtc2NyaXB0cy5qcyc7XG5cbi8qQ29tcG9uZW50cyovXG5pbXBvcnQgJy4uLy4uL3BhcnRzL2hlYWRlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL2Zvb3Rlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL3NpZGViYXIvaW5kZXgnO1xuXG4vKkdsb2JhbCBTY3JpcHRzKi9cbmltcG9ydCAnLi4vLi4vLi4vanMvZnVuY3Rpb25zLmpzJyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpdFZpZHMiLCJidG5NZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2lkdGhfcGVjZW50Iiwic2NyZWVuX3dpZHRoIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJhbmltYXRlIiwiYnRuQ2xvc2VNZW51IiwibmF2aWdhdG9yIiwiY29uc29sZSIsImxvZyIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=