import moveToRight  from './moveToRight';
import moveToLeft   from './moveToLeft';
import moveToBottom from './moveToBottom';
import newElement   from './newElement';

const right  = document.getElementById('right');
const left   = document.getElementById('left');

const tetrisInit = () => {

  const canvas = document.getElementById('canvas');
  const element = newElement();

  canvas.appendChild(element);

  const handlerToRight = () => moveToRight(element);
  const handlerToLeft = () => moveToLeft(element);

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  const down = setInterval(() => {

    const currentRowStart = parseInt(window.getComputedStyle(element).gridRowStart);
    const shouldMoveToBottom = currentRowStart < 20;

    if (shouldMoveToBottom) {

      moveToBottom(element);

    } else {

      // Clear this element
      right.removeEventListener('click', handlerToRight);
      left.removeEventListener('click', handlerToLeft);
      clearInterval(down);

      // Recursion ;)
      tetrisInit();

    }

  }, 1000);

}

tetrisInit();
