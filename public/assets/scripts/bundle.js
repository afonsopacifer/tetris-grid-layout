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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

  //if (currentColumnStart >= 1) {
  element.style.gridColumnStart = currentColumnStart - 1;
  element.style.gridColumnEnd = currentColumnEnd - 1;
  //}
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

  // const leftSquare = part.left;
  // const topSquare = part.top;
  // const rightSquare = part.right;
  // const bottomSquare = part.bottom;

  var currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  var currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  // if (currentColumnStart < 10) {
  element.style.gridColumnStart = currentColumnStart + 1;
  element.style.gridColumnEnd = currentColumnEnd + 1;
  // }
};

exports.default = moveToRight;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tPart = __webpack_require__(9);

var _tPart2 = _interopRequireDefault(_tPart);

var _movePartToBottom = __webpack_require__(6);

var _movePartToBottom2 = _interopRequireDefault(_movePartToBottom);

var _movePartToRight = __webpack_require__(7);

var _movePartToRight2 = _interopRequireDefault(_movePartToRight);

var _movePartToLeft = __webpack_require__(8);

var _movePartToLeft2 = _interopRequireDefault(_movePartToLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('canvas');
var right = document.getElementById('right');
var left = document.getElementById('left');

var tetrisInit = function tetrisInit() {

  var part = (0, _tPart2.default)();

  canvas.appendChild(part.left);
  canvas.appendChild(part.top);
  canvas.appendChild(part.bottom);
  canvas.appendChild(part.right);

  var handlerToRight = function handlerToRight() {
    return (0, _movePartToRight2.default)(part);
  };
  var handlerToLeft = function handlerToLeft() {
    return (0, _movePartToLeft2.default)(part);
  };

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  var down = setInterval(function () {

    var currentRowStart = parseInt(window.getComputedStyle(part.bottom).gridRowStart);
    var shouldMoveToBottom = currentRowStart < 20;

    if (shouldMoveToBottom) {

      (0, _movePartToBottom2.default)(part);
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var newSquare = function newSquare(obj) {

  var squareElement = document.createElement('div');

  squareElement.style.gridRowStart = obj.gridRowStart;
  squareElement.style.gridRowEnd = obj.gridRowEnd;
  squareElement.style.gridColumnStart = obj.gridColumnStart;
  squareElement.style.gridColumnEnd = obj.gridColumnEnd;

  squareElement.classList.add('red');

  return squareElement;
};

exports.default = newSquare;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToBottom = __webpack_require__(0);

var _moveToBottom2 = _interopRequireDefault(_moveToBottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movePartToBottom = function movePartToBottom(part) {

  (0, _moveToBottom2.default)(part.left);
  (0, _moveToBottom2.default)(part.top);
  (0, _moveToBottom2.default)(part.bottom);
  (0, _moveToBottom2.default)(part.right);
};

exports.default = movePartToBottom;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToRight = __webpack_require__(2);

var _moveToRight2 = _interopRequireDefault(_moveToRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movePartToRight = function movePartToRight(part) {

  var currentColumnStart = parseInt(window.getComputedStyle(part.right).gridColumnStart);

  if (currentColumnStart < 10) {

    (0, _moveToRight2.default)(part.left);
    (0, _moveToRight2.default)(part.top);
    (0, _moveToRight2.default)(part.bottom);
    (0, _moveToRight2.default)(part.right);
  }
};

exports.default = movePartToRight;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToLeft = __webpack_require__(1);

var _moveToLeft2 = _interopRequireDefault(_moveToLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movePartToLeft = function movePartToLeft(part) {

  var currentColumnStart = parseInt(window.getComputedStyle(part.left).gridColumnStart);

  if (currentColumnStart >= 2) {

    (0, _moveToLeft2.default)(part.left);
    (0, _moveToLeft2.default)(part.top);
    (0, _moveToLeft2.default)(part.bottom);
    (0, _moveToLeft2.default)(part.right);
  }
};

exports.default = movePartToLeft;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(5);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tPart = function tPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  });

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  });

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  });

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  });

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = tPart;

/***/ })
/******/ ]);