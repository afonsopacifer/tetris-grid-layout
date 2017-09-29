import newSquare from './newSquare';

const sPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 's');

  const square2 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 's');

  const square3 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 's');

  const square4 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 's');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default sPart;
