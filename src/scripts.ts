import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

//================================ ON CLICK ACTIONS===============================

// Button 1 -----------------------------------------------------------------------
const newBackgroundColor = document.querySelector('.button1') as HTMLElement;
let isYellow = false;

function changeColor() {
  if (isYellow) {
    // If the background is yellow, change it back to its original color
    newBackgroundColor.style.backgroundColor = ''; // Set to '' to reset to CSS value
    isYellow = false;
  } else {
    // If the background is not yellow, change it to yellow
    newBackgroundColor.style.backgroundColor = 'yellow';
    isYellow = true;
  }
}

newBackgroundColor.addEventListener('click', changeColor);

// Button 2 -----------------------------------------------------------------------
const newTextSuccess = document.querySelector('.bt2__text') as HTMLElement;
let isSuccess = false;

function changeToSuccess() {
  if (isSuccess) {
    // If the text is success
    newTextSuccess.textContent = 'Button 2'; // Set to '' to reset to original text
    isSuccess = false;
  } else {
    // If the text is not 'success', change it to original text
    newTextSuccess.textContent = 'SUCCESS';
    isSuccess = true;
  }
}

newTextSuccess.addEventListener('click', changeToSuccess);

// Button 3 -----------------------------------------------------------------------
const invisibleButton = document.querySelector<HTMLButtonElement>('.button3');

function changeToInvisible() {
  invisibleButton.style.visibility = 'hidden';
  setTimeout(() => {
    invisibleButton.style.visibility = 'visible';
  }, 2000); // 2000 milliseconds = 2 seconds
}

invisibleButton.addEventListener('click', changeToInvisible);

// Button 4 -----------------------------------------------------------------------
const button4 = document.querySelector<HTMLButtonElement>('.button4');
const emptyContainer = document.querySelector<HTMLElement>('.empty_container');

let isInvisible = false;

const changeToInvisible2 = () => {
  if (isInvisible) {
    button4.style.visibility = 'visible';
    isInvisible = false;
  } else {
    button4.style.visibility = 'hidden';
    emptyContainer.style.display = 'block';
    isInvisible = true;
  }
};

button4.addEventListener('click', changeToInvisible2);
emptyContainer.addEventListener('click', changeToInvisible2);

// Button 5 -----------------------------------------------------------------------
const button5 = document.querySelector<HTMLButtonElement>('.button5');

const predifinedColors = ['red', 'black', 'aqua', 'brown', 'orange'];

const changeToFiveColors = () => {
  const randomIndex = Math.floor(Math.random() * predifinedColors.length)

  button5.style.backgroundColor = predifinedColors[randomIndex];
};

button5.addEventListener('click', changeToFiveColors);

// Button 5 -----------------------------------------------------------------------
const button6 = document.querySelector<HTMLButtonElement>('.button6');
const button6_number = document.querySelector<HTMLElement>('button6_number');

const increaseNumber = () => {
  let number = Number(button6_number);

  for (let i = 6; i <= 10; i++) {
    number = number + 1;
  }
}

button6.addEventListener('click', increaseNumber);
