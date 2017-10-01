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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getComputedStyleLine = __webpack_require__(1);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSquarePosition = function getSquarePosition(square) {

  var columnStartValue = (0, _getComputedStyleLine2.default)(square, 'gridColumnStart');
  var columnEndValue = (0, _getComputedStyleLine2.default)(square, 'gridColumnEnd');
  var rowStartValue = (0, _getComputedStyleLine2.default)(square, 'gridRowStart');
  var rowEndValue = (0, _getComputedStyleLine2.default)(square, 'gridRowEnd');

  return {
    columnStart: columnStartValue,
    columnEnd: columnEndValue,
    rowStart: rowStartValue,
    rowEnd: rowEndValue
  };
};

exports.default = getSquarePosition;

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getComputedStyleLine = __webpack_require__(1);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collisionWithCavasBottom = function collisionWithCavasBottom(square) {

  var currentRowEnd = (0, _getComputedStyleLine2.default)(square, 'gridRowEnd');

  return currentRowEnd < 21;
};

exports.default = collisionWithCavasBottom;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getSquarePosition = __webpack_require__(2);

var _getSquarePosition2 = _interopRequireDefault(_getSquarePosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collisionsWithStoppedSquaresBelow = function collisionsWithStoppedSquaresBelow(part, allSquareEndPosition) {

    // ---------------------------------------
    // State of collision with all stopped square on down
    // ---------------------------------------

    var noCollidedWithAnotherSquare = true;

    // --------------
    // Get all part square current positions for test
    // --------------

    var bottomSquare = (0, _getSquarePosition2.default)(part.bottom);
    var leftSquare = (0, _getSquarePosition2.default)(part.left);
    var rightSquare = (0, _getSquarePosition2.default)(part.right);
    var topSquare = (0, _getSquarePosition2.default)(part.top);

    // --------------
    // Test all squares in movement with all stopped square
    // --------------

    allSquareEndPosition.forEach(function (stoppedSquare) {

        var bottomSquareCollided = bottomSquare.rowEnd == stoppedSquare.rowStart && bottomSquare.columnStart == stoppedSquare.columnStart;

        if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

        var leftSquareCollided = leftSquare.rowEnd == stoppedSquare.rowStart && leftSquare.columnStart == stoppedSquare.columnStart;

        if (leftSquareCollided) noCollidedWithAnotherSquare = false;

        var rightSquareCollided = rightSquare.rowEnd == stoppedSquare.rowStart && rightSquare.columnStart == stoppedSquare.columnStart;

        if (rightSquareCollided) noCollidedWithAnotherSquare = false;

        var topSquareCollided = topSquare.rowEnd == stoppedSquare.rowStart && topSquare.columnStart == stoppedSquare.columnStart;

        if (topSquareCollided) noCollidedWithAnotherSquare = false;
    });

    return noCollidedWithAnotherSquare;
};

exports.default = collisionsWithStoppedSquaresBelow;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var playControlInit = function playControlInit(state, onlyFirstAction) {

  var playBtn = document.getElementById('playBtn');

  var firstPlay = void 0;

  var togglePlay = function togglePlay() {

    state.play ? state.play = false : state.play = true;

    if (!firstPlay) {
      onlyFirstAction();
      firstPlay = true;
    }

    playBtn.classList.contains('btn--pause') ? playBtn.classList.remove('btn--pause') : playBtn.classList.add('btn--pause');
  };

  playBtn.addEventListener('click', togglePlay);

  // --------------
  // Play with keyboard
  // --------------

  window.addEventListener('keydown', function (e) {
    var pressEnter = e.which == 13 || e.keyCode == 13;
    if (pressEnter) togglePlay();
  });
};

exports.default = playControlInit;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resetControlInit = function resetControlInit() {

  var reset = document.getElementById('resetBtn');

  reset.addEventListener('click', function () {
    location.reload();
  });
};

exports.default = resetControlInit;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToBottom = __webpack_require__(3);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToLeft = __webpack_require__(15);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToRight = __webpack_require__(16);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getComputedStyleLine = __webpack_require__(1);

var _getComputedStyleLine2 = _interopRequireDefault(_getComputedStyleLine);

var _moveToBottom = __webpack_require__(3);

var _moveToBottom2 = _interopRequireDefault(_moveToBottom);

var _getSquarePosition = __webpack_require__(2);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var appendPart = function appendPart(part, parent) {
  parent.appendChild(part.left);
  parent.appendChild(part.top);
  parent.appendChild(part.bottom);
  parent.appendChild(part.right);
};

exports.default = appendPart;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tPart = __webpack_require__(22);

var _tPart2 = _interopRequireDefault(_tPart);

var _iPart = __webpack_require__(17);

var _iPart2 = _interopRequireDefault(_iPart);

var _jPart = __webpack_require__(18);

var _jPart2 = _interopRequireDefault(_jPart);

var _lPart = __webpack_require__(19);

var _lPart2 = _interopRequireDefault(_lPart);

var _oPart = __webpack_require__(20);

var _oPart2 = _interopRequireDefault(_oPart);

var _sPart = __webpack_require__(21);

var _sPart2 = _interopRequireDefault(_sPart);

var _zPart = __webpack_require__(23);

var _zPart2 = _interopRequireDefault(_zPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newRandomPart = function newRandomPart() {

  var allPossibleParts = [_tPart2.default, _iPart2.default, _jPart2.default, _lPart2.default, _oPart2.default, _sPart2.default, _zPart2.default];

  var randomIndex = Math.floor(Math.random() * 7);

  return allPossibleParts[randomIndex]();
};

exports.default = newRandomPart;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSquarePosition = __webpack_require__(2);

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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newSquare = __webpack_require__(0);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _newRandomPart = __webpack_require__(13);

var _newRandomPart2 = _interopRequireDefault(_newRandomPart);

var _appendPart = __webpack_require__(12);

var _appendPart2 = _interopRequireDefault(_appendPart);

var _registerAllSquareEndPositions = __webpack_require__(14);

var _registerAllSquareEndPositions2 = _interopRequireDefault(_registerAllSquareEndPositions);

var _movePartToBottom = __webpack_require__(8);

var _movePartToBottom2 = _interopRequireDefault(_movePartToBottom);

var _movePartToRight = __webpack_require__(10);

var _movePartToRight2 = _interopRequireDefault(_movePartToRight);

var _movePartToLeft = __webpack_require__(9);

var _movePartToLeft2 = _interopRequireDefault(_movePartToLeft);

var _collisionsWithStoppedSquaresBelow = __webpack_require__(5);

var _collisionsWithStoppedSquaresBelow2 = _interopRequireDefault(_collisionsWithStoppedSquaresBelow);

var _collisionWithCavasBottom = __webpack_require__(4);

var _collisionWithCavasBottom2 = _interopRequireDefault(_collisionWithCavasBottom);

var _scorePoints = __webpack_require__(11);

var _scorePoints2 = _interopRequireDefault(_scorePoints);

var _play = __webpack_require__(6);

var _play2 = _interopRequireDefault(_play);

var _reset = __webpack_require__(7);

var _reset2 = _interopRequireDefault(_reset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ---------------------------------------
// DOM elements
// ---------------------------------------

var canvas = document.getElementById('canvas');

// ---------------------------------------
// States
// ---------------------------------------

var states = {
  allSquareEndPosition: [],
  play: false,
  movementSpeed: 300

  // ---------------------------------------
  // Start game
  // ---------------------------------------

};var tetrisInit = function tetrisInit() {

  // ---------------------------------------
  // Add new random part
  // ---------------------------------------

  var part = (0, _newRandomPart2.default)();

  (0, _appendPart2.default)(part, canvas);

  // ---------------------------------------
  // Left and Right keyboard handlers
  // ---------------------------------------

  var leftRightControl = function leftRightControl(e) {

    var pressRight = e.which == 39 || e.keyCode == 39;
    var pressLeft = e.which == 37 || e.keyCode == 37;

    if (pressRight) (0, _movePartToRight2.default)(part);
    if (pressLeft) (0, _movePartToLeft2.default)(part);
  };

  window.addEventListener('keydown', leftRightControl);

  // ---------------------------------------
  // Start movement
  // ---------------------------------------

  var down = setInterval(function () {

    if (states.play) {

      // ---------------------------------------
      // Tent down collisions
      // ---------------------------------------

      var noCollidedWithAnotherSquareBelow = (0, _collisionsWithStoppedSquaresBelow2.default)(part, states.allSquareEndPosition);

      var noReachedTheBottom = (0, _collisionWithCavasBottom2.default)(part.bottom);

      // ---------------------------------------
      // Game engine
      // ---------------------------------------

      var noCollisions = noReachedTheBottom && noCollidedWithAnotherSquareBelow;

      if (noCollisions) {

        // ---------------------------------------
        // Keep Down
        // ---------------------------------------

        (0, _movePartToBottom2.default)(part);
      } else {

        // ---------------------------------------
        // After collision lifecycle
        // ---------------------------------------

        // Remove this part controls
        window.removeEventListener('keydown', leftRightControl);

        // Finish this round
        clearInterval(down);

        // Save the end position of all squares
        (0, _registerAllSquareEndPositions2.default)(part, states.allSquareEndPosition);

        // Score and points
        (0, _scorePoints2.default)(states.allSquareEndPosition);

        // Start new round
        tetrisInit();
      } // End collisions validation
    } // End Play validation
  }, states.movementSpeed); // End down()
}; // End tetrisInit()

// ---------------------------------------
// Controls
// ---------------------------------------

(0, _play2.default)(states, tetrisInit);
(0, _reset2.default)();

/***/ })
/******/ ]);