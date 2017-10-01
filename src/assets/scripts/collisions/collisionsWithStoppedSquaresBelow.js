import getSquarePosition from './../utils/squares/getSquarePosition'

const collisionsWithStoppedSquaresBelow = (part, allSquareEndPosition) => {

    // ---------------------------------------
    // State of collision with all stopped square on down
    // ---------------------------------------

    let noCollidedWithAnotherSquare = true;

    // --------------
    // Get all part square current positions for test
    // --------------

    const bottomSquare = getSquarePosition(part.bottom);
    const leftSquare = getSquarePosition(part.left);
    const rightSquare = getSquarePosition(part.right);
    const topSquare = getSquarePosition(part.top);

    // --------------
    // Test all squares in movement with all stopped square
    // --------------

    allSquareEndPosition.forEach((stoppedSquare) => {

      const bottomSquareCollided = bottomSquare.rowEnd == stoppedSquare.rowStart && bottomSquare.columnStart == stoppedSquare.columnStart;

      if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

      const leftSquareCollided = leftSquare.rowEnd == stoppedSquare.rowStart && leftSquare.columnStart == stoppedSquare.columnStart;

      if (leftSquareCollided) noCollidedWithAnotherSquare = false;

      const rightSquareCollided = rightSquare.rowEnd == stoppedSquare.rowStart && rightSquare.columnStart == stoppedSquare.columnStart;

      if (rightSquareCollided) noCollidedWithAnotherSquare = false;

      const topSquareCollided = topSquare.rowEnd == stoppedSquare.rowStart && topSquare.columnStart == stoppedSquare.columnStart;

      if (topSquareCollided) noCollidedWithAnotherSquare = false;

    })

    return noCollidedWithAnotherSquare;

}

export default collisionsWithStoppedSquaresBelow;
