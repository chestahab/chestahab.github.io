var img;
var img2;
var transparency;
var timesPressed = 255;
var ratio = 25.5;
var t;

function setup() {
  splat = loadSound('splat.mp3');

  createCanvas(windowWidth, windowHeight);

  img = loadImage("potato.png");
  imageMode(CENTER);

  img2 = loadImage("mashed-potatoes.png")
  imageMode(CENTER)

}

function draw() {
  background(255);
  noCursor();

  image(img, mouseX, mouseY, img.width / 2, img.height / 2);
  tint(255, t)

  image(img2, mouseX, mouseY, img2.width / 4, img2.height / 4);
  tint(255, transparency)

  if (transparency < 25) {
    t = 255
  } else {
    t = 0
  }

  if (transparency < 25) {
    splat.play();
  }
}


function mousePressed() {
  var d = dist(mouseX, mouseY, mouseX, mouseY)
  if (d < 1) {
    transparency = (timesPressed -= ratio)
  }
}