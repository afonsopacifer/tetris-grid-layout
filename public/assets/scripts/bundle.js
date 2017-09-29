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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSquarePosition = function getSquarePosition(square) {

  var columnStartValue = parseInt(window.getComputedStyle(square).gridColumnStart);
  var rowStartValue = parseInt(window.getComputedStyle(square).gridRowStart);

  return {
    columnStart: columnStartValue,
    rowStart: rowStartValue
  };
};

exports.default = getSquarePosition;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToBottom = __webpack_require__(6);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToLeft = __webpack_require__(7);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToRight = __webpack_require__(8);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(9);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tPart = __webpack_require__(4);

var _tPart2 = _interopRequireDefault(_tPart);

var _movePartToBottom = __webpack_require__(1);

var _movePartToBottom2 = _interopRequireDefault(_movePartToBottom);

var _movePartToRight = __webpack_require__(3);

var _movePartToRight2 = _interopRequireDefault(_movePartToRight);

var _movePartToLeft = __webpack_require__(2);

var _movePartToLeft2 = _interopRequireDefault(_movePartToLeft);

var _getSquarePosition = __webpack_require__(0);

var _getSquarePosition2 = _interopRequireDefault(_getSquarePosition);

var _registerAllSquareEndPositions = __webpack_require__(10);

var _registerAllSquareEndPositions2 = _interopRequireDefault(_registerAllSquareEndPositions);

var _getComputedStyleLine = __webpack_require__(12);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ---------------------------------------
// Get elements
// ---------------------------------------

// ---------------------------------------
// Import all helpers
// ---------------------------------------

var canvas = document.getElementById('canvas'); // ---------------------------------------
// Import all parts profiles
// ---------------------------------------

var right = document.getElementById('right');
var left = document.getElementById('left');

// ---------------------------------------
// State of all stopped square
// ---------------------------------------

var allSquareEndPosition = [];

// ---------------------------------------
// The tetris game
// ---------------------------------------

var tetrisInit = function tetrisInit() {

  // ---------------------------------------
  // Create new game part
  // ---------------------------------------

  var part = (0, _tPart2.default)();

  canvas.appendChild(part.left);
  canvas.appendChild(part.top);
  canvas.appendChild(part.bottom);
  canvas.appendChild(part.right);

  // ---------------------------------------
  // Add event handlers
  // ---------------------------------------

  var handlerToRight = function handlerToRight() {
    return (0, _movePartToRight2.default)(part);
  };
  var handlerToLeft = function handlerToLeft() {
    return (0, _movePartToLeft2.default)(part);
  };

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  // ---------------------------------------
  // Start game
  // ---------------------------------------

  var down = setInterval(function () {

    // ---------------------------------------
    // Check collision with all stopped square
    // todo: Refactor and implement left & right collisions
    // ---------------------------------------

    var noCollidedWithAnotherSquare = true;

    // --------------
    // Get all part square positions for test
    // --------------

    var bottomPartCurrentRowEnd = (0, _getComputedStyleLine2.default)(part.bottom, 'gridRowEnd');
    var bottomPartCurrentColumnStart = (0, _getComputedStyleLine2.default)(part.bottom, 'gridColumnStart');

    var leftPartCurrentRowEnd = (0, _getComputedStyleLine2.default)(part.left, 'gridRowEnd');
    var leftPartCurrentColumnStart = (0, _getComputedStyleLine2.default)(part.left, 'gridColumnStart');

    var rightPartCurrentRowEnd = (0, _getComputedStyleLine2.default)(part.right, 'gridRowEnd');
    var rightPartCurrentColumnStart = (0, _getComputedStyleLine2.default)(part.right, 'gridColumnStart');

    var topPartCurrentRowEnd = (0, _getComputedStyleLine2.default)(part.top, 'gridRowEnd');
    var topPartCurrentColumnStart = (0, _getComputedStyleLine2.default)(part.top, 'gridColumnStart');

    // --------------
    // Test collision with all stopped square
    // --------------

    allSquareEndPosition.forEach(function (stoppedSquare) {

      // --------------
      // Test bottom square
      // --------------

      var bottomSquareCollided = bottomPartCurrentRowEnd == stoppedSquare.rowStart && bottomPartCurrentColumnStart == stoppedSquare.columnStart;

      if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

      // --------------
      // Test left square
      // --------------

      var leftSquareCollided = leftPartCurrentRowEnd == stoppedSquare.rowStart && leftPartCurrentColumnStart == stoppedSquare.columnStart;

      if (leftSquareCollided) noCollidedWithAnotherSquare = false;

      // --------------
      // Test right square
      // --------------

      var rightSquareCollided = rightPartCurrentRowEnd == stoppedSquare.rowStart && rightPartCurrentColumnStart == stoppedSquare.columnStart;

      if (rightSquareCollided) noCollidedWithAnotherSquare = false;

      // --------------
      // Test top square
      // --------------

      var topSquareCollided = topPartCurrentRowEnd == stoppedSquare.rowStart && topPartCurrentColumnStart == stoppedSquare.columnStart;

      if (topSquareCollided) noCollidedWithAnotherSquare = false;
    });

    // ---------------------------------------
    // Check collision with game bottom
    // ---------------------------------------

    var currentRowEnd = (0, _getComputedStyleLine2.default)(part.bottom, 'gridRowEnd');
    var noReachedTheBottom = currentRowEnd < 21;

    // ---------------------------------------
    // Game engine
    // ---------------------------------------

    var shouldKeepDown = noReachedTheBottom && noCollidedWithAnotherSquare;

    if (shouldKeepDown) {

      // --------------
      // Continues with the round
      // --------------

      (0, _movePartToBottom2.default)(part);
    } else {

      // --------------
      // Remove handlers for this part
      // --------------

      right.removeEventListener('click', handlerToRight);
      left.removeEventListener('click', handlerToLeft);

      // --------------
      // Finish this round
      // --------------

      clearInterval(down);

      // --------------
      // Save position of all square
      // --------------

      (0, _registerAllSquareEndPositions2.default)(part, allSquareEndPosition);

      // --------------
      // Start new round
      // --------------

      tetrisInit();
    }
  }, 300); // Round time
};

tetrisInit();

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSquarePosition = __webpack_require__(0);

var _getSquarePosition2 = _interopRequireDefault(_getSquarePosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerAllSquareEndPositions = function registerAllSquareEndPositions(part, squarePositionsList) {

  var leftSquareEndPosition = (0, _getSquarePosition2.default)(part.left);
  var topSquareEndPosition = (0, _getSquarePosition2.default)(part.top);
  var bottomSquareEndPosition = (0, _getSquarePosition2.default)(part.bottom);
  var rightSquareEndPosition = (0, _getSquarePosition2.default)(part.right);

  squarePositionsList.push(leftSquareEndPosition);
  squarePositionsList.push(topSquareEndPosition);
  squarePositionsList.push(bottomSquareEndPosition);
  squarePositionsList.push(rightSquareEndPosition);
};

exports.default = registerAllSquareEndPositions;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getComputedStyleLine = function getComputedStyleLine(square, lineName) {
  return parseInt(window.getComputedStyle(square)[lineName]);
};

exports.default = getComputedStyleLine;

/***/ })
/******/ ]);