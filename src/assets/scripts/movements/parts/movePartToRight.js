import moveToRight  from './../squares/moveToRight';
import collisionsWithStoppedSquaresRight from './../../collisions/collisionsWithStoppedSquaresRight';

const movePartToRight = (part, allSquareEndPosition) => {

  const currentColumnStart = parseInt(window.getComputedStyle(part.right).gridColumnStart);

  const collisionWithRightSide = currentColumnStart < 10;

  if (collisionWithRightSide) {

    if (collisionsWithStoppedSquaresRight(part, allSquareEndPosition)) {
      moveToRight(part.left);
      moveToRight(part.top);
      moveToRight(part.bottom);
      moveToRight(part.right);
    }

  }

}

export default movePartToRight;
