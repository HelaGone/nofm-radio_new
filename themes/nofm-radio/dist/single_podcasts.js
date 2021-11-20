/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/nofm-radio/src/components/parts/footer/footer-scripts.js":
/*!************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/footer/footer-scripts.js ***!
  \************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/footer/index.js":
/*!***************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/footer/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-styles.css */ "./wp-content/themes/nofm-radio/src/components/parts/footer/footer-styles.css");
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-scripts */ "./wp-content/themes/nofm-radio/src/components/parts/footer/footer-scripts.js");
/* harmony import */ var _footer_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/header/header-scripts.js":
/*!************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/header/header-scripts.js ***!
  \************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/header/index.js":
/*!***************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/header/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-scripts */ "./wp-content/themes/nofm-radio/src/components/parts/header/header-scripts.js");
/* harmony import */ var _header_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scripts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-styles.css */ "./wp-content/themes/nofm-radio/src/components/parts/header/header-styles.css");



/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/index.js":
/*!****************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/sidebar/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-styles.css */ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-styles.css");
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-scripts */ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-scripts.js");
/* harmony import */ var _sidebar_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_scripts__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-scripts.js":
/*!**************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-scripts.js ***!
  \**************************************************************************************/
/***/ (() => {

//console.log('sidebar here');

/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-scripts.js":
/*!**********************************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-scripts.js ***!
  \**********************************************************************************************************/
/***/ (() => {

$(document).ready(function () {
  console.log('single podcasts');
  Howler.autoUnlock = false;
  var utils = {
    formatTime: function formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = secs - minutes * 60 || 0;
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    },
    updateTimeTracker: function updateTimeTracker() {
      var self = this;
      var seek = sound.seek() || 0;
      var currentTime = utils.formatTime(Math.round(seek));
      $('#timer').text(currentTime);
      progress.style.width = (seek / self.duration() * 100 || 0) + '%';

      if (self.playing()) {
        requestAnimationFrame(utils.updateTimeTracker.bind(self));
      }
    }
  };
  var audio_url = $('#btn_ep_play').attr('data-source');
  var audioPlayed = false;
  var audio = new Howl({
    src: [audio_url],
    html5: false,
    onplay: function onplay() {
      audioPlayed = true;
      $('#leading_player_icon').find('use').attr('href', '#ic_pause');
    },
    onpause: function onpause() {
      $('#leading_player_icon').find('use').attr('href', '#ic_play');
    },
    onend: function onend() {
      $('#leading_player_icon').find('use').attr('href', '#ic_play');
    }
  });
  $('#btn_ep_play').on('click', function () {
    console.log('click play');
    $(this).toggleClass('playing');

    if ($(this).hasClass('playing')) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  $('#btn_ep_rwd').on('click', function () {
    var current_position = audio.seek();
    audio.seek(current_position - 10);

    if (audio.seek() <= 0) {
      audio.seek(0);
    }
  });
  $('#btn_ep_fwd').on('click', function () {
    var current_position = audio.seek();
    audio.seek(current_position + 30);

    if (audio.seek() >= audio.duration()) {
      audio.seek(0);
    }
  });
}); //End document ready

/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/footer/footer-styles.css":
/*!************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/footer/footer-styles.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/header/header-styles.css":
/*!************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/header/header-styles.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-styles.css":
/*!**************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/parts/sidebar/sidebar-styles.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-styles.css":
/*!**********************************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-styles.css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!****************************************************************************************!*\
  !*** ./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/index.js ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./wp-content/themes/nofm-radio/src/css/style.css");
/* harmony import */ var _single_podcasts_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-podcasts-styles.css */ "./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-styles.css");
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-podcasts-scripts */ "./wp-content/themes/nofm-radio/src/components/templates/single_podcasts/single-podcasts-scripts.js");
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./wp-content/themes/nofm-radio/src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./wp-content/themes/nofm-radio/src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./wp-content/themes/nofm-radio/src/components/parts/sidebar/index.js");
/*General Styles*/

/*Local Styles*/



/*Components*/




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL3NpbmdsZS1wb2RjYXN0cy1zY3JpcHRzLmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi93cC1jb250ZW50L3RoZW1lcy9ub2ZtLXJhZGlvL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9mb290ZXItc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXN0eWxlcy5jc3M/YTRlYiIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vd3AtY29udGVudC90aGVtZXMvbm9mbS1yYWRpby9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL3NpbmdsZS1wb2RjYXN0cy1zdHlsZXMuY3NzPzFjNDIiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3dwLWNvbnRlbnQvdGhlbWVzL25vZm0tcmFkaW8vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL3NpbmdsZV9wb2RjYXN0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZm9vdGVyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Zvb3Rlci1zY3JpcHRzJzsiLCJpbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnO1xuaW1wb3J0ICcuL2hlYWRlci1zdHlsZXMuY3NzJzsiLCJpbXBvcnQgJy4vc2lkZWJhci1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zaWRlYmFyLXNjcmlwdHMnOyIsIi8vY29uc29sZS5sb2coJ3NpZGViYXIgaGVyZScpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCdzaW5nbGUgcG9kY2FzdHMnKTtcblxuXHRIb3dsZXIuYXV0b1VubG9jayA9IGZhbHNlO1xuXG5cdGNvbnN0IHV0aWxzID0ge1xuXHRcdGZvcm1hdFRpbWU6IGZ1bmN0aW9uIChzZWNzKSB7XG5cdFx0XHR2YXIgbWludXRlcyA9IE1hdGguZmxvb3Ioc2VjcyAvIDYwKSB8fCAwO1xuXHRcdFx0dmFyIHNlY29uZHMgPSAoc2VjcyAtIG1pbnV0ZXMgKiA2MCkgfHwgMDtcblx0XHRcdHJldHVybiBtaW51dGVzICsgJzonICsgKHNlY29uZHMgPCAxMCA/ICcwJyA6ICcnKSArIHNlY29uZHM7XG5cdFx0fSxcblx0XHR1cGRhdGVUaW1lVHJhY2tlcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIHNlZWsgPSBzb3VuZC5zZWVrKCkgfHwgMDtcblx0XHRcdHZhciBjdXJyZW50VGltZSA9IHV0aWxzLmZvcm1hdFRpbWUoTWF0aC5yb3VuZChzZWVrKSk7XG5cblx0XHRcdCQoJyN0aW1lcicpLnRleHQoY3VycmVudFRpbWUpO1xuXHRcdFx0cHJvZ3Jlc3Muc3R5bGUud2lkdGggPSAoKChzZWVrIC8gc2VsZi5kdXJhdGlvbigpKSAqIDEwMCkgfHwgMCkgKyAnJSc7XG5cblx0XHRcdGlmIChzZWxmLnBsYXlpbmcoKSkge1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXRpbHMudXBkYXRlVGltZVRyYWNrZXIuYmluZChzZWxmKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGxldCBhdWRpb191cmwgPSAkKCcjYnRuX2VwX3BsYXknKS5hdHRyKCdkYXRhLXNvdXJjZScpO1xuXHRsZXQgYXVkaW9QbGF5ZWQgPSBmYWxzZTtcblxuXHRsZXQgYXVkaW8gPSBuZXcgSG93bCh7XG5cdFx0c3JjOiBbYXVkaW9fdXJsXSxcblx0XHRodG1sNTpmYWxzZSxcblx0XHRvbnBsYXk6ICgpPT57XG5cdFx0XHRhdWRpb1BsYXllZCA9IHRydWU7XG5cdFx0XHQkKCcjbGVhZGluZ19wbGF5ZXJfaWNvbicpLmZpbmQoJ3VzZScpLmF0dHIoJ2hyZWYnLCAnI2ljX3BhdXNlJyk7XG5cdFx0fSxcblx0XHRvbnBhdXNlOigpPT57XG5cdFx0XHQkKCcjbGVhZGluZ19wbGF5ZXJfaWNvbicpLmZpbmQoJ3VzZScpLmF0dHIoJ2hyZWYnLCAnI2ljX3BsYXknKTtcblxuXHRcdH0sXG5cdFx0b25lbmQ6KCk9Pntcblx0XHRcdCQoJyNsZWFkaW5nX3BsYXllcl9pY29uJykuZmluZCgndXNlJykuYXR0cignaHJlZicsICcjaWNfcGxheScpO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2J0bl9lcF9wbGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnY2xpY2sgcGxheScpO1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3BsYXlpbmcnKTtcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdwbGF5aW5nJykpe1xuXHRcdFx0YXVkaW8ucGxheSgpO1xuXHRcdH1lbHNle1xuXHRcdFx0YXVkaW8ucGF1c2UoKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoJyNidG5fZXBfcndkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRsZXQgY3VycmVudF9wb3NpdGlvbiA9IGF1ZGlvLnNlZWsoKTtcblx0XHRhdWRpby5zZWVrKGN1cnJlbnRfcG9zaXRpb24gLSAxMCk7XG5cdFx0aWYoYXVkaW8uc2VlaygpIDw9IDApe1xuXHRcdFx0YXVkaW8uc2VlaygwKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoJyNidG5fZXBfZndkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRsZXQgY3VycmVudF9wb3NpdGlvbiA9IGF1ZGlvLnNlZWsoKTtcblx0XHRhdWRpby5zZWVrKGN1cnJlbnRfcG9zaXRpb24gKyAzMCk7XG5cdFx0aWYoYXVkaW8uc2VlaygpID49IGF1ZGlvLmR1cmF0aW9uKCkpe1xuXHRcdFx0YXVkaW8uc2VlaygwKTtcblx0XHR9XG5cdH0pO1xuXG59KTsvL0VuZCBkb2N1bWVudCByZWFkeVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qR2VuZXJhbCBTdHlsZXMqL1xuaW1wb3J0ICcuLi8uLi8uLi9jc3Mvc3R5bGUuY3NzJztcblxuLypMb2NhbCBTdHlsZXMqL1xuaW1wb3J0ICcuL3NpbmdsZS1wb2RjYXN0cy1zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zaW5nbGUtcG9kY2FzdHMtc2NyaXB0cyc7XG5cbi8qQ29tcG9uZW50cyovXG5pbXBvcnQgJy4uLy4uL3BhcnRzL2hlYWRlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL2Zvb3Rlci9pbmRleCc7XG5pbXBvcnQgJy4uLy4uL3BhcnRzL3NpZGViYXIvaW5kZXgnOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJIb3dsZXIiLCJhdXRvVW5sb2NrIiwidXRpbHMiLCJmb3JtYXRUaW1lIiwic2VjcyIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidXBkYXRlVGltZVRyYWNrZXIiLCJzZWxmIiwic2VlayIsInNvdW5kIiwiY3VycmVudFRpbWUiLCJyb3VuZCIsInRleHQiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJkdXJhdGlvbiIsInBsYXlpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiYXVkaW9fdXJsIiwiYXR0ciIsImF1ZGlvUGxheWVkIiwiYXVkaW8iLCJIb3dsIiwic3JjIiwiaHRtbDUiLCJvbnBsYXkiLCJmaW5kIiwib25wYXVzZSIsIm9uZW5kIiwib24iLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwicGxheSIsInBhdXNlIiwiY3VycmVudF9wb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=