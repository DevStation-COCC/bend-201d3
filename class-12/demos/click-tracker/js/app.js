'use strict';
//Problem Domain

// The user is presented with images 
// The user clicks on one of the images
// Another set of images are displayed 
// The system keeps track of the number of times the image is clicked
// user clicks and sees x number of images... system stops generating image

// App Flow

// Randomly display 2 images on the screen
// - random number generator
// - function to display image
// A user click event on image
// - Event handler to handle click event
// - counter to keep track of number of clicks
// Event handler fires:
// - check total clicks => x defined above
// if = or greateer:
// stop letting user click - so disable the listener
// show the clicks - in console first, then on the web page
// if not:
// track which image was clicked on
// update the clicked images count of how many thimes it was clicked
// update both images count of times shown
// Randomly select another two images to display

// HTML
// start out with two default images
// give them id's so we can select them
// let the user know what they are supposed to do - instructions

//Model Domain:

// alt, src, clicks, timesShown, name
// methods 
// 

//Global Variables
var imageSectionTag = document.getElementById('imageDiv');
var leftImageTag = document.getElementById('left_image');
var rightImageTag = document.getElementById('right_image');
var resetButton = document.getElementById('reset');
var totalClicks = 0;



var rightImgOnThePage = null;
var leftImgOnThePage = null;


var NatureImage = function(name, imgURL){
  this.name = name;
  this.clicks = 0;
  this.timeshown = 0;
  this.imgURL = imgURL;

  NatureImage.allImages.push(this);

};

NatureImage.allImages = [];


//Helper functions - These are not part of object, and neither are they part of the constructor
var renderNewImages = function(leftIndex, rightIndex){
  leftImageTag.src = NatureImage.allImages[leftIndex].imgURL;
  rightImageTag.src = NatureImage.allImages[rightIndex].imgURL;
};

var pickNewImages = function(){
  //pick a new image...
  console.log('pick a new image');

  var leftIndex = Math.ceil(Math.random() * NatureImage.allImages.length -1);

  do {
    var rightIndex = Math.ceil(Math.random() * NatureImage.allImages.length-1);
  } while(rightIndex === leftIndex);

  leftImgOnThePage = NatureImage.allImages[leftIndex];
  rightImgOnThePage = NatureImage.allImages[rightIndex];

  renderNewImages(leftIndex, rightIndex);
};


// console.log(NatureImage.allImages[0].imgURL);
// console.log(NatureImage.allImages);
// renderNewImages(0,1);

//Event Handler
var handleClickOnImg = function(event){
  console.log('i am alive');

  if(totalClicks < 10) {
    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if(id === 'left_image' || id === 'right_image'){
      //track the images
      //increment th image in the lerft_image slot's click
      //if image is right, incremen right
      if (id === 'left_image'){
        leftImgOnThePage.clicks ++
      }
      if (id === 'right_image'){
        rightImgOnThePage.clicks ++;
      }
  
      leftImgOnThePage.timesShown ++;
      rightImgOnThePage.timesShown ++;
  
      //pick a new Image - function...
      pickNewImages();
    }
  }
  totalClicks ++;
  if(totalClicks === 9) {
    resetButton.addEventListener('click', handleReset);
    resetButton.className = 'resetEnable';
    imageSectionTag.removeEventListener('click', handleClickOnImg);
    console.log('you have seen 20 images, thanks!');
  }


};

imageSectionTag.addEventListener('click', handleClickOnImg);


function handleReset(){
  totalClicks = 0;
  imageSectionTag.addEventListener('click', handleClickOnImg);
  resetButton.className = 'resetDisable';
}

new NatureImage('Niclas Moser', '../img/niclas-moser-i9-dezhe1rc-unsplash.jpg');
new NatureImage('Omer Faruk', '../img/omer-faruk-tokluoglu-9kSBdJmy4N8-unsplash.jpg');
new NatureImage('Claudio Schwarz', '../img/claudio-schwarz-purzlbaum-yx5Apt60SXU-unsplash.jpg');
new NatureImage('Kristaps Solims', '../img/kristaps-solims-5dr49TRKdIw-unsplash.jpg');
new NatureImage('Mohammad AMirahmadi', '../img/mohammad-amirahmadi-mLwZYW0oC0I-unsplash.jpg');
new NatureImage('Paul Gilmore', '../img/paul-gilmore-5FGsEWRn2NQ-unsplash.jpg');
new NatureImage('Zane Lee', '../img/zane-lee-j6Vlio3BWd8-unsplash.jpg');
new NatureImage('Patrick', '../img/patrick-brinksma-XG8_CNVdGGY-unsplash.jpg');
new NatureImage('Pascal', '../img/pascal-debrunner-3iwikr3AJ9k-unsplash.jpg');


pickNewImages();
