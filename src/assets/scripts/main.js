import tPart from './tPart';
import movePartToBottom from './movePartToBottom';
import movePartToRight from './movePartToRight';
import movePartToLeft from './movePartToLeft';
import getSquarePosition from './getSquarePosition'

// ---------------------------------------
// Get elements
// ---------------------------------------

const canvas = document.getElementById('canvas');
const right = document.getElementById('right');
const left = document.getElementById('left');


// ---------------------------------------
// State of all stoped square
// ---------------------------------------

let allSquareEndPosition = [];

// ---------------------------------------
// Register the position of all stoped square
// ---------------------------------------

const registerEndPosition = (part) => {

  const leftSquareEndPosition = getSquarePosition(part.left)
  const topSquareEndPosition = getSquarePosition(part.top)
  const bottomSquareEndPosition = getSquarePosition(part.bottom)
  const rightSquareEndPosition = getSquarePosition(part.right)

  allSquareEndPosition.push(leftSquareEndPosition);
  allSquareEndPosition.push(topSquareEndPosition);
  allSquareEndPosition.push(bottomSquareEndPosition);
  allSquareEndPosition.push(rightSquareEndPosition);
}

// ---------------------------------------
// The tetris game
// ---------------------------------------

const tetrisInit = () => {

  // ---------------------------------------
  // Create new game element
  // ---------------------------------------

  const part = tPart();

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
  // Start the game
  // ---------------------------------------

  const down = setInterval(() => {


    // Check collision with stoped square
    // -----------------------

    let collidedWithAnotherSquare = true;

    const bottomPartCurrentRowEnd = parseInt(window.getComputedStyle(part.bottom).gridRowEnd);
    const bottomPartcurrentColumnStart = parseInt(window.getComputedStyle(part.bottom).gridColumnStart);

    const leftPartCurrentRowEnd = parseInt(window.getComputedStyle(part.left).gridRowEnd);
    const leftPartcurrentColumnStart = parseInt(window.getComputedStyle(part.left).gridColumnStart);

    const rightPartCurrentRowEnd = parseInt(window.getComputedStyle(part.right).gridRowEnd);
    const rightPartcurrentColumnStart = parseInt(window.getComputedStyle(part.right).gridColumnStart);

    const topPartCurrentRowEnd = parseInt(window.getComputedStyle(part.top).gridRowEnd);
    const topPartcurrentColumnStart = parseInt(window.getComputedStyle(part.top).gridColumnStart);

    allSquareEndPosition.forEach((stopedSquare) => {

      const x = bottomPartCurrentRowEnd == stopedSquare.rowStart;
      const y = bottomPartcurrentColumnStart == stopedSquare.columnStart;

      if (x && y) {
        collidedWithAnotherSquare = false;
      }

      const a = leftPartCurrentRowEnd == stopedSquare.rowStart;
      const b = leftPartcurrentColumnStart == stopedSquare.columnStart;

      if (a && b) {
        collidedWithAnotherSquare = false;
      }

      const m = rightPartCurrentRowEnd == stopedSquare.rowStart;
      const n = rightPartcurrentColumnStart == stopedSquare.columnStart;

      if (m && n) {
        collidedWithAnotherSquare = false;
      }

      const k = topPartCurrentRowEnd == stopedSquare.rowStart;
      const l = topPartcurrentColumnStart == stopedSquare.columnStart;

      if (k && l) {
        collidedWithAnotherSquare = false;
      }

    })

    // Check collision with game bottom
    // -----------------------
    const bottomSquare = part.bottom;
    const currentRowEnd = parseInt(window.getComputedStyle(bottomSquare).gridRowEnd);
    const reachedTheBottom = currentRowEnd < 21;

    // Game engine
    // -----------------------
    if (reachedTheBottom && collidedWithAnotherSquare) {

      movePartToBottom(part);

    } else {
      // Clear this element
      right.removeEventListener('click', handlerToRight);
      left.removeEventListener('click', handlerToLeft);
      clearInterval(down);

      registerEndPosition(part)

      // Recursion ;)
      tetrisInit();
    }

  }, 300);

}

tetrisInit();
