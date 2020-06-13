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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/templates/single_podcasts/index.js");
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

$(document).ready(function () {// console.log('navigation');
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

//console.log('sidebar here');

/***/ }),

/***/ "./src/components/parts/sidebar/sidebar-styles.css":
/*!*********************************************************!*\
  !*** ./src/components/parts/sidebar/sidebar-styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/templates/single_podcasts/index.js":
/*!***********************************************************!*\
  !*** ./src/components/templates/single_podcasts/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _single_podcasts_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-podcasts-styles.css */ "./src/components/templates/single_podcasts/single-podcasts-styles.css");
/* harmony import */ var _single_podcasts_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_single_podcasts_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-podcasts-scripts */ "./src/components/templates/single_podcasts/single-podcasts-scripts.js");
/* harmony import */ var _single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_podcasts_scripts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/header/index */ "./src/components/parts/header/index.js");
/* harmony import */ var _parts_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/footer/index */ "./src/components/parts/footer/index.js");
/* harmony import */ var _parts_sidebar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/sidebar/index */ "./src/components/parts/sidebar/index.js");
/*General Styles*/

/*Local Styles*/



/*Components*/





/***/ }),

/***/ "./src/components/templates/single_podcasts/single-podcasts-scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/templates/single_podcasts/single-podcasts-scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./src/components/templates/single_podcasts/single-podcasts-styles.css":
/*!*****************************************************************************!*\
  !*** ./src/components/templates/single_podcasts/single-podcasts-styles.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2Zvb3Rlci1zdHlsZXMuY3NzPzQxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRzL2hlYWRlci9oZWFkZXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaGVhZGVyLXN0eWxlcy5jc3M/ZGY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvaGVhZGVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFydHMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJ0cy9zaWRlYmFyL3NpZGViYXItc3R5bGVzLmNzcz84YjdmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9zaW5nbGVfcG9kY2FzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL3NpbmdsZV9wb2RjYXN0cy9zaW5nbGUtcG9kY2FzdHMtc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvc2luZ2xlX3BvZGNhc3RzL3NpbmdsZS1wb2RjYXN0cy1zdHlsZXMuY3NzPzExMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJvYnNlcnZlcl9vcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYmVydmVyX3RhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVjayIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib2JzZXJ2ZSIsImNvbnNvbGUiLCJsb2ciLCJIb3dsZXIiLCJhdXRvVW5sb2NrIiwidXRpbHMiLCJmb3JtYXRUaW1lIiwic2VjcyIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidXBkYXRlVGltZVRyYWNrZXIiLCJzZWxmIiwic2VlayIsInNvdW5kIiwiY3VycmVudFRpbWUiLCJyb3VuZCIsInRleHQiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJkdXJhdGlvbiIsInBsYXlpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiYXVkaW9fdXJsIiwiYXR0ciIsImF1ZGlvUGxheWVkIiwiYXVkaW8iLCJIb3dsIiwic3JjIiwiaHRtbDUiLCJvbnBsYXkiLCJmaW5kIiwib25wYXVzZSIsIm9uZW5kIiwib24iLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwicGxheSIsInBhdXNlIiwiY3VycmVudF9wb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QUN0QyxRQUFJSyxnQkFBZ0IsR0FBR2IsS0FBSyxDQUFDZixJQUFOLEVBQXZCO0FBQ0FlLFNBQUssQ0FBQ2YsSUFBTixDQUFXNEIsZ0JBQWdCLEdBQUcsRUFBOUI7O0FBQ0EsUUFBR2IsS0FBSyxDQUFDZixJQUFOLE1BQWdCZSxLQUFLLENBQUNQLFFBQU4sRUFBbkIsRUFBb0M7QUFDbkNPLFdBQUssQ0FBQ2YsSUFBTixDQUFXLENBQVg7QUFDQTtBQUNELEdBTkQ7QUFRQSxDQXRFRCxFLENBc0VHLG9COzs7Ozs7Ozs7OztBQ3RFSCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJzaW5nbGVfcG9kY2FzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9zaW5nbGVfcG9kY2FzdHMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZm9vdGVyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Zvb3Rlci1zY3JpcHRzJzsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRpZignSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyl7XG5cdFx0Ly8gY29uc29sZS5sb2coJz4+PklPPDw8Jyk7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXJfb3B0aW9ucyA9IHtyb290Om51bGwscm9vdE1hcmdpbjonMjc1cHggMHB4IDBweCAwcHgnLHRocmVzaG9sZDoxLjB9XG5cdFx0Y29uc3Qgb2JlcnZlcl90YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9oZWFkZXJfc2VjdGlvbicpO1xuXHRcdGxldCBjaGVjayA9IGZhbHNlO1xuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpPT57IFxuXHRcdFx0ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3VuZml4Jyk7XG5cdFx0XHRcdFx0Y2hlY2sgPSB0cnVlO1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXgtaGVhZGVyJyk7XG5cdFx0XHRcdFx0JCgnI2NlbnRyYWxfaGVhZGVyJykuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXHRcdFx0XHRcdCQoJy53aWRlX3dyYXBwZXInKS5yZW1vdmVDbGFzcygncGFkZGluZ1RvcCcpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQkKCcjY2VudHJhbF9oZWFkZXInKS5hZGRDbGFzcygnZml4LWhlYWRlcicpO1xuXHRcdFx0XHRcdCQoJyNjZW50cmFsX2hlYWRlcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcblx0XHRcdFx0XHQkKCcud2lkZV93cmFwcGVyJykuYWRkQ2xhc3MoJ3BhZGRpbmdUb3AnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQgfSwgKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKG9iZXJ2ZXJfdGFyZ2V0KTtcblx0fVxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2hlYWRlci1zY3JpcHRzJztcbmltcG9ydCAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9oZWFkZXItc3R5bGVzLmNzcyc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Ly8gY29uc29sZS5sb2coJ25hdmlnYXRpb24nKTtcbn0pOyIsImltcG9ydCAnLi9zaWRlYmFyLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpZGViYXItc2NyaXB0cyc7IiwiLy9jb25zb2xlLmxvZygnc2lkZWJhciBoZXJlJyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypHZW5lcmFsIFN0eWxlcyovXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG4vKkxvY2FsIFN0eWxlcyovXG5pbXBvcnQgJy4vc2luZ2xlLXBvZGNhc3RzLXN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3NpbmdsZS1wb2RjYXN0cy1zY3JpcHRzJztcblxuLypDb21wb25lbnRzKi9cbmltcG9ydCAnLi4vLi4vcGFydHMvaGVhZGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvZm9vdGVyL2luZGV4JztcbmltcG9ydCAnLi4vLi4vcGFydHMvc2lkZWJhci9pbmRleCc7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ3NpbmdsZSBwb2RjYXN0cycpO1xuXG5cdEhvd2xlci5hdXRvVW5sb2NrID0gZmFsc2U7XG5cblx0Y29uc3QgdXRpbHMgPSB7XG5cdFx0Zm9ybWF0VGltZTogZnVuY3Rpb24gKHNlY3MpIHtcblx0XHRcdHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNzIC8gNjApIHx8IDA7XG5cdFx0XHR2YXIgc2Vjb25kcyA9IChzZWNzIC0gbWludXRlcyAqIDYwKSB8fCAwO1xuXHRcdFx0cmV0dXJuIG1pbnV0ZXMgKyAnOicgKyAoc2Vjb25kcyA8IDEwID8gJzAnIDogJycpICsgc2Vjb25kcztcblx0XHR9LFxuXHRcdHVwZGF0ZVRpbWVUcmFja2VyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgc2VlayA9IHNvdW5kLnNlZWsoKSB8fCAwO1xuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gdXRpbHMuZm9ybWF0VGltZShNYXRoLnJvdW5kKHNlZWspKTtcblxuXHRcdFx0JCgnI3RpbWVyJykudGV4dChjdXJyZW50VGltZSk7XG5cdFx0XHRwcm9ncmVzcy5zdHlsZS53aWR0aCA9ICgoKHNlZWsgLyBzZWxmLmR1cmF0aW9uKCkpICogMTAwKSB8fCAwKSArICclJztcblxuXHRcdFx0aWYgKHNlbGYucGxheWluZygpKSB7XG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1dGlscy51cGRhdGVUaW1lVHJhY2tlci5iaW5kKHNlbGYpKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0bGV0IGF1ZGlvX3VybCA9ICQoJyNidG5fZXBfcGxheScpLmF0dHIoJ2RhdGEtc291cmNlJyk7XG5cdGxldCBhdWRpb1BsYXllZCA9IGZhbHNlO1xuXG5cdGxldCBhdWRpbyA9IG5ldyBIb3dsKHtcblx0XHRzcmM6IFthdWRpb191cmxdLFxuXHRcdGh0bWw1OmZhbHNlLFxuXHRcdG9ucGxheTogKCk9Pntcblx0XHRcdGF1ZGlvUGxheWVkID0gdHJ1ZTtcblx0XHRcdCQoJyNsZWFkaW5nX3BsYXllcl9pY29uJykuZmluZCgndXNlJykuYXR0cignaHJlZicsICcjaWNfcGF1c2UnKTtcblx0XHR9LFxuXHRcdG9ucGF1c2U6KCk9Pntcblx0XHRcdCQoJyNsZWFkaW5nX3BsYXllcl9pY29uJykuZmluZCgndXNlJykuYXR0cignaHJlZicsICcjaWNfcGxheScpO1xuXG5cdFx0fSxcblx0XHRvbmVuZDooKT0+e1xuXHRcdFx0JCgnI2xlYWRpbmdfcGxheWVyX2ljb24nKS5maW5kKCd1c2UnKS5hdHRyKCdocmVmJywgJyNpY19wbGF5Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcjYnRuX2VwX3BsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKCdjbGljayBwbGF5Jyk7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygncGxheWluZycpO1xuXHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ3BsYXlpbmcnKSl7XG5cdFx0XHRhdWRpby5wbGF5KCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRhdWRpby5wYXVzZSgpO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2J0bl9lcF9yd2QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGxldCBjdXJyZW50X3Bvc2l0aW9uID0gYXVkaW8uc2VlaygpO1xuXHRcdGF1ZGlvLnNlZWsoY3VycmVudF9wb3NpdGlvbiAtIDEwKTtcblx0XHRpZihhdWRpby5zZWVrKCkgPD0gMCl7XG5cdFx0XHRhdWRpby5zZWVrKDApO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2J0bl9lcF9md2QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGxldCBjdXJyZW50X3Bvc2l0aW9uID0gYXVkaW8uc2VlaygpO1xuXHRcdGF1ZGlvLnNlZWsoY3VycmVudF9wb3NpdGlvbiArIDMwKTtcblx0XHRpZihhdWRpby5zZWVrKCkgPj0gYXVkaW8uZHVyYXRpb24oKSl7XG5cdFx0XHRhdWRpby5zZWVrKDApO1xuXHRcdH1cblx0fSk7XG5cbn0pOy8vRW5kIGRvY3VtZW50IHJlYWR5XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9