import moveToLeft  from './moveToLeft';

const movePartToLeft = (part) => {


  const currentColumnStart = parseInt(window.getComputedStyle(part.left).gridColumnStart);



  if (currentColumnStart >= 2) {

    moveToLeft(part.left);
    moveToLeft(part.top);
    moveToLeft(part.bottom);
    moveToLeft(part.right);

  }

}

export default movePartToLeft;
