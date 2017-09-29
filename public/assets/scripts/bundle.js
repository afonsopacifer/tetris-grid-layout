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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToLeft = function moveToLeft(element) {

  var currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  var currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  if (currentColumnStart >= 1) {
    element.style.gridColumnStart = currentColumnStart - 1;
    element.style.gridColumnEnd = currentColumnEnd - 1;
  }
};

exports.default = moveToLeft;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToRight = function moveToRight(element) {

  var currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  var currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  if (currentColumnStart < 10) {
    element.style.gridColumnStart = currentColumnStart + 1;
    element.style.gridColumnEnd = currentColumnEnd + 1;
  }
};

exports.default = moveToRight;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moveToRight = __webpack_require__(2);

var _moveToRight2 = _interopRequireDefault(_moveToRight);

var _moveToLeft = __webpack_require__(1);

var _moveToLeft2 = _interopRequireDefault(_moveToLeft);

var _moveToBottom = __webpack_require__(0);

var _moveToBottom2 = _interopRequireDefault(_moveToBottom);

var _newElement = __webpack_require__(5);

var _newElement2 = _interopRequireDefault(_newElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var right = document.getElementById('right');
var left = document.getElementById('left');

var tetrisInit = function tetrisInit() {

  var canvas = document.getElementById('canvas');
  var element = (0, _newElement2.default)();

  canvas.appendChild(element);

  var handlerToRight = function handlerToRight() {
    return (0, _moveToRight2.default)(element);
  };
  var handlerToLeft = function handlerToLeft() {
    return (0, _moveToLeft2.default)(element);
  };

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  var down = setInterval(function () {

    var currentRowStart = parseInt(window.getComputedStyle(element).gridRowStart);
    var shouldMoveToBottom = currentRowStart < 20;

    if (shouldMoveToBottom) {

      (0, _moveToBottom2.default)(element);
    } else {

      // Clear this element
      right.removeEventListener('click', handlerToRight);
      left.removeEventListener('click', handlerToLeft);
      clearInterval(down);

      // Recursion ;)
      tetrisInit();
    }
  }, 1000);
};

tetrisInit();

// setInterval(() => goToBottom(square), 1000);


// const square1 = document.getElementById('square1');
//
//
// // addPostion(square1);
//
// let allPositionOnTheBottom = [];
//
// const savePositionOnTheBottom = (element) => {
//   const cStart = parseInt(window.getComputedStyle(element).gridColumnStart);
//   const cEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);
//   const rStart = parseInt(window.getComputedStyle(element).gridRowStart);
//   const rEnd = parseInt(window.getComputedStyle(element).gridRowEnd);
//
//   allPositionOnTheBottom.push([cStart, cEnd, rStart, rEnd]);
// }
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

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var newElement = function newElement() {

  var element = document.createElement('div');

  element.style.gridRowStart = 1;
  element.style.gridRowEnd = 1;
  element.style.gridColumnStart = 1;
  element.style.gridColumnEnd = 1;

  element.classList.add('red');

  return element;
};

exports.default = newElement;

/***/ })
/******/ ]);