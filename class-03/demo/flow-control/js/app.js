'use scrict';

// var username = prompt('Please tell me your name');
// console.log(username);

// while(!username) {
//   alert('no really, I need a name');
//   username = prompt('Alright let\'s try this again: what is your name');
//   console.log(username);
// }

do {
  var dogname = prompt('What is your dog\'s name');
  if (!dogname) {
    alert('need a dog name');
  }
}while (!dogname);

if (dogname === 'Sadie'){
  alert('awesome! that is my dog\'s name as well');
}

var favoriterFoods = [];

favoriterFoods.push('Pizza and Poke');
favoriterFoods.push('Spaghetti');
favoriterFoods.push(20);
favoriterFoods.push(['hello', 'world']);

// console.log(favoriterFoods);

//use for loop, iterate through array, console log values in array

for (var i = 0; i < 4; i++) {
  //console log
  console.log(favoriterFoods[i]);
}



