// NOTE: this function mutating input
const convertToGrayscale = (imageData) => {
  const { data } = imageData;
  // converting to grayscale
  for (let i = 0; i < data.length; i += 4) {
    const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    // red
    data[i] = brightness;
    // green
    data[i + 1] = brightness;
    // blue
    data[i + 2] = brightness;
  }
  return data;
};

export default convertToGrayscale;
