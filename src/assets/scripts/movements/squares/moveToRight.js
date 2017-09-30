const moveToRight = (element) => {

  // const leftSquare = part.left;
  // const topSquare = part.top;
  // const rightSquare = part.right;
  // const bottomSquare = part.bottom;

  const currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  const currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  // if (currentColumnStart < 10) {
    element.style.gridColumnStart = currentColumnStart + 1;
    element.style.gridColumnEnd = currentColumnEnd + 1;
  // }

}

export default moveToRight;
