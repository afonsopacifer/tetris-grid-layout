import getComputedStyleLine from '../utils/squares/getComputedStyleLine';

const collisionWithCavasBottom = (square) => {

  const currentRowEnd = getComputedStyleLine(square, 'gridRowEnd');

  return currentRowEnd < 21;

}

export default collisionWithCavasBottom;
