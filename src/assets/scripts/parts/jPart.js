import newSquare from './../utils/squares/newSquare';

const jPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  const square2 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  const square3 = newSquare({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'j');

  const square4 = newSquare({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'j');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default jPart;
