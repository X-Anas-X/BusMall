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


function Bus (name){
  this.name = name;
  this.imgUrl = `img/${this.name}`;
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
  var leftAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];

  var middleAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];

  var rightAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];

  renderImages(leftAdRandom,middleAdRandom, rightAdRandom );

  while(leftBusImage === rightBusImage || leftBusImage === middleBusImage || rightBusImage === middleBusImage){
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
// console.log(busMallArr);

function clickOnImg(e){
  if (e.target.id === 'left_ad_img' || e.target.id === 'middle_ad_img' || e.target.id === 'right_ad_img'){
    getRandomImg();
    totalClicks++;
  }
  if(totalClicks === 26){
    leftBusImage.remove();
    rightBusImage.remove();
    middleBusImage.remove();

  }}
groupimages.addEventListener('click' , clickOnImg);












function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
