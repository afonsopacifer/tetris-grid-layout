import newSquare from './../utils/squares/newSquare';

const jPart = () => {

  return {

    type: 'j',

    top: newSquare({
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'j'),

    right: newSquare({
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'j'),

    bottom: newSquare({
      gridRowStart: 3,
      gridRowEnd: 4,
      gridColumnStart: 6,
      gridColumnEnd: 7
    }, 'j'),

    left: newSquare({
      gridRowStart: 3,
      gridRowEnd: 4,
      gridColumnStart: 5,
      gridColumnEnd: 6
    }, 'j')

  }

};

export default jPart;
