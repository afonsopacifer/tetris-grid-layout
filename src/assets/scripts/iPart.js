import newSquare   from './newSquare';

const iPart = () => {

  const square1 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 4,
    gridColumnEnd: 5
  }, 'i');

  const square2 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'i');

  const square3 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'i');

  const square4 = newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 'i');

  return {
    left: square1,
    top: square2,
    bottom: square3,
    right: square4
  }

};

export default iPart;
