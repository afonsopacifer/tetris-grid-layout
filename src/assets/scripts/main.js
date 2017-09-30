// ---------------------------------------
// Import all parts profiles
// ---------------------------------------

import tPart from './parts/tPart';
import iPart from './parts/iPart';
import jPart from './parts/jPart';
import lPart from './parts/lPart';
import oPart from './parts/oPart';
import sPart from './parts/sPart';
import zPart from './parts/zPart';

// ---------------------------------------
// Import all helpers
// ---------------------------------------

import movePartToBottom from './movements/parts/movePartToBottom';
import movePartToRight from './movements/parts/movePartToRight';
import movePartToLeft from './movements/parts/movePartToLeft';
import getSquarePosition from './utils/squares/getSquarePosition';
import registerAllSquareEndPositions from './utils/parts/registerAllSquareEndPositions';
import getComputedStyleLine from './utils/squares/getComputedStyleLine';
import scorePoints from './scorePoints';

// ---------------------------------------
// Get elements
// ---------------------------------------

const canvas = document.getElementById('canvas');
const right = document.getElementById('rightBtn');
const left = document.getElementById('leftBtn');
const play = document.getElementById('playBtn');
const reset = document.getElementById('resetBtn');

// ---------------------------------------
// List possible parts
// ---------------------------------------

const possibleParts = [
  tPart,
  iPart,
  jPart,
  lPart,
  oPart,
  sPart,
  zPart
];

// ---------------------------------------
// State of all stopped square
// ---------------------------------------

let allSquareEndPosition = [];

// ---------------------------------------
// The tetris game
// ---------------------------------------



let playState;


const tetrisInit = () => {

  // ---------------------------------------
  // Create new random part
  // ---------------------------------------

  const randomIndex = Math.floor(Math.random() * 7);

  const part = possibleParts[randomIndex]()

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

  const handlerToRight = () => movePartToRight(part);
  const handlerToLeft = () => movePartToLeft(part);

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  // --------------
  // Keyboard handlers
  // --------------

  const keyboardHandlers = (e) => {
    const pressRight = e.which == 39 || e.keyCode == 39;
    const pressLeft = e.which == 37 || e.keyCode == 37;

    if (pressRight) handlerToRight();
    if (pressLeft) handlerToLeft();
  }

  window.addEventListener('keydown', keyboardHandlers);

  // ---------------------------------------
  // Start game
  // ---------------------------------------

  const down = setInterval(() => {

    if(playState) {
      // ---------------------------------------
      // Check collision with all stopped square
      // todo: Refactor and implement left & right collisions
      // ---------------------------------------

      let noCollidedWithAnotherSquare = true;

      // --------------
      // Get all part square positions for test
      // --------------

      const bottomPartCurrentRowEnd = getComputedStyleLine(part.bottom, 'gridRowEnd');
      const bottomPartCurrentColumnStart = getComputedStyleLine(part.bottom, 'gridColumnStart');

      const leftPartCurrentRowEnd = getComputedStyleLine(part.left, 'gridRowEnd');
      const leftPartCurrentColumnStart = getComputedStyleLine(part.left, 'gridColumnStart');

      const rightPartCurrentRowEnd = getComputedStyleLine(part.right, 'gridRowEnd');
      const rightPartCurrentColumnStart = getComputedStyleLine(part.right, 'gridColumnStart');

      const topPartCurrentRowEnd = getComputedStyleLine(part.top, 'gridRowEnd');
      const topPartCurrentColumnStart = getComputedStyleLine(part.top, 'gridColumnStart');

      // --------------
      // Test collision with all stopped square
      // --------------

      allSquareEndPosition.forEach((stoppedSquare) => {

        // --------------
        // Test bottom square
        // --------------

        const bottomSquareCollided = bottomPartCurrentRowEnd == stoppedSquare.rowStart && bottomPartCurrentColumnStart == stoppedSquare.columnStart;

        if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

        // --------------
        // Test left square
        // --------------

        const leftSquareCollided = leftPartCurrentRowEnd == stoppedSquare.rowStart && leftPartCurrentColumnStart == stoppedSquare.columnStart;

        if (leftSquareCollided) noCollidedWithAnotherSquare = false;

        // --------------
        // Test right square
        // --------------

        const rightSquareCollided = rightPartCurrentRowEnd == stoppedSquare.rowStart && rightPartCurrentColumnStart == stoppedSquare.columnStart;

        if (rightSquareCollided) noCollidedWithAnotherSquare = false;

        // --------------
        // Test top square
        // --------------

        const topSquareCollided = topPartCurrentRowEnd == stoppedSquare.rowStart && topPartCurrentColumnStart == stoppedSquare.columnStart;

        if (topSquareCollided) noCollidedWithAnotherSquare = false;

      })

      // ---------------------------------------
      // Check collision with game bottom
      // ---------------------------------------

      const currentRowEnd = getComputedStyleLine(part.bottom, 'gridRowEnd');
      const noReachedTheBottom = currentRowEnd < 21;

      // ---------------------------------------
      // Game engine
      // ---------------------------------------

      const shouldKeepDown = noReachedTheBottom && noCollidedWithAnotherSquare;

      if (shouldKeepDown) {

        // --------------
        // Continues with the round
        // --------------

        movePartToBottom(part);

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

        registerAllSquareEndPositions(part, allSquareEndPosition)

        // --------------
        // Control score moment
        // --------------

        scorePoints(allSquareEndPosition);

        // --------------
        // Start new round
        // --------------

        tetrisInit();

      }
    }
  }, 300); // Round time
}

// ---------------------------------------
// Basic controls
// ---------------------------------------

// --------------
// Play with btn
// --------------

let firstPlay;

const togglePlay = () => {

  playState
  ? playState = false
  : playState = true

  if(!firstPlay) {
    tetrisInit();
    firstPlay = true;
  }

  play.classList.contains('btn--pause')
  ? play.classList.remove('btn--pause')
  : play.classList.add('btn--pause')

}

play.addEventListener('click', togglePlay);

// --------------
// Play with keyboard
// --------------

window.addEventListener('keydown', (e) => {
  const pressEnter = e.which == 13 || e.keyCode == 13;
  if (pressEnter) togglePlay();
});

// --------------
// Reset
// --------------

reset.addEventListener('click', () => {
  location.reload();
});
