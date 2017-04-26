var insults = ["Sad" /*0*/ ,
  "You're literally garbage" /*1*/ ,
  "Really?" /*2*/ ,
  "Waste of time" /*3*/ ,
  "Why am I even paying attention to you?" /*4*/ ,
  "Eh" /*5*/ ,
  "You're arguably a person" /*6*/ ,
  "Not everyone hates you, just most people" /*7*/ ,
  "Oh good, you have some friends" /*8*/ ,
  "wow, maybe even a stranger follows you!" /*9*/ ,
  "You're fine" /*10*/ ,
  "Good post" /*11*/ ,
  "Nice work!" /*12*/ ,
  "Hey good for you!" /*13*/ ,
  "Either you posted a nude or people actually care" /*14*/
]

var nums;
var api = 'https://api.instagram.com/v1/media/'; //First section of URL
var apiKey = '?access_token=40290595.1677ed0.8e890906a6054d7eaf29ebe57bf68e05'; //Third section of URL
var input;
var likes;
var count = 0;
var oldcount = 0;
var tosend;
var counter = 1;
//var new_count = {

var serial;
var portName = 'COM3';
var inData;
var outByte = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //Create a new Canvas filling the window
  var button = select('#submit');
  button.mousePressed(likeAsk); //run the instagram request
  input = select('#mediaid'); //reads value of input (media ID)

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  //  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose);
  serial.open(portName);
}

function likeAsk() { //combines URL and asks for gotData function
  var url = api + input.value() + apiKey; //combined URL (Comment out for testing and comment in next line)
  //var url = api + "1500227357917733524_40290595" + apiKey; //test media ID for simplicity. (comment in for testing and comment out previous line)
  setInterval(likeAsk, 1500)
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) { //API call
  likes = data; //var likes equals the value returned from the API call
  count = data.data.likes.count; //Var for how many likes
  return data.data.likes.count; //Find the like count in the API call
}

function compare(){

  if (count > oldcount) {
    tosend = (count-oldcount);
    oldcount = count;
    console.log(tosend);
    sendValue();
  }

}

function draw() {
  background(0); //black background
  fill(random(255), random(255), random(255));
  if (likes) { //if the 'likes' function is called
    //ellipse(200, 200, count); //test ellipse 2
    //ellipse(100, 100, count); //create an ellipse at 100,100 with the diameter equal to number of likes
    if (count == 1) {
      text(insults[0], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count == 2) {
      text(insults[1], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count == 3) {
      text(insults[2], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count == 4) {
      text(insults[3], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count == 5) {
      text(insults[4], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 6 && count < 10) {
      text(insults[5], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 10 && count < 15) {
      text(insults[6], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 15 && count < 20) {
      text(insults[7], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 20 && count < 25) {
      text(insults[8], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 25 && count < 30) {
      text(insults[9], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 30 && count < 40) {
      text(insults[10], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 40 && count < 42) {
      text(insults[11], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count == 40) {
      text("Life, the Universe, and Everything", windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 43 && count < 50) {
      text(insults[11], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 50 && count < 75) {
      text(insults[12], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 75 && count < 100) {
      text(insults[13], windowWidth/2, windowHeight/2);
      fill(0);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    } else if (count >= 100) {
      text(insults[14], windowWidth/2, windowHeight/2);
      fill(random);
      textSize(100);
      textFont("Comic Sans MS")
      textAlign(CENTER)
    }
    compare();
  }
}

function serialEvent() {
  var inByte = serial.read();
  inData = inByte;
  console.log(inData);
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function sendValue() { //tell the arduino to activate
  setInterval(sendValue, 500)
  if (counter <= tosend) {
        serial.write(1);
        counter++;
    } else {
        serial.write(0);
    }

 }

function serverConnected() {
  console.log('connected to server.');
} //log onnection to server
function portOpen() {
  console.log('the serial port opened.')
} //Log serial port opening
function portClose() {
  console.log('The serial port closed.');
} //Log serial port closing
