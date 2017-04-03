var serial; // variable to hold an instance of the serialport library
var portName = 'COM3'; // fill in your serial port name here
var value;
var song;
var rate;


function setup() {

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  
  createCanvas (200,200);
  song = loadSound("seinfeld.mp3", loaded);
  song.setVolume (.5);
  
}

function loaded() {
  song.loop();
  
}

function draw() {
  background(0);
  // song.setVolume(value/255);
  song.rate((value/255)*2);
}
  

function serialEvent() {
  //var data = serial.read();
  //console.log(data);
  // var data = serial.readBytesUntil("\r\n");
  //if (data == 'hello') {
  //serial.write('x')
//}
value = serial.read();
console.log(value);
serial.write ('x');
}
function mousePressed(){
  serial.write ('x');
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}