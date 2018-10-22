import optimizedResize from '../utils/optimizedresize';
import Globals from '../globals';

const memorialSizes = {
  simple: {
    width: 598,
    height: 916,
  },
};

const handleResize = () => {
  const { simple: sizes } = memorialSizes;

  const { innerWidth, innerHeight } = window;

  let resultingWidth = sizes.width;
  let resultingHeight = sizes.height;
  const aspectRatio = resultingHeight / resultingWidth;

  // check if we need to adjust width and add 5% padding from each side
  if (innerWidth < Math.ceil(resultingWidth * 1.1)) {
    resultingWidth = Math.ceil(innerWidth / 1.1);
    resultingHeight = Math.ceil(resultingWidth * aspectRatio);
  }

  // then if height is still too big - adjust it
  // add 10% top padding
  if (innerHeight < Math.ceil(resultingHeight * 1.1)) {
    resultingHeight = Math.ceil(innerHeight / 1.1);
    resultingWidth = Math.ceil(resultingHeight / aspectRatio);
  }

  // Now we know real sizes. Lets resize element
  Globals.simpleMemorialElement.style.width = `${resultingWidth}px`;
  Globals.simpleMemorialElement.style.height = `${resultingHeight}px`;

  // Calculate and set font size for text
  Globals.simpleMemorialText.style.fontSize = `${Math.ceil(resultingWidth * 0.04)}px`;
  Globals.simpleMemorialText.style.lineHeight = `${Math.ceil(resultingWidth * 0.07)}px`;

  Globals.shareButtonElement.style.fontSize = `${Math.ceil(resultingWidth * 0.04)}px`;
  Globals.shareButtonElement.style.lineHeight = `${Math.ceil(resultingWidth * 0.07)}px`;
};

// add event listener
optimizedResize.addCallback(handleResize);
// do initial draw
handleResize();
