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

/***/ "./src/components/templates/single_podcasts/single-podcasts-scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/templates/single_podcasts/single-podcasts-scripts.js ***!
  \*****************************************************************************/
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

/***/ "./src/components/templates/single_podcasts/single-podcasts-styles.css":
/*!*****************************************************************************!*\
  !*** ./src/components/templates/single_podcasts/single-podcasts-styles.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nError: waitFor can only be called for an already started item\n    at AsyncQueue.waitFor (/Users/dev/Sites/nofm-radio.com/wp-content/themes/nofm-radio/node_modules/webpack/lib/util/AsyncQueue.js:180:5)\n    at /Users/dev/Sites/nofm-radio.com/wp-content/themes/nofm-radio/node_modules/webpack/lib/Compilation.js:4690:25\n    at processQueue (/Users/dev/Sites/nofm-radio.com/wp-content/themes/nofm-radio/node_modules/webpack/lib/util/processAsyncTree.js:50:4)\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

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
/*!***********************************************************!*\
  !*** ./src/components/templates/single_podcasts/index.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _single_podcasts_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-podcasts-styles.css */ "./src/components/templates/single_podcasts/single-podcasts-styles.css");
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-podcasts-scripts */ "./src/components/templates/single_podcasts/single-podcasts-scripts.js");
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/*General Styles*/

/*Local Styles*/



