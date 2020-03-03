'use strict';
// note to self: make the variables and arrays names unique. and dont ever do what you did here again.
var busMAllImages = [ // the array here holds all the 20 pictures we need to show on the page.
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg', //the images names taken from the image folder.
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg', // here we added .jpg , .png , .gif after every image to specify the image type.
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];

// var noLoopArr = [];
// here we built the documents using queryselector because it takes classes and id.
var leftBusImage = document.querySelector('#left_ad_img');
// console.log(leftBusImage);
var middleBusImage = document.querySelector('#middle_ad_img');

var rightBusImage = document.querySelector('#right_ad_img');

var groupimages = document.getElementById('all_ads'); // here we created the container element.

var busMallArr = []; // the array of all to push everything on.
var totalClicks = 1; // the counted clicks on te images.




var leftAdRandom;
var middleAdRandom; //here we defined the variables used on the helper function to use them globaly instaed of locally.
var rightAdRandom;

function Bus (name){ // the contructor function here.
  this.name = name.split('.')[0]; // we used split '.' to split the name from what is after the dot  so it wouldn't show on the result.
  this.imgUrl = `img/${name}`; // be careful here.. dont use "this" because it won't take the split and the images will disappear.
  this.clicks = 0;
  this.viewResult = 0;
  busMallArr.push(this); //pushing what is inside the contructor to the array of all.
  // console.log(this.viewResult);
  setImage();
}


function renderImages(leftAdRandom,middleAdRandom, rightAdRandom ){ // here we are creating a function to render the images using the random images variables.

  leftBusImage.setAttribute('src', leftAdRandom.imgUrl); // setting the attribute for the "source" and the random image from the helper function.
  leftBusImage.setAttribute('alt', leftAdRandom.name);
  leftAdRandom.viewResult++; // increasing the viewd images by 1 becasue they are already shown on  the page when it reloads.
  middleBusImage.setAttribute('src', middleAdRandom.imgUrl);
  middleBusImage.setAttribute('alt', middleAdRandom.name);
  middleAdRandom.viewResult++;
  rightBusImage.setAttribute('src', rightAdRandom.imgUrl);
  rightBusImage.setAttribute('alt', rightAdRandom.name);
  rightAdRandom.viewResult++;
  // console.log(this.viewResult);
}
function getRandomImg(){ // using the helper function to get a random image from the images array using the global variables we declared earlier.
  leftAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
  middleAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
  rightAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];


  renderImages(leftAdRandom,middleAdRandom, rightAdRandom ); // rendering the images function  from before to take effect.

  while(leftAdRandom === rightAdRandom || leftAdRandom === middleAdRandom || rightAdRandom === middleAdRandom){ // || noLoopArr.includes(leftAdRandom) || noLoopArr.includes(middleAdRandom) || noLoopArr.includes(rightAdRandom)){ //using while to stop the images from repeating on the same click and generating a new image.
    leftAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
    middleAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
    rightAdRandom = busMallArr[randomNumber(0, busMallArr.length-1)];
  }
  // noLoopArr.push(leftAdRandom);
  // noLoopArr.push(middleAdRandom);
  // noLoopArr.push(rightAdRandom);
  // console.log(noLoopArr);
  renderImages(leftAdRandom,middleAdRandom, rightAdRandom );
  leftBusImage.viewResult++;
  middleBusImage.viewResult++; //of course don't forget to add a result.
  rightBusImage.viewResult++;
  // console.log(busMAllImages.viewResult);
}

for (var i = 0; i< busMAllImages.length; i++){ //declaring the Bus constructer using for loop.
  new Bus (busMAllImages[i]);
  setImage();

}

getRandomImg();

function clickOnImg(e){ //creating a function to add one click on each image you click on.
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

  if(totalClicks === 26){ //after 25 clicks the even listener will feeze the images.
    groupimages.removeEventListener('click', clickOnImg);
    // leftBusImage.remove();
    // rightBusImage.remove();
    // middleBusImage.remove();     //we can use this to remove the pictures after the clicks.
    lastResults();
    results();
    getImage();
  }
}
groupimages.addEventListener('click' , clickOnImg);
results();
function results(){ //creating the results element to show on the page.
  var finalResults = document.getElementById('totalResults');
  for (var m = 0; m<busMallArr.length;m++){

    var listedResults = document.createElement('li');
    finalResults.appendChild(listedResults);
    listedResults.textContent = `Result: ${busMallArr[m].name} had ${busMallArr[m].clicks} clicks and ${busMallArr[m].viewResult} views`;
    // in the text conten for the created list we added the images names, clicks and views.
  }}


//--------------------------------------------------------------------

function setImage(){
  var vote = JSON.stringify(busMallArr);
  localStorage.setItem('Ad votes', vote);
}

function getImage(){
  var ourVotes = localStorage.getItem('ourVotes');
  busMallArr = JSON.parse(ourVotes);
  results();
}



//-----------------------------------------------------------------------------------------








function randomNumber(min, max) { //helper function.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}









function lastResults(){// making a new function and new arrays to push the data into the chart.
  var adsNameArr = [];
  var adsClicks = [];
  for (var j = 0; j < busMallArr.length; j++){
    var ads = busMallArr[j].name;
    adsNameArr.push(ads);
    var adsViews = busMallArr[j].viewResult;
    adsClicks.push(adsViews);
  }
  // console.log(adsViews);
  // console.log(adsClicks);


  var ctx = document.getElementById('myAds').getContext('2d'); //copying and pasting that from the demo.
  // eslint-disable-next-line no-undef

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: adsNameArr,
      datasets: [{
        label: '# of Votes',
        data: adsClicks, //don't forget to change the data to the data stored in your code.
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
