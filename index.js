"use strict";

const randomBtn = document.querySelector(".btn-1");
const changeBtn = document.querySelector(".btn-2");
const placeHolder = document.querySelector(".placeholder");
//todo create  a RBG random number from 0-255
const randomInt = (min, max) => {
  return Math.abs(Math.floor(Math.random() * max - min + 1));
};

let randomColor = `rgb(${randomInt(+0, +255)},${randomInt(
  +0,
  +255
)},${randomInt(+0, +255)})`;
console.log(randomColor);
const party = function () {
  return (randomColor = `rgb(${randomInt(+0, +255)},${randomInt(
    +0,
    +255
  )},${randomInt(+0, +255)})`);
};
console.log(party());

const reset = function () {
  clearInterval(prayer);
  document.body.style.backgroundColor = `antiquewhite`;

  randomBtn.style.backgroundColor = `rgb(248, 249, 250)`;
  randomBtn.style.color = `rgb(33, 37, 41)`;
  randomBtn.textContent = `Random Colors.`;
  placeHolder.textContent = `
        Your color in R.B.G is :
    `;
};

let prayer;
let seconds = 100;
randomBtn.textContent = `Random Colors.`;

const colorBomb = function () {
  clearInterval(prayer);
  console.log(randomBtn.textContent === `Random Colors.`);
  if (randomBtn.textContent === `Random Colors.`) {
    prayer = setInterval(() => {
      randomBtn.style.backgroundColor = `rgb(33, 37, 41)`;
      randomBtn.style.color = `rgb(248, 249, 250)`;
      randomBtn.textContent = `STOP`;

      document.body.style.backgroundColor = party();
      placeHolder.textContent = `
        Your color in R.B.G is :${party()}
    `;
    }, seconds);
  } else if (randomBtn.textContent === `STOP`) {
    reset();
  }
};

const changeFunction = function () {
  document.body.style.backgroundColor = party();
  placeHolder.textContent = `
      Your color in R.B.G is :${party()}
  `;
};





randomBtn.addEventListener("click", colorBomb);

changeBtn.addEventListener("click", changeFunction);

// byRed 
