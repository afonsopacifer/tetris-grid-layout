const newSquare = (obj, colorClass) => {

  const squareElement = document.createElement('div');

  squareElement.style.gridRowStart = obj.gridRowStart;
  squareElement.style.gridRowEnd = obj.gridRowEnd;
  squareElement.style.gridColumnStart = obj.gridColumnStart;
  squareElement.style.gridColumnEnd = obj.gridColumnEnd;

  squareElement.classList.add('part');
  squareElement.classList.add(colorClass);

  return squareElement
}

export default newSquare;
