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

// ---------------------------------------
// Score
// ---------------------------------------

import scorePoints from './scorePoints';

// ---------------------------------------
// Collisions
// ---------------------------------------

import collisionsWithStoppedSquaresBelow from './collisions/collisionsWithStoppedSquaresBelow';

import collisionWithCavasBottom from './collisions/collisionWithCavasBottom';
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
      // Test collision of all squares in movement with all stopped squares
      // ---------------------------------------

      const noCollidedWithAnotherSquareBelow = collisionsWithStoppedSquaresBelow(part, states.allSquareEndPosition);

      // ---------------------------------------
      // Test collision with game bottom
      // ---------------------------------------

      const noReachedTheBottom = collisionWithCavasBottom(part.bottom);

      // ---------------------------------------
      // Game engine
      // ---------------------------------------

      const shouldKeepDown = noReachedTheBottom && noCollidedWithAnotherSquareBelow;

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
