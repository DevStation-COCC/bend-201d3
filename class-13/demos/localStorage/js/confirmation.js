'use strict';

var stuffFromLS = JSON.parse(localStorage.getItem('coffee'));

console.log(stuffFromLS);

var latestOrder = stuffFromLS[stuffFromLS.length - 1];

var confirmH2 = document.getElementById('confirmH2');
var messageH3 = document.createElement('h3');

messageH3.textContent = `The latest order is ${latestOrder.name}, a ${latestOrder.size}oz ${latestOrder.drinkType}`;

confirmH2.appendChild(messageH3);