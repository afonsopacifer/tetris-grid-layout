import moveToRight  from './../squares/moveToRight';

const movePartToRight = (part) => {


  const currentColumnStart = parseInt(window.getComputedStyle(part.right).gridColumnStart);


  if (currentColumnStart < 10) {

    moveToRight(part.left);
    moveToRight(part.top);
    moveToRight(part.bottom);
    moveToRight(part.right);

  }

}

export default movePartToRight;
