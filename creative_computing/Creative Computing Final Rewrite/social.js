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
    text(likes.data.likes.count, 350, 100);
      fill(255);
  }
}
