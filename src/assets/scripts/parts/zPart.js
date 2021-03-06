import newSquare from './../utils/squares/newSquare';

const zPart = () => {

  return {

    type: 'z',

    left: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 5,
      gridColumnEnd: 6
    }, 'z'),

    top: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'z'),

    bottom: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'z'),

    right: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 7,
      gridColumnEnd: 8
    }, 'z')

  }

};

export default zPart;
