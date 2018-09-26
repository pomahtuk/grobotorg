import Globals from './globals';

const availableTexts = [
  'Ну все, поработали, пора и отдохнуть',
  'Жил, умер, да и не все ли нам равно?',
  'Тут покоится великий человек... <br/> А может и не тут.',
  'Свет в конце тоннеля говорили они! <br/> Жестко, темно и тесно.',
  'Казалось бы, что могло пойти не так? <br/> Вся жизнь.',
];

// start from random one
let clickCount = Math.floor(Math.random() * availableTexts.length);

const changeText = () => {
  // get next text
  const newText = availableTexts[clickCount % availableTexts.length];
  Globals.textElements.forEach((e) => {
    e.innerHTML = newText;
  });
  clickCount += 1;
};

Globals.textElements.forEach((element) => {
  element.addEventListener('click', changeText);
});

// do initial rotation
changeText();

export default changeText;
