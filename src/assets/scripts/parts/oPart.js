import newSquare from './../utils/squares/newSquare';

const oPart = () => {

  return {

    type: 'o',

    top: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 5,
      gridColumnEnd: 6
    }, 'o'),

    right: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'o'),

    bottom: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'o'),

    left: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 5,
      gridColumnEnd: 6
    }, 'o')

  }

};

export default oPart;
