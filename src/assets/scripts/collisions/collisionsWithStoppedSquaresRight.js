import getSquarePosition from './../utils/squares/getSquarePosition'

const collisionsWithStoppedSquaresRight = (part, allSquareEndPosition) => {

    // ---------------------------------------
    // State of collision with all stopped square on right

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

      const bottomSquareCollided = bottomSquare.columnEnd == stoppedSquare.columnStart && bottomSquare.rowEnd == stoppedSquare.rowEnd;

      if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

      const leftSquareCollided = leftSquare.columnEnd == stoppedSquare.columnStart && leftSquare.rowEnd == stoppedSquare.rowEnd;

      if (leftSquareCollided) noCollidedWithAnotherSquare = false;

      const rightSquareCollided = rightSquare.columnEnd == stoppedSquare.columnStart && rightSquare.rowEnd == stoppedSquare.rowEnd;

      if (rightSquareCollided) noCollidedWithAnotherSquare = false;

      const topSquareCollided = topSquare.columnEnd == stoppedSquare.columnStart && topSquare.rowEnd == stoppedSquare.rowEnd;

      if (topSquareCollided) noCollidedWithAnotherSquare = false;

    })

    return noCollidedWithAnotherSquare;

}

export default collisionsWithStoppedSquaresRight;
