import moveToRight from './moveToRight';
import moveToLeft from './moveToLeft';
import moveToBottom from './moveToBottom';

const square = document.getElementById('square');

const right = document.getElementById('right');
const left = document.getElementById('left');
const bottom = document.getElementById('bottom');

right.addEventListener('click', () => moveToRight(square));
left.addEventListener('click', () => moveToLeft(square));
bottom.addEventListener('click', () => moveToBottom(square));

// const square1 = document.getElementById('square1');
//
// const right = document.getElementById('right');
// const left = document.getElementById('left');
// const bottom = document.getElementById('bottom');
//
// let allPos = [];
//
// const addPostion = (element) => {
//   const cStart = parseInt(window.getComputedStyle(element).gridColumnStart);
//   const cEnd = parseInt(window.getComputedStyle(element).gridColumnEnd);
//   const rStart = parseInt(window.getComputedStyle(element).gridRowStart);
//   const rEnd = parseInt(window.getComputedStyle(element).gridRowEnd);
//
//   allPos.push([cStart, cEnd, rStart, rEnd]);
// }
//
// // addPostion(square1);
//
//
//
// right.addEventListener('click', () => {
//
//   const x = estaOcupado(
//     parseInt(window.getComputedStyle(square).gridColumnStart) + 1,
//     parseInt(window.getComputedStyle(square).gridColumnEnd) + 1,
//     parseInt(window.getComputedStyle(square).gridRowStart),
//     parseInt(window.getComputedStyle(square).gridRowEnd)
//   );
//
//   if(x) {
//     moveToLeft(square)
//   }
//
// })
//
// const estaOcupado = (cStart, cEnd, rStart, rEnd) => {
//  if(allPos[0][0] == cStart && allPos[0][1] == cEnd && allPos[0][2] == rStart && allPo[0][3] == rEnd) {
//   return false;
//  } else {
//   return true;
//  }
// }
//
// const moveToLeft = (element) => {
//   element.style.gridColumnStart = parseInt(window.getComputedStyle(element).gridColumnStart) + 1;
//   element.style.gridColumnEnd = parseInt(window.getComputedStyle(element).gridColumnEnd) + 1;
// }
//
//
// const moveToBottom = (element) => {
//   element.style.gridColumnStart = parseInt(window.getComputedStyle(element).gridRowStart) - 1;
//   element.style.gridColumnEnd = parseInt(window.getComputedStyle(element).gridRowEnd) - 1;
// }
//
// left.addEventListener('click', () => moveToLeft(square))
// bottom.addEventListener('click', () => moveToBottom(square))
