var url = 'http://api.open-notify.org/iss-now.json'
var issX;
var issY;
var issX2;
var issY2;

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  setInterval(issData, 1000);
}

function issData() {
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  //console.log(data.iss_position.latitude);
  position = data;
  var lat = data.iss_position.latitude;
  var long = data.iss_position.latitude;
  issX = round(map(lat, -90, 90, 0, 255));
  issY = round(map(long, -180, 180, 0, 255));
  issX2 = map(lat, -90, 90, 0, width);
  issY2 = map(long, -180, 180, 0, height);
  
  console.log(issX);
  console.log(issY);
}


function draw() {
  background(0);
  
  fill(issX, issY, 255);
  ellipse(issX2+3.5, issY2, 20, 20);
  rect(issX2-40, issY2-2.5, 80, 5);
  rect(issX2-40, issY2-15, 6, 30);
  rect(issX2+40, issY2-15, 6, 30);
  rect(issX2-30, issY2-15, 6, 30);
  rect(issX2+30, issY2-15, 6, 30);
  rect(issX2-20, issY2-15, 6, 30);
  rect(issX2+20, issY2-15, 6, 30);
}