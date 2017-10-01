// ---------------------------------------
// Parts profiles
// ---------------------------------------

import allPossibleParts from './parts/allPossibleParts'

// ---------------------------------------
// Controls
// ---------------------------------------

import playControlInit from './controls/play'
import resetControlInit from './controls/reset'

// ---------------------------------------
// Movements
// ---------------------------------------

import movePartToBottom from './movements/parts/movePartToBottom';
import movePartToRight from './movements/parts/movePartToRight';
import movePartToLeft from './movements/parts/movePartToLeft';

// ---------------------------------------
// Utils
// ---------------------------------------

import registerAllSquareEndPositions from './utils/parts/registerAllSquareEndPositions';
import getComputedStyleLine from './utils/squares/getComputedStyleLine';

// ---------------------------------------
// Score
// ---------------------------------------

import scorePoints from './scorePoints';

// ---------------------------------------
// Canvas
// ---------------------------------------

const canvas = document.getElementById('canvas');

// ---------------------------------------
// States
// ---------------------------------------

const states = {
  allSquareEndPosition: [],
  play: false
}

// ---------------------------------------
// The tetris game
// ---------------------------------------

const tetrisInit = () => {

  // ---------------------------------------
  // Create new random part
  // ---------------------------------------

  const randomIndex = Math.floor(Math.random() * 7);

  const part = allPossibleParts[randomIndex]();

  canvas.appendChild(part.left);
  canvas.appendChild(part.top);
  canvas.appendChild(part.bottom);
  canvas.appendChild(part.right);

  // --------------
  // Keyboard handlers
  // --------------

  const keyboardHandlers = (e) => {

    const pressRight = e.which == 39 || e.keyCode == 39;
    const pressLeft = e.which == 37 || e.keyCode == 37;

    if (pressRight) movePartToRight(part);
    if (pressLeft) movePartToLeft(part);

  }

  window.addEventListener('keydown', keyboardHandlers);

  // ---------------------------------------
  // Start game
  // ---------------------------------------

  const down = setInterval(() => {

    if(states.play) {
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

      states.allSquareEndPosition.forEach((stoppedSquare) => {

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

        window.removeEventListener('keydown', keyboardHandlers);

        // --------------
        // Finish this round
        // --------------

        clearInterval(down);

        // --------------
        // Save position of all square
        // --------------

        registerAllSquareEndPositions(part, states.allSquareEndPosition)

        // --------------
        // Control score moment
        // --------------

        scorePoints(states.allSquareEndPosition);

        // --------------
        // Start new round
        // --------------

        tetrisInit();

      }
    }
  }, 300); // Round time
}

// ---------------------------------------
// Controls
// ---------------------------------------

playControlInit(states, tetrisInit);
resetControlInit();
