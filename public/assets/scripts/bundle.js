/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moveToRight = __webpack_require__(1);

var _moveToRight2 = _interopRequireDefault(_moveToRight);

var _moveToLeft = __webpack_require__(2);

var _moveToLeft2 = _interopRequireDefault(_moveToLeft);

var _moveToBottom = __webpack_require__(3);

var _moveToBottom2 = _interopRequireDefault(_moveToBottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var square = document.getElementById('square');

var right = document.getElementById('right');
var left = document.getElementById('left');
var bottom = document.getElementById('bottom');

right.addEventListener('click', function () {
  return (0, _moveToRight2.default)(square);
});
left.addEventListener('click', function () {
  return (0, _moveToLeft2.default)(square);
});
bottom.addEventListener('click', function () {
  return (0, _moveToBottom2.default)(square);
});

// const square1 = document.getElementById('square1');
//
// const right = document.getElementById('right');
// const left = document.getElementById('left');
// const bottom = document.getElementById('bottom');
//
// let allPos = [];
//
// const addPostion = (element) => {
//   const cStart = parseInt(window.getComputedStyle(element).gridColumnStart);
//   const cEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);
//   const rStart = parseInt(window.getComputedStyle(element).gridRowStart);
//   const rEnd = parseInt(window.getComputedStyle(element).gridRowEnd);
//
//   allPos.push([cStart, cEnd, rStart, rEnd]);
// }
//
// // addPostion(square1);
//
//
//
// right.addEventListener('click', () => {
//
//   const x = estaOcupado(
//     parseInt(window.getComputedStyle(square).gridColumnStart) + 1,
//     parseInt(window.getComputedStyle(square).gridColumnEnd) + 1,
//     parseInt(window.getComputedStyle(square).gridRowStart),
//     parseInt(window.getComputedStyle(square).gridRowEnd)
//   );
//
//   if(x) {
//     moveToLeft(square)
//   }
//
// })
//
// const estaOcupado = (cStart, cEnd, rStart, rEnd) => {
//  if(allPos[0][0] == cStart && allPos[0][1] == cEnd && allPos[0][2] == rStart && allPo[0][3] == rEnd) {
//   return false;
//  } else {
//   return true;
//  }
// }
//
// const moveToLeft = (element) => {
//   element.style.gridColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart) + 1;
//   element.style.gridColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd) + 1;
// }
//
//
// const moveToBottom = (element) => {
//   element.style.gridColumnStart = parseInt(window.getComputedStyle(element).gridRowStart) - 1;
//   element.style.gridColumnEnd = parseInt(window.getComputedStyle(element).gridRowEnd) - 1;
// }
//
// left.addEventListener('click', () => moveToLeft(square))
// bottom.addEventListener('click', () => moveToBottom(square))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToRight = function moveToRight(element) {
  var currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  var currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  element.style.gridColumnStart = currentColumnStart + 1;
  element.style.gridColumnEnd = currentColumnEnd + 1;
};

exports.default = moveToRight;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToLeft = function moveToLeft(element) {
  var currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  var currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  element.style.gridColumnStart = currentColumnStart - 1;
  element.style.gridColumnEnd = currentColumnEnd - 1;
};

exports.default = moveToLeft;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToBottom = function moveToBottom(element) {
  var currentRowStart = parseInt(window.getComputedStyle(element).gridRowStart);
  var currentRowEnd = parseInt(window.getComputedStyle(element).gridRowEnd);

  element.style.gridRowStart = currentRowStart + 1;
  element.style.gridRowEnd = currentRowEnd + 1;
};

exports.default = moveToBottom;

/***/ })
/******/ ]);