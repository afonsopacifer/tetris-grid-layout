import getSquarePosition from './getSquarePosition';

const registerAllSquareEndPositions = (part, squarePositionsList) => {

  const leftSquareEndPosition = getSquarePosition(part.left);
  const topSquareEndPosition = getSquarePosition(part.top);
  const bottomSquareEndPosition = getSquarePosition(part.bottom);
  const rightSquareEndPosition = getSquarePosition(part.right);

  squarePositionsList.push(leftSquareEndPosition);
  squarePositionsList.push(topSquareEndPosition);
  squarePositionsList.push(bottomSquareEndPosition);
  squarePositionsList.push(rightSquareEndPosition);
}

export default registerAllSquareEndPositions;
