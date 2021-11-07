/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/nofm-radio/src/js/functions.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/js/functions.js ***!
  \**********************************************************/
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
});

/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/css/style.css":
/*!********************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/css/style.css ***!
  \********************************************************/
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
/*!***************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/index.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./wp-content/themes/nofm-radio/src/css/style.css");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/functions.js */ "./wp-content/themes/nofm-radio/src/js/functions.js");
/* harmony import */ var _js_functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_functions_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFVO0FBQzNCRixFQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0csT0FBckM7QUFDQSxNQUFJQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBSTtBQUNyQyxRQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxRQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFqQzs7QUFDQSxRQUFHSCxZQUFZLElBQUksSUFBbkIsRUFBeUI7QUFDeEJELE1BQUFBLFlBQVksR0FBRyxLQUFmO0FBQ0EsS0FGRCxNQUVNLElBQUdDLFlBQVksSUFBSSxHQUFoQixJQUF1QkEsWUFBWSxHQUFHLElBQXpDLEVBQThDO0FBQ25ERCxNQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNBLEtBRkssTUFFRDtBQUNKQSxNQUFBQSxZQUFZLEdBQUcsTUFBZjtBQUNBOztBQUNEUCxJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksT0FBdEIsQ0FBOEI7QUFBQ0QsTUFBQUEsS0FBSyxFQUFDSjtBQUFQLEtBQTlCO0FBQ0EsR0FYRDtBQVlBLE1BQUlNLFlBQVksR0FBR1osUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUF4QixDQUFuQjtBQUNBUSxFQUFBQSxZQUFZLENBQUNQLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQUk7QUFDMUNOLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxPQUF0QixDQUE4QjtBQUFDRCxNQUFBQSxLQUFLLEVBQUM7QUFBUCxLQUE5QjtBQUNBLEdBRkQ7QUFHQSxDQW5CRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvanMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQkKCdib2R5IDpub3QoLndwLWVtYmVkZGVkLWNvbnRlbnQpJykuZml0VmlkcygpO1xuXHRsZXQgYnRuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbWVudScpO1xuXHRidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntcblx0XHRsZXQgd2lkdGhfcGVjZW50ID0gXCIwJVwiO1xuXHRcdGxldCBzY3JlZW5fd2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuXHRcdGlmKHNjcmVlbl93aWR0aCA+PSAxMDI0ICl7XG5cdFx0XHR3aWR0aF9wZWNlbnQgPSBcIjQwJVwiO1xuXHRcdH1lbHNlIGlmKHNjcmVlbl93aWR0aCA+PSA3NjggJiYgc2NyZWVuX3dpZHRoIDwgMTAyNCl7XG5cdFx0XHR3aWR0aF9wZWNlbnQgPSBcIjYwJVwiO1xuXHRcdH1lbHNle1xuXHRcdFx0d2lkdGhfcGVjZW50ID0gXCIxMDAlXCI7XG5cdFx0fVxuXHRcdCQoJy5tYWluX25hdmlnYXRpb24nKS5hbmltYXRlKHt3aWR0aDp3aWR0aF9wZWNlbnR9KTtcblx0fSk7XG5cdGxldCBidG5DbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfbWFpbl9tZW51Jyk7XG5cdGJ0bkNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cdFx0JCgnLm1haW5fbmF2aWdhdGlvbicpLmFuaW1hdGUoe3dpZHRoOicwJ30pO1xuXHR9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9qcy9mdW5jdGlvbnMuanMnOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpdFZpZHMiLCJidG5NZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2lkdGhfcGVjZW50Iiwic2NyZWVuX3dpZHRoIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJhbmltYXRlIiwiYnRuQ2xvc2VNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==