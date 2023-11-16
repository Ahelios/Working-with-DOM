import $ from 'jquery';
import sum from './utils/sum/sum';

// Button 1 -----------------------------------------------------------------------
const button1 = document.querySelector<HTMLButtonElement>('.button1');
const square1 = document.querySelector<HTMLElement>('.square1');
let isYellow = false;

const changeColor = () => {
  if (isYellow) {
    // If the background is yellow, change it back to its original color
    square1.style.backgroundColor = ''; // Set to '' to reset to CSS value
    isYellow = false;
  } else {
    // If the background is not yellow, change it to yellow
    square1.style.backgroundColor = 'yellow';
    isYellow = true;
  }
};

button1.addEventListener('click', changeColor);

// Button 2 -----------------------------------------------------------------------
const button2 = document.querySelector<HTMLButtonElement>('.button2') as HTMLElement;
const square2Text = document.querySelector<HTMLElement>('.square2-text') as HTMLElement;
let isSuccess = false;

const changeToSuccess = () => {
  if (isSuccess) {
    // If the text is success
    square2Text.textContent = 'FAIL'; // Set to '' to reset to original text
    isSuccess = false;
  } else {
    // If the text is not 'success', change it to original text
    square2Text.textContent = 'SUCCESS';
    isSuccess = true;
  }
};

button2.addEventListener('click', changeToSuccess);

// Button 3 -----------------------------------------------------------------------
const button3 = document.querySelector<HTMLButtonElement>('.button3');
const square3 = document.querySelector<HTMLElement>('.square3');

const changeToInvisible = () => {
  square3.style.visibility = 'hidden';
  setTimeout(() => {
    square3.style.visibility = 'visible';
  }, 2000); // 2000 milliseconds = 2 seconds
};

button3.addEventListener('click', changeToInvisible);

// Button 4 -----------------------------------------------------------------------
const button4 = document.querySelector<HTMLButtonElement>('.button4');
const square4 = document.querySelector<HTMLButtonElement>('.square4');
const emptyContainer = document.querySelector<HTMLElement>('.empty_container');

let isInvisible = false;

const changeToInvisible2 = () => {
  if (isInvisible) {
    square4.style.visibility = 'visible';
    isInvisible = false;
  } else {
    square4.style.visibility = 'hidden';
    emptyContainer.style.display = 'block';
    isInvisible = true;
  }
};

button4.addEventListener('click', changeToInvisible2);
emptyContainer.addEventListener('click', changeToInvisible2);

// Button 5 -----------------------------------------------------------------------
const button5 = document.querySelector<HTMLButtonElement>('.button5');
const square5 = document.querySelector<HTMLElement>('.square5');

const predifinedColors = ['red', 'black', 'aqua', 'brown', 'orange'];

const changeToFiveColors = () => {
  const randomIndex = Math.floor(Math.random() * predifinedColors.length)

  square5.style.backgroundColor = predifinedColors[randomIndex];
};

button5.addEventListener('click', changeToFiveColors);

// Button 6 -----------------------------------------------------------------------
const button6 = document.querySelector<HTMLButtonElement>('.button6');
const square6 = document.querySelector<HTMLElement>('.square6');
let intervalIdentifier: number | undefined;

const startIncreasingNumber = () => {
  if (intervalIdentifier !== undefined) {
    clearInterval(intervalIdentifier);
  }

  let currentNumber = 0;
  square6.textContent = `${currentNumber}`;
  
  intervalIdentifier = window.setInterval(() => {
    currentNumber = currentNumber + 1;
    if (currentNumber > 10) {
      currentNumber = 0;
    }
    square6.textContent = `${currentNumber}`;
  }, 3000);
}

button6.addEventListener('click', startIncreasingNumber);

// Button 7 -----------------------------------------------------------------------
const button7 = document.querySelector<HTMLButtonElement>('.button7');
const allSquares = document.querySelector<HTMLButtonElement>('.square');
const bigBackground = document.querySelector<HTMLButtonElement>('.white-square');

let isNewColors = false;

const changeColorAll = () => {
  if (isNewColors) {
    // If the background is yellow, change it back to its original color
    square1.style.backgroundColor = ''; // Set to '' to reset to CSS value
    bigBackground.style.backgroundColor = '';
    isNewColors = false;
  } else {
    // If the background is not yellow, change it to yellow
    allSquares.style.backgroundColor = '#18D5E1';
    bigBackground.style.backgroundColor = '#000000';
    isNewColors = true;
  }
};

button7.addEventListener('click', changeColorAll);
// Square 1 -----------------------------------------------------------------------
const changeColorRed = () => {
  square1.style.backgroundColor = 'red';
};

const returnColor = () => {
  square1.style.backgroundColor = '';
};

square1.addEventListener('mouseover', changeColorRed);
square1.addEventListener('mouseout', returnColor);
