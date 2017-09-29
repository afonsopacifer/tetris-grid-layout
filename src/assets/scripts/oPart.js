import newSquare from './newSquare';

const oPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'o');

  const square2 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'o');

  const square3 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'o');

  const square4 = newSquare({
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'o');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default oPart;
