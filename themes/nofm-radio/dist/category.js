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

/***/ "./src/components/templates/category/category-styles.css":
/*!***************************************************************!*\
  !*** ./src/components/templates/category/category-styles.css ***!
  \***************************************************************/
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
/*!****************************************************!*\
  !*** ./src/components/templates/category/index.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _category_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-styles.css */ "./src/components/templates/category/category-styles.css");
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/*General Styles*/

/*Local Styles*/


/*Components*/




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUMzQixNQUFHLDBCQUEwQkMsTUFBN0IsRUFBb0M7QUFDbkM7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRztBQUFDQyxNQUFBQSxJQUFJLEVBQUMsSUFBTjtBQUFXQyxNQUFBQSxVQUFVLEVBQUMsbUJBQXRCO0FBQTBDQyxNQUFBQSxTQUFTLEVBQUM7QUFBcEQsS0FBekI7QUFDQSxRQUFNQyxjQUFjLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixzQkFBdkIsQ0FBdkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVGLFFBQVYsRUFBcUI7QUFDNURFLE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUU7QUFDdEI7QUFDQSxZQUFHQSxLQUFLLENBQUNDLGNBQVQsRUFBd0I7QUFDdkI7QUFDQU4sVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQVYsVUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJpQixXQUFyQixDQUFpQyxZQUFqQztBQUNBakIsVUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJrQixRQUFyQixDQUE4QixXQUE5QjtBQUNBbEIsVUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmlCLFdBQW5CLENBQStCLFlBQS9CO0FBQ0EsU0FORCxNQU1LO0FBQ0pqQixVQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLFFBQXJCLENBQThCLFlBQTlCO0FBQ0FsQixVQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmlCLFdBQXJCLENBQWlDLFdBQWpDO0FBQ0FqQixVQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Ca0IsUUFBbkIsQ0FBNEIsWUFBNUI7QUFDQTtBQUNELE9BYkQ7QUFjQyxLQWZhLENBQWY7QUFnQkFQLElBQUFBLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQlgsY0FBakI7QUFDQTtBQUNELENBeEJEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7O0FDREFSLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVSxDQUMzQjtBQUNBLENBRkQ7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9mb290ZXItc3R5bGVzLmNzcz8xMTA3Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/YTMxNiIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXN0eWxlcy5jc3M/ODEzZSIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NhdGVnb3J5L2NhdGVnb3J5LXN0eWxlcy5jc3M/NGJiYSIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9jYXRlZ29yeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZm9vdGVyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Zvb3Rlci1zY3JpcHRzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpZignSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyl7XG5cdFx0Ly8gY29uc29sZS5sb2coJz4+PklPPDw8Jyk7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXJfb3B0aW9ucyA9IHtyb290Om51bGwscm9vdE1hcmdpbjonMjc1cHggMHB4IDBweCAwcHgnLHRocmVzaG9sZDoxLjB9XG5cdFx0Y29uc3Qgb2JlcnZlcl90YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9oZWFkZXJfc2VjdGlvbicpO1xuXHRcdGxldCBjaGVjayA9IGZhbHNlO1xuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpPT57IFxuXHRcdFx0ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3VuZml4Jyk7XG5cdFx0XHRcdFx0Y2hlY2sgPSB0cnVlO1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXgtaGVhZGVyJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXHRcdFx0XHRcdCQoJy53aWRlX3dyYXBwZXInKS5yZW1vdmVDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5hZGRDbGFzcygnZml4LWhlYWRlcicpO1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcblx0XHRcdFx0XHQkKCcud2lkZV93cmFwcGVyJykuYWRkQ2xhc3MoJ3BhZGRpbmdUb3AnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQgfSwgKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKG9iZXJ2ZXJfdGFyZ2V0KTtcblx0fVxufSk7IiwiaW1wb3J0ICcuL2hlYWRlci1zY3JpcHRzJztcbmltcG9ydCAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9oZWFkZXItc3R5bGVzLmNzcyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Ly8gY29uc29sZS5sb2coJ25hdmlnYXRpb24nKTtcbn0pOyIsImltcG9ydCAnLi9zaWRlYmFyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXItc2NyaXB0cyc7IiwiLy9jb25zb2xlLmxvZygnc2lkZWJhciBoZXJlJyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL2NhdGVnb3J5LXN0eWxlcy5jc3MnO1xuXG4vKkNvbXBvbmVudHMqL1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9oZWFkZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9mb290ZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9zaWRlYmFyL2luZGV4JzsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJvYnNlcnZlcl9vcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYmVydmVyX3RhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVjayIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=