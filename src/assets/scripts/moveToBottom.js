const moveToBottom = (element) => {
  const currentRowStart = parseInt(window.getComputedStyle(element).gridRowStart);
  const currentRowEnd = parseInt(window.getComputedStyle(element).gridRowEnd);

  element.style.gridRowStart = currentRowStart + 1;
  element.style.gridRowEnd = currentRowEnd + 1;
}

export default moveToBottom;
