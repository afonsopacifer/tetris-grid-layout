import newSquare from './../utils/squares/newSquare';

const tPart = () => {

  return {

    type: 't',

    left: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 5,
      gridColumnEnd: 6
    }, 't'),

    top: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 't'),

    bottom: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 't'),

    right: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 7,
      gridColumnEnd: 8
    }, 't')

  }

};

export default tPart;
