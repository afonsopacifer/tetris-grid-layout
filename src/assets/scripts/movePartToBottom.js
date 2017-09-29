import moveToBottom from './moveToBottom';

const movePartToBottom = (part) => {

  moveToBottom(part.left);
  moveToBottom(part.top);
  moveToBottom(part.bottom);
  moveToBottom(part.right);

}

export default movePartToBottom;
