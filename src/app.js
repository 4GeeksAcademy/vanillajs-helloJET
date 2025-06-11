import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['My boss', 'My mother-in-law', 'The mailman', 'My bird', 'my ex-wife'];
let action = ['ate', 'peed on', 'crushed', 'broke', 'chewed', 'wrecked'];
let what = ['my homework', 'my phone', 'the car', 'my money', 'my marriage'];
let when = ['before class', 'while I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function myRandomItem (min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function myRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = myRandomItem (min,max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("This is a test!!");
  document.querySelector ('#excuse').innerHTML = myRandom(who) + " " + myRandom(action) + " " + myRandom(what) + " " + myRandom(when)
};
