var insults = ["Sad"/*0*/,
"You're literally garbage"/*1*/,
"Really?"/*2*/,
"Waste of time"/*3*/,
"Why am I even paying attention to you?"/*4*/,
"Eh"/*5*/,
"You're arguably a person"/*6*/,
"Not everyone hates you, just most people"/*7*/,
"Oh good, you have some friends"/*8*/,
"wow, maybe even a stranger follows you!"/*9*/,
"You're fine"/*10*/,
"Good post"/*11*/,
"Nice work!"/*12*/,
"Hey good for you!"/*13*/,
"Either you posted a nude or people actually care"/*14*/]

var nums;

var api = 'https://api.instagram.com/v1/media/'; //First section of URL
var apiKey = '?access_token=40290595.1677ed0.8e890906a6054d7eaf29ebe57bf68e05'; //Third section of URL

var input;

var likes;

function setup() {
  createCanvas(windowWidth, windowHeight); //Create a new Canvas filling the window

  var button = select('#submit');
  button.mousePressed(likeAsk); //run the instagram request

  input = select('#mediaid'); //reads value of input (media ID)
}

function likeAsk() { //combines URL and asks for gotData function
//  var url = api + input.value() + apiKey; //combined URL
  var url = api + "1498731189073280804_40290595" + apiKey; //temp for ease
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) { //API call
  likes = data; //var likes equals the value returned from the API call
  return data.data.likes.count; //Find the like count in the API call
}



function draw() {
  background(0); //black background
  fill(255);
  if (likes) { //if the 'likes' function is called

    ellipse(100,100, likes.data.likes.count); //create an ellipse at 100,100 with the diameter equal to number of likes
     if (likes.data.likes.count == 1) {
       text(insults[0], 350, 100);
     } else if (likes.data.likes.count == 2){
       text(insults[1], 350, 100);
     } else if (likes.data.likes.count == 3){
      text(insults[2], 350, 100);
    } else if (likes.data.likes.count == 4){
      text(insults[3], 350, 100);
    } else if (likes.data.likes.count == 5){
      text(insults[4], 350, 100);
    } else if (likes.data.likes.count >= 6 && likes.data.likes.count < 10){
      text(insults[5], 350, 100);
    } else if (likes.data.likes.count >= 10 && likes.data.likes.count < 15){
      text(insults[6], 350, 100);
    } else if (likes.data.likes.count >= 15 && likes.data.likes.count < 20){
      text(insults[7], 350, 100);
    } else if (likes.data.likes.count >= 20 && likes.data.likes.count < 25){
      text(insults[8], 350, 100);
    } else if (likes.data.likes.count >= 25 && likes.data.likes.count < 30){
      text(insults[9], 350, 100);
    } else if (likes.data.likes.count >= 30 && likes.data.likes.count < 40){
      text(insults[10], 350, 100);
    } else if (likes.data.likes.count >= 40 && likes.data.likes.count < 50){
      text(insults[11], 350, 100);
    } else if (likes.data.likes.count >= 50 && likes.data.likes.count < 75){
      text(insults[12], 350, 100);
    } else if (likes.data.likes.count >= 75 && likes.data.likes.count < 100){
      text(insults[13], 350, 100);
    } else if (likes.data.likes.count >= 100){
      text(insults[14], 350, 100);
    }
  }
}
