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

/***/ "./src/components/templates/home/home-scripts.js":
/*!*******************************************************!*\
  !*** ./src/components/templates/home/home-scripts.js ***!
  \*******************************************************/
/***/ (() => {

$(document).ready(function () {//console.log("load home js");
});

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ (() => {

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
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/scripts.js */ "./src/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_6__);
/*General Styles*/

/*Local Styles*/



/*Components*/




/*Global Scripts*/


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2hlYWRlci1zY3JpcHRzLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaG9tZS1zY3JpcHRzLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvanMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzExMDciLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc3R5bGVzLmNzcz9hMzE2Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84MTNlIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9ob21lLXN0eWxlcy5jc3M/NDc1NiIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9ob21lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGlmKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KXtcblx0XHQvLyBjb25zb2xlLmxvZygnPj4+SU88PDwnKTtcblx0XHRjb25zdCBvYnNlcnZlcl9vcHRpb25zID0ge3Jvb3Q6bnVsbCxyb290TWFyZ2luOicyNzVweCAwcHggMHB4IDBweCcsdGhyZXNob2xkOjEuMH1cblx0XHRjb25zdCBvYmVydmVyX3RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX2hlYWRlcl9zZWN0aW9uJyk7XG5cdFx0bGV0IGNoZWNrID0gZmFsc2U7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcik9PnsgXG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnk9Pntcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XG5cdFx0XHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygndW5maXgnKTtcblx0XHRcdFx0XHRjaGVjayA9IHRydWU7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeC1oZWFkZXInKTtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5hZGRDbGFzcygnY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0JCgnLndpZGVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdwYWRkaW5nVG9wJyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLmFkZENsYXNzKCdmaXgtaGVhZGVyJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXHRcdFx0XHRcdCQoJy53aWRlX3dyYXBwZXInKS5hZGRDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCB9LCApO1xuXHRcdG9ic2VydmVyLm9ic2VydmUob2JlcnZlcl90YXJnZXQpO1xuXHR9XG59KTsiLCJpbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnO1xuaW1wb3J0ICcuL25hdmlnYXRpb24nO1xuaW1wb3J0ICcuL2hlYWRlci1zdHlsZXMuY3NzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQvLyBjb25zb2xlLmxvZygnbmF2aWdhdGlvbicpO1xufSk7IiwiaW1wb3J0ICcuL3NpZGViYXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2lkZWJhci1zY3JpcHRzJzsiLCIvL2NvbnNvbGUubG9nKCdzaWRlYmFyIGhlcmUnKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQvL2NvbnNvbGUubG9nKFwibG9hZCBob21lIGpzXCIpO1xufSk7XG4iLCJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0Ly9jb25zb2xlLmxvZygndGhlcmUgaXMgc2VydmljZSB3b3JrZXInKTtcblx0ICBcdC8vIFVzZSB0aGUgd2luZG93IGxvYWQgZXZlbnQgdG8ga2VlcCB0aGUgcGFnZSBsb2FkIHBlcmZvcm1hbnRcblx0ICBcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHQgICAgLy8gXHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93cC1jb250ZW50L3RoZW1lcy9iYXNlLXRoZW1lL2Rpc3Qvc2VydmljZS13b3JrZXIuanMnKTtcblx0ICBcdC8vIH0pO1xuXG5cdCAgXHQvLyBjb25zb2xlLmxvZygnU3c+Pj4+Jyk7XG5cdCAgXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdCAgXHQvLyBcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3N3LmpzJykudGhlbihyZWdpc3RyYXRpb249Pntcblx0ICBcdC8vIFx0XHRjb25zb2xlLmxvZyggYFN1Y2Nlc3M6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfWApO1xuXHQgIFx0Ly8gXHR9LCBlcnI9Pntcblx0ICBcdC8vIFx0XHRjb25zb2xlLmVycm9yKGBGYWlsZWQ6ICR7ZXJyfWApO1xuXHQgIFx0Ly8gXHR9KVxuXHQgIFx0Ly8gfSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZygnc3JjL3NjcmlwdHMuanMnKTtcblxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL2hvbWUtc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS1zY3JpcHRzLmpzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7XG5cbi8qR2xvYmFsIFNjcmlwdHMqL1xuaW1wb3J0ICcuLi8uLi8uLi9qcy9zY3JpcHRzLmpzJyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsIm9ic2VydmVyX29wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9iZXJ2ZXJfdGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsImNoZWNrIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJvYnNlcnZlIiwibmF2aWdhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==