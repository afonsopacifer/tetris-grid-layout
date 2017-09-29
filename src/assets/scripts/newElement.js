const newElement = () => {

  const element = document.createElement('div');

  element.style.gridRowStart = 1;
  element.style.gridRowEnd = 1;
  element.style.gridColumnStart = 1;
  element.style.gridColumnEnd = 1;

  element.classList.add('red');

  return element
}

export default newElement;
