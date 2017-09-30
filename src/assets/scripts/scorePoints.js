import getComputedStyleLine from './getComputedStyleLine';
import moveToBottom from './moveToBottom';
import getSquarePosition from './getSquarePosition';

const scorePoints = squareList => {

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

    }

  }

}

export default scorePoints;
