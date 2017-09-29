import newSquare from './newSquare';

const lPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  const square2 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  const square3 = newSquare({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'l');

  const square4 = newSquare({
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'l');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default lPart;
