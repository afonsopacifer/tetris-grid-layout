import getComputedStyleLine from './getComputedStyleLine';
import moveToBottom from './moveToBottom';
import getSquarePosition from './getSquarePosition';

const scorePoints = squareList => {

  // --------------
  // Get score elements
  // --------------

  const lines = document.getElementById('lines');
  const score = document.getElementById('score');

  // --------------
  // Iterating all lines
  // --------------

  for (var i = 1; i < 21; i++) {

    // --------------
    // Filter squares in some line
    // --------------

    const equalPartsList = squareList.filter(square => {
      return square.rowStart == i;
    });

    const isCompleteLine = equalPartsList.length == '10';

    if(isCompleteLine) {

      // --------------
      // Clean all square positions
      // --------------

      squareList.splice(0,squareList.length) // clean array

      // --------------
      // Iterating all real square nodes
      // --------------

      const equalPartsList = document.querySelectorAll('.part');

      equalPartsList.forEach(item => {

        // --------------
        // Remove all complete line
        // --------------

        const isMemberOfCompleteLine = getComputedStyleLine(item, 'gridRowStart') == i;

        if (isMemberOfCompleteLine) {
          item.remove()
        }

        // --------------
        // Move all squares from top to bottom
        // --------------

        const isTopOfCompleteLine = getComputedStyleLine(item, 'gridRowStart') < i;

        if (isTopOfCompleteLine ) {
          moveToBottom(item);
        }

        // --------------
        // Re register all square positions
        // --------------

        const SquareNewEndPosition = getSquarePosition(item);
        squareList.push(SquareNewEndPosition);

      });

      // --------------
      // Update score Lines
      // --------------

      lines.innerText =  parseInt(lines.innerText) + 1;

      // --------------
      // Update score Points
      // --------------

      score.innerText =  parseInt(score.innerText) + 100;

    }

  }

}

export default scorePoints;
