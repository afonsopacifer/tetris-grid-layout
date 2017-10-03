import getSquarePosition from './../utils/squares/getSquarePosition'

const collisionsWithStoppedSquaresLeft = (part, allSquareEndPosition) => {

    // ---------------------------------------
    // State of collision with all stopped square on left
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

      const bottomSquareCollided = bottomSquare.columnStart == stoppedSquare.columnEnd && bottomSquare.rowEnd == stoppedSquare.rowEnd;

      if (bottomSquareCollided) noCollidedWithAnotherSquare = false;

      const leftSquareCollided = leftSquare.columnStart == stoppedSquare.columnEnd && leftSquare.rowEnd == stoppedSquare.rowEnd;

      if (leftSquareCollided) noCollidedWithAnotherSquare = false;

      const rightSquareCollided = rightSquare.columnStart == stoppedSquare.columnEnd && rightSquare.rowEnd == stoppedSquare.rowEnd;

      if (rightSquareCollided) noCollidedWithAnotherSquare = false;

      const topSquareCollided = topSquare.columnStart == stoppedSquare.columnEnd && topSquare.rowEnd == stoppedSquare.rowEnd;

      if (topSquareCollided) noCollidedWithAnotherSquare = false;

    })

    return noCollidedWithAnotherSquare;

}

export default collisionsWithStoppedSquaresLeft;
