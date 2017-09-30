// ---------------------------------------
// Import all parts profiles
// ---------------------------------------

import tPart from './tPart';
import iPart from './iPart';
import jPart from './jPart';
import lPart from './lPart';
import oPart from './oPart';
import sPart from './sPart';
import zPart from './zPart';

// ---------------------------------------
// Import all helpers
// ---------------------------------------

import movePartToBottom from './movePartToBottom';
import movePartToRight from './movePartToRight';
import movePartToLeft from './movePartToLeft';
import getSquarePosition from './getSquarePosition';
import registerAllSquareEndPositions from './registerAllSquareEndPositions';
import getComputedStyleLine from './getComputedStyleLine';
import scorePoints from './scorePoints';

// ---------------------------------------
// Get elements
// ---------------------------------------

const canvas = document.getElementById('canvas');
const right = document.getElementById('right');
const left = document.getElementById('left');

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

  const handlerToRight = () => movePartToRight(part);
  const handlerToLeft = () => movePartToLeft(part);

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  // ---------------------------------------
  // Start game
  // ---------------------------------------

  const down = setInterval(() => {

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

  }, 300); // Round time

}

tetrisInit();
