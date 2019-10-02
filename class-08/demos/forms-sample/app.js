'use strict';


var changeText = function(){
  var p = document.querySelector('p');
  p.textContent = 'I changed to text yay!';
};

var button = document.querySelector('button');

button.addEventListener('click', function() {
  var p = document.querySelector('p');
  p.textContent = 'I was changed by an anonymous function';
});
