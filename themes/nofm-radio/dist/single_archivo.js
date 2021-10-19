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

$(document).ready(function () {
  if ('IntersectionObserver' in window) {
    // console.log('>>>IO<<<');
    var observer_options = {
      root: null,
      rootMargin: '275px 0px 0px 0px',
      threshold: 1.0
    };
    var oberver_target = document.querySelector('#main_header_section');
    var check = false;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        //console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          // console.log('unfix');
          check = true;
          $('#central_header').removeClass('fix-header');
          $('#central_header').addClass('container');
          $('.wide_wrapper').removeClass('paddingTop');
        } else {
          $('#central_header').addClass('fix-header');
          $('#central_header').removeClass('container');
          $('.wide_wrapper').addClass('paddingTop');
        }
      });
    });
    observer.observe(oberver_target);
  }
});

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
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/components/parts/header/navigation.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-styles.css */ "./src/components/parts/header/header-styles.css");




/***/ }),

/***/ "./src/components/parts/header/navigation.js":
/*!***************************************************!*\
  !*** ./src/components/parts/header/navigation.js ***!
  \***************************************************/
/***/ (() => {

$(document).ready(function () {// console.log('navigation');
});

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

/***/ "./src/components/templates/single_archivo/single-archivo-scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/templates/single_archivo/single-archivo-scripts.js ***!
  \***************************************************************************/
/***/ (() => {



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

/***/ "./src/components/templates/single_archivo/single-archivo-styles.css":
/*!***************************************************************************!*\
  !*** ./src/components/templates/single_archivo/single-archivo-styles.css ***!
  \***************************************************************************/
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
/*!**********************************************************!*\
  !*** ./src/components/templates/single_archivo/index.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _single_archivo_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-archivo-styles.css */ "./src/components/templates/single_archivo/single-archivo-styles.css");
/* harmony import */ var _single_archivo_scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-archivo-scripts */ "./src/components/templates/single_archivo/single-archivo-scripts.js");
/* harmony import */ var _single_archivo_scripts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_archivo_scripts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/*General Styles*/

/*Local Styles*/



/*Components*/




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlX2FyY2hpdm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUMzQixNQUFHLDBCQUEwQkMsTUFBN0IsRUFBb0M7QUFDbkM7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRztBQUFDQyxNQUFBQSxJQUFJLEVBQUMsSUFBTjtBQUFXQyxNQUFBQSxVQUFVLEVBQUMsbUJBQXRCO0FBQTBDQyxNQUFBQSxTQUFTLEVBQUM7QUFBcEQsS0FBekI7QUFDQSxRQUFNQyxjQUFjLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixzQkFBdkIsQ0FBdkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVGLFFBQVYsRUFBcUI7QUFDNURFLE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUU7QUFDdEI7QUFDQSxZQUFHQSxLQUFLLENBQUNDLGNBQVQsRUFBd0I7QUFDdkI7QUFDQU4sVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQVYsVUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJpQixXQUFyQixDQUFpQyxZQUFqQztBQUNBakIsVUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJrQixRQUFyQixDQUE4QixXQUE5QjtBQUNBbEIsVUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmlCLFdBQW5CLENBQStCLFlBQS9CO0FBQ0EsU0FORCxNQU1LO0FBQ0pqQixVQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLFFBQXJCLENBQThCLFlBQTlCO0FBQ0FsQixVQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmlCLFdBQXJCLENBQWlDLFdBQWpDO0FBQ0FqQixVQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca0IsUUFBbkIsQ0FBNEIsWUFBNUI7QUFDQTtBQUNELE9BYkQ7QUFjQyxLQWZhLENBQWY7QUFnQkFQLElBQUFBLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQlgsY0FBakI7QUFDQTtBQUNELENBeEJEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7O0FDREFSLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVSxDQUMzQjtBQUNBLENBRkQ7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2hlYWRlci1zY3JpcHRzLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzExMDciLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc3R5bGVzLmNzcz9hMzE2Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84MTNlIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX2FyY2hpdm8vc2luZ2xlLWFyY2hpdm8tc3R5bGVzLmNzcz82YjIxIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL3NpbmdsZV9hcmNoaXZvL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGlmKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KXtcblx0XHQvLyBjb25zb2xlLmxvZygnPj4+SU88PDwnKTtcblx0XHRjb25zdCBvYnNlcnZlcl9vcHRpb25zID0ge3Jvb3Q6bnVsbCxyb290TWFyZ2luOicyNzVweCAwcHggMHB4IDBweCcsdGhyZXNob2xkOjEuMH1cblx0XHRjb25zdCBvYmVydmVyX3RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX2hlYWRlcl9zZWN0aW9uJyk7XG5cdFx0bGV0IGNoZWNrID0gZmFsc2U7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcik9PnsgXG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnk9Pntcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XG5cdFx0XHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygndW5maXgnKTtcblx0XHRcdFx0XHRjaGVjayA9IHRydWU7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeC1oZWFkZXInKTtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5hZGRDbGFzcygnY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0JCgnLndpZGVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdwYWRkaW5nVG9wJyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLmFkZENsYXNzKCdmaXgtaGVhZGVyJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXHRcdFx0XHRcdCQoJy53aWRlX3dyYXBwZXInKS5hZGRDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCB9LCApO1xuXHRcdG9ic2VydmVyLm9ic2VydmUob2JlcnZlcl90YXJnZXQpO1xuXHR9XG59KTsiLCJpbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnO1xuaW1wb3J0ICcuL25hdmlnYXRpb24nO1xuaW1wb3J0ICcuL2hlYWRlci1zdHlsZXMuY3NzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQvLyBjb25zb2xlLmxvZygnbmF2aWdhdGlvbicpO1xufSk7IiwiaW1wb3J0ICcuL3NpZGViYXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2lkZWJhci1zY3JpcHRzJzsiLCIvL2NvbnNvbGUubG9nKCdzaWRlYmFyIGhlcmUnKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypHZW5lcmFsIFN0eWxlcyovXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG4vKkxvY2FsIFN0eWxlcyovXG5pbXBvcnQgJy4vc2luZ2xlLWFyY2hpdm8tc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2luZ2xlLWFyY2hpdm8tc2NyaXB0cyc7XG5cbi8qQ29tcG9uZW50cyovXG5pbXBvcnQgJy4uLy4uL3BhcnRzL2hlYWRlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL2Zvb3Rlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL3NpZGViYXIvaW5kZXgnOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsIm9ic2VydmVyX29wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9iZXJ2ZXJfdGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsImNoZWNrIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==