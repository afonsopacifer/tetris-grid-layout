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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iPart = function iPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 4,
    gridColumnEnd: 5
  }, 'i');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'i');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'i');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 'i');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = iPart;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jPart = function jPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'j');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = jPart;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lPart = function lPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'l');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = lPart;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oPart = function oPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'o');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'o');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'o');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'o');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = oPart;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sPart = function sPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 's');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 's');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 's');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 's');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = sPart;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tPart = function tPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 't');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 't');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 't');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 't');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = tPart;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(28);

var _newSquare2 = _interopRequireDefault(_newSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zPart = function zPart() {

  var square1 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'z');

  var square2 = (0, _newSquare2.default)({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'z');

  var square3 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'z');

  var square4 = (0, _newSquare2.default)({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 'z');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  };
};

exports.default = zPart;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getComputedStyleLine = __webpack_require__(26);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

var _moveToBottom = __webpack_require__(22);

var _moveToBottom2 = _interopRequireDefault(_moveToBottom);

var _getSquarePosition = __webpack_require__(27);

var _getSquarePosition2 = _interopRequireDefault(_getSquarePosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scorePoints = function scorePoints(squareList) {

  // --------------
  // Get score elements
  // --------------

  var lines = document.getElementById('lines');
  var score = document.getElementById('score');

  // --------------
  // Iterating all lines
  // --------------

  for (var i = 1; i < 21; i++) {

    // --------------
    // Filter squares in some line
    // --------------

    var equalPartsList = squareList.filter(function (square) {
      return square.rowStart == i;
    });

    var isCompleteLine = equalPartsList.length == '10';

    if (isCompleteLine) {

      // --------------
      // Clean all square positions
      // --------------

      squareList.splice(0, squareList.length); // clean array

      // --------------
      // Iterating all real square nodes
      // --------------

      var _equalPartsList = document.querySelectorAll('.part');

      _equalPartsList.forEach(function (item) {

        // --------------
        // Remove all complete line
        // --------------

        var isMemberOfCompleteLine = (0, _getComputedStyleLine2.default)(item, 'gridRowStart') == i;

        if (isMemberOfCompleteLine) {
          item.remove();
        }

        // --------------
        // Move all squares from top to bottom
        // --------------

        var isTopOfCompleteLine = (0, _getComputedStyleLine2.default)(item, 'gridRowStart') < i;

        if (isTopOfCompleteLine) {
          (0, _moveToBottom2.default)(item);
        }

        // --------------
        // Re register all square positions
        // --------------

        var SquareNewEndPosition = (0, _getSquarePosition2.default)(item);
        squareList.push(SquareNewEndPosition);
      });

      // --------------
      // Update score Lines
      // --------------

      lines.innerText = parseInt(lines.innerText) + 1;

      // --------------
      // Update score Points
      // --------------

      score.innerText = parseInt(score.innerText) + 100;
    }
  }
};

exports.default = scorePoints;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tPart = __webpack_require__(11);

var _tPart2 = _interopRequireDefault(_tPart);

var _iPart = __webpack_require__(6);

var _iPart2 = _interopRequireDefault(_iPart);

var _jPart = __webpack_require__(7);

var _jPart2 = _interopRequireDefault(_jPart);

var _lPart = __webpack_require__(8);

var _lPart2 = _interopRequireDefault(_lPart);

var _oPart = __webpack_require__(9);

var _oPart2 = _interopRequireDefault(_oPart);

var _sPart = __webpack_require__(10);

var _sPart2 = _interopRequireDefault(_sPart);

var _zPart = __webpack_require__(12);

var _zPart2 = _interopRequireDefault(_zPart);

var _movePartToBottom = __webpack_require__(19);

var _movePartToBottom2 = _interopRequireDefault(_movePartToBottom);

var _movePartToRight = __webpack_require__(21);

var _movePartToRight2 = _interopRequireDefault(_movePartToRight);

var _movePartToLeft = __webpack_require__(20);

var _movePartToLeft2 = _interopRequireDefault(_movePartToLeft);

var _getSquarePosition = __webpack_require__(27);

var _getSquarePosition2 = _interopRequireDefault(_getSquarePosition);

var _registerAllSquareEndPositions = __webpack_require__(25);

var _registerAllSquareEndPositions2 = _interopRequireDefault(_registerAllSquareEndPositions);

var _getComputedStyleLine = __webpack_require__(26);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

var _scorePoints = __webpack_require__(14);

var _scorePoints2 = _interopRequireDefault(_scorePoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ---------------------------------------
// Get elements
// ---------------------------------------

// ---------------------------------------
// Import all parts profiles
// ---------------------------------------

var canvas = document.getElementById('canvas');

// ---------------------------------------
// Import all helpers
// ---------------------------------------

var right = document.getElementById('rightBtn');
var left = document.getElementById('leftBtn');
var play = document.getElementById('playBtn');
var reset = document.getElementById('resetBtn');

// ---------------------------------------
// List possible parts
// ---------------------------------------

var possibleParts = [_tPart2.default, _iPart2.default, _jPart2.default, _lPart2.default, _oPart2.default, _sPart2.default, _zPart2.default];

// ---------------------------------------
// State of all stopped square
// ---------------------------------------

var allSquareEndPosition = [];

// ---------------------------------------
// The tetris game
// ---------------------------------------


var playState = void 0;

var tetrisInit = function tetrisInit() {

  // ---------------------------------------
  // Create new random part
  // ---------------------------------------

  var randomIndex = Math.floor(Math.random() * 7);

  var part = possibleParts[randomIndex]();

  canvas.appendChild(part.left);
  canvas.appendChild(part.top);
  canvas.appendChild(part.bottom);
  canvas.appendChild(part.right);

  // ---------------------------------------
  // Add event handlers
  // ---------------------------------------

  // --------------
  // Btn handlers
  // --------------

  var handlerToRight = function handlerToRight() {
    return (0, _movePartToRight2.default)(part);
  };
  var handlerToLeft = function handlerToLeft() {
    return (0, _movePartToLeft2.default)(part);
  };

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  // --------------
  // Keyboard handlers
  // --------------

  var keyboardHandlers = function keyboardHandlers(e) {
    var pressRight = e.which == 39 || e.keyCode == 39;
    var pressLeft = e.which == 37 || e.keyCode == 37;

    if (pressRight) handlerToRight();
    if (pressLeft) handlerToLeft();
  };

  window.addEventListener('keydown', keyboardHandlers);

  // ---------------------------------------
  // Start game
  // ---------------------------------------

  var down = setInterval(function () {

    if (playState) {
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
        window.removeEventListener('keydown', keyboardHandlers);

        // --------------
        // Finish this round
        // --------------

        clearInterval(down);

        // --------------
        // Save position of all square
        // --------------

        (0, _registerAllSquareEndPositions2.default)(part, allSquareEndPosition);

        // --------------
        // Control score moment
        // --------------

        (0, _scorePoints2.default)(allSquareEndPosition);

        // --------------
        // Start new round
        // --------------

        tetrisInit();
      }
    }
  }, 300); // Round time
};

// ---------------------------------------
// Basic controls
// ---------------------------------------

// --------------
// Play with btn
// --------------

var firstPlay = void 0;

var togglePlay = function togglePlay() {

  playState ? playState = false : playState = true;

  if (!firstPlay) {
    tetrisInit();
    firstPlay = true;
  }

  play.classList.contains('btn--pause') ? play.classList.remove('btn--pause') : play.classList.add('btn--pause');
};

play.addEventListener('click', togglePlay);

// --------------
// Play with keyboard
// --------------

window.addEventListener('keydown', function (e) {
  var pressEnter = e.which == 13 || e.keyCode == 13;
  if (pressEnter) togglePlay();
});

// --------------
// Reset
// --------------

reset.addEventListener('click', function () {
  location.reload();
});

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToBottom = __webpack_require__(22);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToLeft = __webpack_require__(23);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToRight = __webpack_require__(24);

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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSquarePosition = __webpack_require__(27);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getComputedStyleLine = function getComputedStyleLine(square, lineName) {
  return parseInt(window.getComputedStyle(square)[lineName]);
};

exports.default = getComputedStyleLine;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var newSquare = function newSquare(obj, colorClass) {

  var squareElement = document.createElement('div');

  squareElement.style.gridRowStart = obj.gridRowStart;
  squareElement.style.gridRowEnd = obj.gridRowEnd;
  squareElement.style.gridColumnStart = obj.gridColumnStart;
  squareElement.style.gridColumnEnd = obj.gridColumnEnd;

  squareElement.classList.add('part');
  squareElement.classList.add(colorClass);

  return squareElement;
};

exports.default = newSquare;

/***/ })
/******/ ]);