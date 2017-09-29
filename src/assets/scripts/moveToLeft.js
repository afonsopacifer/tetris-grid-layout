const moveToLeft = (element) => {
  const currentColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart);
  const currentColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);

  element.style.gridColumnStart = currentColumnStart - 1;
  element.style.gridColumnEnd = currentColumnEnd - 1;
}

export default moveToLeft;
