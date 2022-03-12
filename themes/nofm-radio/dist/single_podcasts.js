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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9zaWRlYmFyLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9zaW5nbGVfcG9kY2FzdHMvc2luZ2xlLXBvZGNhc3RzLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2Zvb3Rlci9mb290ZXItc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL2hlYWRlci1zdHlsZXMuY3NzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84MTNlIiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL3NpbmdsZS1wb2RjYXN0cy1zdHlsZXMuY3NzP2VjMWYiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhc2UtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jhc2UtdGhlbWUvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9mb290ZXItc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLXNjcmlwdHMnOyIsImltcG9ydCAnLi9oZWFkZXItc2NyaXB0cyc7XG5pbXBvcnQgJy4vaGVhZGVyLXN0eWxlcy5jc3MnOyIsImltcG9ydCAnLi9zaWRlYmFyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXItc2NyaXB0cyc7IiwiLy9jb25zb2xlLmxvZygnc2lkZWJhciBoZXJlJyk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ3NpbmdsZSBwb2RjYXN0cycpO1xuXG5cdEhvd2xlci5hdXRvVW5sb2NrID0gZmFsc2U7XG5cblx0Y29uc3QgdXRpbHMgPSB7XG5cdFx0Zm9ybWF0VGltZTogZnVuY3Rpb24gKHNlY3MpIHtcblx0XHRcdHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNzIC8gNjApIHx8IDA7XG5cdFx0XHR2YXIgc2Vjb25kcyA9IChzZWNzIC0gbWludXRlcyAqIDYwKSB8fCAwO1xuXHRcdFx0cmV0dXJuIG1pbnV0ZXMgKyAnOicgKyAoc2Vjb25kcyA8IDEwID8gJzAnIDogJycpICsgc2Vjb25kcztcblx0XHR9LFxuXHRcdHVwZGF0ZVRpbWVUcmFja2VyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgc2VlayA9IHNvdW5kLnNlZWsoKSB8fCAwO1xuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gdXRpbHMuZm9ybWF0VGltZShNYXRoLnJvdW5kKHNlZWspKTtcblxuXHRcdFx0JCgnI3RpbWVyJykudGV4dChjdXJyZW50VGltZSk7XG5cdFx0XHRwcm9ncmVzcy5zdHlsZS53aWR0aCA9ICgoKHNlZWsgLyBzZWxmLmR1cmF0aW9uKCkpICogMTAwKSB8fCAwKSArICclJztcblxuXHRcdFx0aWYgKHNlbGYucGxheWluZygpKSB7XG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1dGlscy51cGRhdGVUaW1lVHJhY2tlci5iaW5kKHNlbGYpKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0bGV0IGF1ZGlvX3VybCA9ICQoJyNidG5fZXBfcGxheScpLmF0dHIoJ2RhdGEtc291cmNlJyk7XG5cdGxldCBhdWRpb1BsYXllZCA9IGZhbHNlO1xuXG5cdGxldCBhdWRpbyA9IG5ldyBIb3dsKHtcblx0XHRzcmM6IFthdWRpb191cmxdLFxuXHRcdGh0bWw1OmZhbHNlLFxuXHRcdG9ucGxheTogKCk9Pntcblx0XHRcdGF1ZGlvUGxheWVkID0gdHJ1ZTtcblx0XHRcdCQoJyNsZWFkaW5nX3BsYXllcl9pY29uJykuZmluZCgndXNlJykuYXR0cignaHJlZicsICcjaWNfcGF1c2UnKTtcblx0XHR9LFxuXHRcdG9ucGF1c2U6KCk9Pntcblx0XHRcdCQoJyNsZWFkaW5nX3BsYXllcl9pY29uJykuZmluZCgndXNlJykuYXR0cignaHJlZicsICcjaWNfcGxheScpO1xuXG5cdFx0fSxcblx0XHRvbmVuZDooKT0+e1xuXHRcdFx0JCgnI2xlYWRpbmdfcGxheWVyX2ljb24nKS5maW5kKCd1c2UnKS5hdHRyKCdocmVmJywgJyNpY19wbGF5Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcjYnRuX2VwX3BsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKCdjbGljayBwbGF5Jyk7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncGxheWluZycpO1xuXHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ3BsYXlpbmcnKSl7XG5cdFx0XHRhdWRpby5wbGF5KCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRhdWRpby5wYXVzZSgpO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2J0bl9lcF9yd2QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGxldCBjdXJyZW50X3Bvc2l0aW9uID0gYXVkaW8uc2VlaygpO1xuXHRcdGF1ZGlvLnNlZWsoY3VycmVudF9wb3NpdGlvbiAtIDEwKTtcblx0XHRpZihhdWRpby5zZWVrKCkgPD0gMCl7XG5cdFx0XHRhdWRpby5zZWVrKDApO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2J0bl9lcF9md2QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGxldCBjdXJyZW50X3Bvc2l0aW9uID0gYXVkaW8uc2VlaygpO1xuXHRcdGF1ZGlvLnNlZWsoY3VycmVudF9wb3NpdGlvbiArIDMwKTtcblx0XHRpZihhdWRpby5zZWVrKCkgPj0gYXVkaW8uZHVyYXRpb24oKSl7XG5cdFx0XHRhdWRpby5zZWVrKDApO1xuXHRcdH1cblx0fSk7XG5cbn0pOy8vRW5kIGRvY3VtZW50IHJlYWR5XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypHZW5lcmFsIFN0eWxlcyovXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG4vKkxvY2FsIFN0eWxlcyovXG5pbXBvcnQgJy4vc2luZ2xlLXBvZGNhc3RzLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpbmdsZS1wb2RjYXN0cy1zY3JpcHRzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsIkhvd2xlciIsImF1dG9VbmxvY2siLCJ1dGlscyIsImZvcm1hdFRpbWUiLCJzZWNzIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJ1cGRhdGVUaW1lVHJhY2tlciIsInNlbGYiLCJzZWVrIiwic291bmQiLCJjdXJyZW50VGltZSIsInJvdW5kIiwidGV4dCIsInByb2dyZXNzIiwic3R5bGUiLCJ3aWR0aCIsImR1cmF0aW9uIiwicGxheWluZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJhdWRpb191cmwiLCJhdHRyIiwiYXVkaW9QbGF5ZWQiLCJhdWRpbyIsIkhvd2wiLCJzcmMiLCJodG1sNSIsIm9ucGxheSIsImZpbmQiLCJvbnBhdXNlIiwib25lbmQiLCJvbiIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJwbGF5IiwicGF1c2UiLCJjdXJyZW50X3Bvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==