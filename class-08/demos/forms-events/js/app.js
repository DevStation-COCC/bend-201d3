'use strict';

{/* <article id = "riley">
<a href="https://en.wikipedia.org/wiki/German_Shepherd"><img src="./img/riley.jpeg" alt="image of Riley" /></a>
<h2>Riley</h2>
<h3>Breed: German Shepherd</h3>
<h4>Additional Information:</h4>
<ol>
  <li>Good with kids</li>
  <li>Good with dogs</li>
  <li>Not Good with cats</li>
</ol>
<p>German Shepherds are extremely loyal, smart and protective.</p>
<p class = "staffSay">Riley is mischievious and playful. He has got big paws and is going to be a big boy.</p>
</article> */}

//Define global items - constructor

var puppyData = [
  ['Riley', '', 'German Shepherd', 'Riley is mischievious and playful. He has big paws and is going to be a big boy.', ['Good with kids', 'Good with dogs', 'Not Good with cats'], 'German Shepherds are extremely loyal, smart and protective.', 'https://en.wikipedia.org/wiki/German_Shepherd', '../img/riley.jpeg'],

  ['Sadie', '', 'Catahoula Leopard Dog', 'Sadie is the sweetest Catahoula ever!', ['Not Good with kids', 'Not Good with dogs', 'Not Good with cats'], 'Working dogs! Extremely affectionate.', 'https://en.wikipedia.org/wiki/German_Shepherd', '../img/pup2.jpeg'],

  ['Frisky','','Australian Shepherd',  'Frisky is a loving, gentle dog', ['Good with kids', 'Good with dogs', 'Good with cats'],'Working dogs! Needs lots of exercise', 'https://en.wikipedia.org/wiki/Australian_Shepherd', '../img/pup4.jpg']

];

var Puppy = function(name, age, breed, staffSay, additionalInfo, description, wikiURL, imgURL) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.staffSay = staffSay;
  this.additionalInfo = additionalInfo;
  this.description = description;
  this.wikiURL = wikiURL;
  this.imgURL = imgURL;
};

//define prototype functions
Puppy.prototype.staffShoutout = function(){
  console.log(this.staffSay);
},
Puppy.prototype.chaseSquirrel = function(){
  console.log('Chase bark bark chase chase!!');
};
Puppy.prototype.generateAge = function(){
  if(!this.age){
    this.age = random(1, 12);
  }
};
//render function defined below (shows that you can pass functions just like variables)
Puppy.prototype.renderPup = render;

//define external functions

function random(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function render(){
  var bendPuppyListElement = document.getElementById('bendPuppyList');

  var article = document.createElement('article');
  article.setAttribute('id', `${this.name.toLowerCase()}`);
  bendPuppyListElement.appendChild(article);

  var a = document.createElement('a');
  a.setAttribute('href', this.wikiURL);
  article.appendChild(a);

  var img = document.createElement('img');
  img.setAttribute('class', 'dogImg');
  img.setAttribute('src', this.imgURL);
  a.appendChild(img);

  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  var table = document.createElement('table');

  var row1 = document.createElement('tr');
  var row2 = document.createElement('tr');
  var row3 = document.createElement('tr');
  
  var th1 = document.createElement('th');
  th1.textContent = this.name;
  var th2 = document.createElement('th');
  th2.textContent = this.additionalInfo[0];
  
  var td1 = document.createElement('td');
  td1.textContent = this.breed;
  var td2 = document.createElement('td');
  td2.textContent = this.additionalInfo[1];

  var td3 = document.createElement('td');
  td3.textContent = `${this.age} months`;
  var td4 = document.createElement('td');
  td4.textContent = this.additionalInfo[2];

  row1.appendChild(th1);
  row1.appendChild(th2);

  row2.appendChild(td1);
  row2.appendChild(td2);

  row3.appendChild(td3);
  row3.appendChild(td4);

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);
  article.appendChild(table);
  
  var h3= document.createElement('h3');
  h3.textContent = `Description: ${this.description}`;
  article.appendChild(h3);

  var h4= document.createElement('h4');
  h3.textContent = 'Additional Information:';
  article.appendChild(h4);

  var h4= document.createElement('h3');
  h3.textContent = `Staff say: ${this.staffSay}`;
  article.appendChild(h4);
}
//************************************ *
//Executing Code

(function renderAll(data){
  for(var i=0; i < data.length; i++){
    data[i] = new Puppy(data[i][0], data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],data[i][7]);
    data[i].generateAge();
    data[i].renderPup();
  }
})(puppyData);


