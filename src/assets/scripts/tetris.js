import newRandomPart from './utils/parts/newRandomPart';
import appendPart from './utils/parts/appendPart';
import registerAllSquareEndPositions from './utils/parts/registerAllSquareEndPositions';
import movePartToBottom from './movements/parts/movePartToBottom';
import movePartToRight from './movements/parts/movePartToRight';
import movePartToLeft from './movements/parts/movePartToLeft';
import collisionsWithStoppedSquaresBelow from './collisions/collisionsWithStoppedSquaresBelow';
import collisionWithCavasBottom from './collisions/collisionWithCavasBottom';
import scorePoints from './scorePoints';
import playControlInit from './controls/play';
import resetControlInit from './controls/reset';
import soundControlInit from  './controls/sound';

// ---------------------------------------
// DOM elements
// ---------------------------------------

const canvas = document.getElementById('canvas');

// ---------------------------------------
// States
// ---------------------------------------

const states = {
  allSquareEndPosition: [],
  play: false,
  movementSpeed: 300
}

// ---------------------------------------
// Controls
// ---------------------------------------

playControlInit(states, tetrisInit);
resetControlInit();
soundControlInit();

// ---------------------------------------
// Start game
// ---------------------------------------

function tetrisInit() {

  // ---------------------------------------
  // Add new random part
  // ---------------------------------------

  const part = newRandomPart();

  appendPart(part, canvas)

  // ---------------------------------------
  // Left and Right keyboard handlers
  // ---------------------------------------

  const leftRightControl = (e) => {

    const pressRight = e.which == 39 || e.keyCode == 39;
    const pressLeft = e.which == 37 || e.keyCode == 37;

    if (pressRight) movePartToRight(part);
    if (pressLeft) movePartToLeft(part);

  }

  window.addEventListener('keydown', leftRightControl);

  // ---------------------------------------
  // Start movement
  // ---------------------------------------

  const down = setInterval(() => {

    if(states.play) {

      // ---------------------------------------
      // Tent down collisions
      // ---------------------------------------

      const noCollidedWithAnotherSquareBelow = collisionsWithStoppedSquaresBelow(part, states.allSquareEndPosition);

      const noReachedTheBottom = collisionWithCavasBottom(part.bottom);

      // ---------------------------------------
      // Game engine
      // ---------------------------------------

      const noCollisions = noReachedTheBottom && noCollidedWithAnotherSquareBelow;

      if (noCollisions) {

        // ---------------------------------------
        // Keep Down
        // ---------------------------------------

        movePartToBottom(part);

      } else {

        // ---------------------------------------
        // After collision lifecycle
        // ---------------------------------------

        // Remove this part controls
        window.removeEventListener('keydown', leftRightControl);

        // Finish this round
        clearInterval(down);

        // Save the end position of all squares
        registerAllSquareEndPositions(part, states.allSquareEndPosition);

        // Score and points
        scorePoints(states.allSquareEndPosition);

        // Start new round
        tetrisInit();

      } // End collisions validation

    } // End Play validation

  }, states.movementSpeed); // End down()

} // End tetrisInit()
