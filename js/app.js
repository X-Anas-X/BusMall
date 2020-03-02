'use strict';
var busMAllImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];

var leftBusImage = document.querySelector('#left_ad_img');
// console.log(leftBusImage);
var middleBusImage = document.querySelector('#middle_ad_img');

var rightBusImage = document.querySelector('#right_ad_img');

var groupimages = document.getElementById('all_ads');

var busMallArr = [];
var totalClicks = 1;




var leftAdRandom;
var middleAdRandom;
var rightAdRandom;

function Bus (name){
  this.name = name;
  this.imgUrl = `img/${this.name}`;
  this.clicks = 0;
  this.viewResult = 0;
  busMallArr.push(this);
}
function renderImages(leftAdRandom,middleAdRandom, rightAdRandom ){

  leftBusImage.setAttribute('src', leftAdRandom.imgUrl);
  leftBusImage.setAttribute('alt', leftAdRandom.name);

  middleBusImage.setAttribute('src', middleAdRandom.imgUrl);
  middleBusImage.setAttribute('alt', middleAdRandom.name);

  rightBusImage.setAttribute('src', rightAdRandom.imgUrl);
  rightBusImage.setAttribute('alt', rightAdRandom.name);
}
function getRandomImg(){
  leftAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];

  middleAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];

  rightAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];


  renderImages(leftAdRandom,middleAdRandom, rightAdRandom );

  while(leftAdRandom === rightAdRandom || leftAdRandom === middleAdRandom || rightAdRandom === middleAdRandom){
    leftAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
    middleAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
    rightAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
  }
  renderImages(leftAdRandom,middleAdRandom, rightAdRandom );


}

for (var i = 0; i< busMAllImages.length; i++){
  new Bus (busMAllImages[i]);
}
getRandomImg();

function clickOnImg(e){
  if (e.target.id === 'left_ad_img' || e.target.id === 'middle_ad_img' || e.target.id === 'right_ad_img'){
    getRandomImg();
    totalClicks++;
  }
  if (event.target.id === 'left_ad_img'){
    leftAdRandom.clicks++;
  }
  if (event.target.id === 'left_ad_img'){
    middleAdRandom.clicks++;
  }
  if (event.target.id === 'left_ad_img'){
    rightAdRandom.clicks++;
  }

  if(totalClicks === 26){
    groupimages.removeEventListener('click', clickOnImg);
    // leftBusImage.remove();
    // rightBusImage.remove();
    // middleBusImage.remove();
    lastResults();
    results();
  }
}
groupimages.addEventListener('click' , clickOnImg);

function results(){
  var finalResults = document.getElementById('totalResults');
  for (var m = 0; m<busMallArr.length;m++){

    var listedResults = document.createElement('li');
    finalResults.appendChild(listedResults);
    listedResults.textContent = `Result: ${busMallArr[m].name} had ${busMallArr[m].clicks} clicks}`;

  }}











function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}









function lastResults(){
  var adsNameArr = [];
  var adsClicks = [];
  for (var j = 0; j < busMallArr.length; j++){
    var ads = busMallArr[j].name;
    adsNameArr.push(ads);
    var adsViews = busMallArr[j].viewResult;
    adsClicks.push(adsViews);
  }}





