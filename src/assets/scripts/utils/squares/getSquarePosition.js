import getComputedStyleLine from './getComputedStyleLine'

const getSquarePosition = (square) => {

  const columnStartValue = getComputedStyleLine(square, 'gridColumnStart');
  const columnEndValue = getComputedStyleLine(square, 'gridColumnEnd');
  const rowStartValue = getComputedStyleLine(square, 'gridRowStart');
  const rowEndValue = getComputedStyleLine(square, 'gridRowEnd');

  return {
    columnStart: columnStartValue,
    columnEnd: columnEndValue,
    rowStart: rowStartValue,
    rowEnd: rowEndValue,
  };

}

export default getSquarePosition;
