import tPart from './tPart';
import movePartToBottom from './movePartToBottom';
import movePartToRight from './movePartToRight';
import movePartToLeft from './movePartToLeft';

const canvas = document.getElementById('canvas');
const right = document.getElementById('right');
const left = document.getElementById('left');

const tetrisInit = () => {

  const part = tPart();

  canvas.appendChild(part.left);
  canvas.appendChild(part.top);
  canvas.appendChild(part.bottom);
  canvas.appendChild(part.right);

  const handlerToRight = () => movePartToRight(part);
  const handlerToLeft = () => movePartToLeft(part);

  right.addEventListener('click', handlerToRight);
  left.addEventListener('click', handlerToLeft);

  const down = setInterval(() => {

    const currentRowStart = parseInt(window.getComputedStyle(part.bottom).gridRowStart);
    const shouldMoveToBottom = currentRowStart < 20;

    if (shouldMoveToBottom) {

      movePartToBottom(part);

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
