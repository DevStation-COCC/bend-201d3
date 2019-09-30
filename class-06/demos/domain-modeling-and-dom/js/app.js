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

var riley = {
  name: 'Riley',
  staffSay: 'Riley is mischievious and playful. He has big paws and is going to be a big boy.',
  breed: 'German Shepherd',
  additionalInfo: ['Good with kids', 'Good with dogs', 'Not Good with cats'],
  description: 'German Shepherds are extremely loyal, smart and protective.',
  wikiURL: 'https://en.wikipedia.org/wiki/German_Shepherd',
  imgURL: '../img/riley.jpeg',
  staffShoutout: function(){
    console.log(this.staffSay);
  },
  render: function(){
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

    var h3 = document.createElement('h3');
    h3.textContent = `Breed: ${this.breed}`;
    article.appendChild(h3);

    var h4 = document.createElement('h4');
    h4.textContent = 'Additional Information:';
    article.appendChild(h4);

    var ol = document.createElement('ol');
    article.appendChild(ol);

    for (var i=0; i< this.additionalInfo.length; i++){
      var li = document.createElement('li');
      li.textContent = riley.additionalInfo[i];
      ol.appendChild(li);
    }

  }
};


var sadie = {
  name: 'Sadie',
  staffSay: 'Sadie is the sweetest Catahoula ever!',
  breed: 'Catahoula Leppard Dog',
  additionalInfo: ['Not Good with kids', 'Not Good with dogs', 'Not Good with cats'],
  description: 'Working dogs! Extremely affectionate.',
  wikiURL: 'https://en.wikipedia.org/wiki/German_Shepherd',
  imgURL: '../img/pup2.jpeg',
  staffShoutout: function(){
    console.log(this.staffSay);
  },
  render: function(){
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

    var h3 = document.createElement('h3');
    h3.textContent = `Breed: ${this.breed}`;
    article.appendChild(h3);

    var h4 = document.createElement('h4');
    h4.textContent = 'Additional Information:';
    article.appendChild(h4);

    var ol = document.createElement('ol');
    article.appendChild(ol);

    for (var i=0; i< this.additionalInfo.length; i++){
      var li = document.createElement('li');
      li.textContent = this.additionalInfo[i];
      ol.appendChild(li);
    }

  }
};

riley.render();
sadie.render();