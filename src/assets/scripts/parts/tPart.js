import newSquare from './../utils/squares/newSquare';
const tPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 't');

  const square2 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 't');

  const square3 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 't');

  const square4 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 't');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default tPart;
