import tPart from './../../parts/tPart';
import iPart from './../../parts/iPart';
import jPart from './../../parts/jPart';
import lPart from './../../parts/lPart';
import oPart from './../../parts/oPart';
import sPart from './../../parts/sPart';
import zPart from './../../parts/zPart';

const newRandomPart = () => {

const allPossibleParts = [
  tPart,
  iPart,
  jPart,
  lPart,
  oPart,
  sPart,
  zPart
];

  const randomIndex = Math.floor(Math.random() * 7);

  return allPossibleParts[randomIndex];
}

export default newRandomPart;
