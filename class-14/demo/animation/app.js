'use strict';

var STATE_KEY = 'counterState';

var counterState = {};

function resetState(){
  counterValue.className = '';
  counterState = {
    counterValue: 0,
    numberOfDecrement: 0,
    numberOfIncrement: 0
  };
}

// function toggleRotate(element){
//   if(element.className.includes('rotateLeft')){
//     element.className.replace('rotateLeft', 'rotateRight');
//     return true;
//   }else if(element.className.includes('rotateRight')){
//     element.className = element.className.replace('rotateRight', 'rotateLeft');
//     return true;
//   }else{
//     return false;
//   }
// }

var btnDecrement = document.getElementById('btnDecrement');
var btnIncrement = document.getElementById('btnIncrement');
var counterValue = document.getElementById('counterValue');
var btnReset = document.getElementById('btnReset');

function handleDecrement(event){
  event.preventDefault();
  counterState.counterValue--;
  counterState.numberOfDecrement++;

  if(counterValue.className.includes('rotateRight')){
    counterValue.className = counterValue.className.replace('rotateRight', 'rotateLeft');
  }else if(!counterValue.className.includes('rotateLeft')){
    counterValue.className += ' rotateLeft';
  }

  renderCounter();
}

btnDecrement.addEventListener('click', handleDecrement);

function handleIncrement(event){
  event.preventDefault();
  counterState.counterValue++;
  counterState.numberOfIncrement++;

  if(counterValue.className.includes('rotateLeft')){
    counterValue.className = counterValue.className.replace('rotateLeft', 'rotateRight');
  }else if(!counterValue.className.includes('rotateRight')){
    counterValue.className += ' rotateRight';
  }

  renderCounter();
}

btnIncrement.addEventListener('click', handleIncrement);


function handleReset(event){
  event.preventDefault();
  resetState();
  renderCounter();
}

btnReset.addEventListener('click', handleReset);

function renderCounter(){
  var counterValue = document.getElementById('counterValue');
  counterValue.textContent = counterState.counterValue;
  btnDecrement.textContent = `DEC (${counterState.numberOfDecrement})`;
  btnIncrement.textContent = `INC (${counterState.numberOfIncrement})`;
  saveStateToLocalStorage();
}

function saveStateToLocalStorage(){
  localStorage.setItem(STATE_KEY, JSON.stringify(counterState));
}

(function getStateFromLocalStorage(){
  if(localStorage[STATE_KEY]){
    var rawState = localStorage.getItem(STATE_KEY);
    counterState = JSON.parse(rawState);
    renderCounter();
  }else{
    resetState();
  }
})();

