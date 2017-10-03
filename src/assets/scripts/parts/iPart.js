import newSquare from './../utils/squares/newSquare';

const iPart =  {

  type: 'i',

  left: newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 4,
    gridColumnEnd: 5
  }, 'i'),

  top: newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 5,
    gridColumnEnd: 6
  }, 'i'),

  bottom: newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 7
  }, 'i'),

  right:  newSquare({
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  }, 'i')

};

export default iPart;