/*Components*/




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQU4sQ0FBVyxDQUFYO0FBQ0E7QUFDRCxHQU5EO0FBUUEsQ0F0RUQsR0FzRUc7Ozs7Ozs7Ozs7OztBQ3RFSDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9zaW5nbGVfcG9kY2FzdHMvc2luZ2xlLXBvZGNhc3RzLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9mb290ZXItc3R5bGVzLmNzcz8xMTA3Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/YTMxNiIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXN0eWxlcy5jc3M/ODEzZSIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL3NpbmdsZV9wb2RjYXN0cy9zaW5nbGUtcG9kY2FzdHMtc3R5bGVzLmNzcz9lYzFmIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdGlmKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KXtcblx0XHQvLyBjb25zb2xlLmxvZygnPj4+SU88PDwnKTtcblx0XHRjb25zdCBvYnNlcnZlcl9vcHRpb25zID0ge3Jvb3Q6bnVsbCxyb290TWFyZ2luOicyNzVweCAwcHggMHB4IDBweCcsdGhyZXNob2xkOjEuMH1cblx0XHRjb25zdCBvYmVydmVyX3RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX2hlYWRlcl9zZWN0aW9uJyk7XG5cdFx0bGV0IGNoZWNrID0gZmFsc2U7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcik9PnsgXG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnk9Pntcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XG5cdFx0XHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygndW5maXgnKTtcblx0XHRcdFx0XHRjaGVjayA9IHRydWU7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeC1oZWFkZXInKTtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5hZGRDbGFzcygnY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0JCgnLndpZGVfd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdwYWRkaW5nVG9wJyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLmFkZENsYXNzKCdmaXgtaGVhZGVyJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXHRcdFx0XHRcdCQoJy53aWRlX3dyYXBwZXInKS5hZGRDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCB9LCApO1xuXHRcdG9ic2VydmVyLm9ic2VydmUob2JlcnZlcl90YXJnZXQpO1xuXHR9XG59KTsiLCJpbXBvcnQgJy4vaGVhZGVyLXNjcmlwdHMnO1xuaW1wb3J0ICcuL25hdmlnYXRpb24nO1xuaW1wb3J0ICcuL2hlYWRlci1zdHlsZXMuY3NzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQvLyBjb25zb2xlLmxvZygnbmF2aWdhdGlvbicpO1xufSk7IiwiaW1wb3J0ICcuL3NpZGViYXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2lkZWJhci1zY3JpcHRzJzsiLCIvL2NvbnNvbGUubG9nKCdzaWRlYmFyIGhlcmUnKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZygnc2luZ2xlIHBvZGNhc3RzJyk7XG5cblx0SG93bGVyLmF1dG9VbmxvY2sgPSBmYWxzZTtcblxuXHRjb25zdCB1dGlscyA9IHtcblx0XHRmb3JtYXRUaW1lOiBmdW5jdGlvbiAoc2Vjcykge1xuXHRcdFx0dmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY3MgLyA2MCkgfHwgMDtcblx0XHRcdHZhciBzZWNvbmRzID0gKHNlY3MgLSBtaW51dGVzICogNjApIHx8IDA7XG5cdFx0XHRyZXR1cm4gbWludXRlcyArICc6JyArIChzZWNvbmRzIDwgMTAgPyAnMCcgOiAnJykgKyBzZWNvbmRzO1xuXHRcdH0sXG5cdFx0dXBkYXRlVGltZVRyYWNrZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBzZWVrID0gc291bmQuc2VlaygpIHx8IDA7XG5cdFx0XHR2YXIgY3VycmVudFRpbWUgPSB1dGlscy5mb3JtYXRUaW1lKE1hdGgucm91bmQoc2VlaykpO1xuXG5cdFx0XHQkKCcjdGltZXInKS50ZXh0KGN1cnJlbnRUaW1lKTtcblx0XHRcdHByb2dyZXNzLnN0eWxlLndpZHRoID0gKCgoc2VlayAvIHNlbGYuZHVyYXRpb24oKSkgKiAxMDApIHx8IDApICsgJyUnO1xuXG5cdFx0XHRpZiAoc2VsZi5wbGF5aW5nKCkpIHtcblx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHV0aWxzLnVwZGF0ZVRpbWVUcmFja2VyLmJpbmQoc2VsZikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRsZXQgYXVkaW9fdXJsID0gJCgnI2J0bl9lcF9wbGF5JykuYXR0cignZGF0YS1zb3VyY2UnKTtcblx0bGV0IGF1ZGlvUGxheWVkID0gZmFsc2U7XG5cblx0bGV0IGF1ZGlvID0gbmV3IEhvd2woe1xuXHRcdHNyYzogW2F1ZGlvX3VybF0sXG5cdFx0aHRtbDU6ZmFsc2UsXG5cdFx0b25wbGF5OiAoKT0+e1xuXHRcdFx0YXVkaW9QbGF5ZWQgPSB0cnVlO1xuXHRcdFx0JCgnI2xlYWRpbmdfcGxheWVyX2ljb24nKS5maW5kKCd1c2UnKS5hdHRyKCdocmVmJywgJyNpY19wYXVzZScpO1xuXHRcdH0sXG5cdFx0b25wYXVzZTooKT0+e1xuXHRcdFx0JCgnI2xlYWRpbmdfcGxheWVyX2ljb24nKS5maW5kKCd1c2UnKS5hdHRyKCdocmVmJywgJyNpY19wbGF5Jyk7XG5cblx0XHR9LFxuXHRcdG9uZW5kOigpPT57XG5cdFx0XHQkKCcjbGVhZGluZ19wbGF5ZXJfaWNvbicpLmZpbmQoJ3VzZScpLmF0dHIoJ2hyZWYnLCAnI2ljX3BsYXknKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoJyNidG5fZXBfcGxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coJ2NsaWNrIHBsYXknKTtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwbGF5aW5nJyk7XG5cdFx0aWYoJCh0aGlzKS5oYXNDbGFzcygncGxheWluZycpKXtcblx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0XHR9ZWxzZXtcblx0XHRcdGF1ZGlvLnBhdXNlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcjYnRuX2VwX3J3ZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGN1cnJlbnRfcG9zaXRpb24gPSBhdWRpby5zZWVrKCk7XG5cdFx0YXVkaW8uc2VlayhjdXJyZW50X3Bvc2l0aW9uIC0gMTApO1xuXHRcdGlmKGF1ZGlvLnNlZWsoKSA8PSAwKXtcblx0XHRcdGF1ZGlvLnNlZWsoMCk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcjYnRuX2VwX2Z3ZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGN1cnJlbnRfcG9zaXRpb24gPSBhdWRpby5zZWVrKCk7XG5cdFx0YXVkaW8uc2VlayhjdXJyZW50X3Bvc2l0aW9uICsgMzApO1xuXHRcdGlmKGF1ZGlvLnNlZWsoKSA+PSBhdWRpby5kdXJhdGlvbigpKXtcblx0XHRcdGF1ZGlvLnNlZWsoMCk7XG5cdFx0fVxuXHR9KTtcblxufSk7Ly9FbmQgZG9jdW1lbnQgcmVhZHlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKkdlbmVyYWwgU3R5bGVzKi9cbmltcG9ydCAnLi4vLi4vLi4vY3NzL3N0eWxlLmNzcyc7XG5cbi8qTG9jYWwgU3R5bGVzKi9cbmltcG9ydCAnLi9zaW5nbGUtcG9kY2FzdHMtc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc2luZ2xlLXBvZGNhc3RzLXNjcmlwdHMnO1xuXG4vKkNvbXBvbmVudHMqL1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9oZWFkZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9mb290ZXIvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0cy9zaWRlYmFyL2luZGV4JzsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJvYnNlcnZlcl9vcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYmVydmVyX3RhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVjayIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib2JzZXJ2ZSIsImNvbnNvbGUiLCJsb2ciLCJIb3dsZXIiLCJhdXRvVW5sb2NrIiwidXRpbHMiLCJmb3JtYXRUaW1lIiwic2VjcyIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidXBkYXRlVGltZVRyYWNrZXIiLCJzZWxmIiwic2VlayIsInNvdW5kIiwiY3VycmVudFRpbWUiLCJyb3VuZCIsInRleHQiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJkdXJhdGlvbiIsInBsYXlpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiYXVkaW9fdXJsIiwiYXR0ciIsImF1ZGlvUGxheWVkIiwiYXVkaW8iLCJIb3dsIiwic3JjIiwiaHRtbDUiLCJvbnBsYXkiLCJmaW5kIiwib25wYXVzZSIsIm9uZW5kIiwib24iLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwicGxheSIsInBhdXNlIiwiY3VycmVudF9wb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=