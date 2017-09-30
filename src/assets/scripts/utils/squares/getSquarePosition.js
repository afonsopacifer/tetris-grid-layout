const getSquarePosition = (square) => {

  const columnStartValue = parseInt(window.getComputedStyle(square).gridColumnStart);
  const rowStartValue = parseInt(window.getComputedStyle(square).gridRowStart);

  return {
    columnStart: columnStartValue,
    rowStart: rowStartValue
  };

}

export default getSquarePosition;
