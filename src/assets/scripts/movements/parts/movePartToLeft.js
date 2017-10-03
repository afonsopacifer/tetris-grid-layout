import moveToLeft  from './../squares/moveToLeft';
import collisionsWithStoppedSquaresLeft from './../../collisions/collisionsWithStoppedSquaresLeft';

const movePartToLeft = (part, allSquareEndPosition) => {

  const currentColumnStart = parseInt(window.getComputedStyle(part.left).gridColumnStart);

  const collisionWithLeftSide = currentColumnStart >= 2;

  if (collisionWithLeftSide) {

    if (collisionsWithStoppedSquaresLeft(part, allSquareEndPosition)) {
      moveToLeft(part.left);
      moveToLeft(part.top);
      moveToLeft(part.bottom);
      moveToLeft(part.right);
    }

  }

}

export default movePartToLeft;
