var marker = [];
var Picker = ["a", "s", "d", "f", "g", "h", "<<<Type to Change Color, then draw!"]
var Hue = ["#e10000" /* red 0*/, "#ff9600"/* orange 1*/, "#ffff00"/* yellow 2*/, "#00ff00"/* green 3*/, "#0000ff"/* blue 4*/, "#ff00ff"/* purple 5*/ ]
var c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  marker.push(new Color(mouseX, mouseY));
}

function draw() {
  background(0);
  
  fill(Hue[0]);
  textSize(50);
  text (Picker[0], 10, 60);
  
  fill(Hue[1]);
  textSize(50);
  text (Picker[1], 40, 60);
  
  fill(Hue[2]);
  textSize(50);
  text (Picker[2], 70, 60);
  
  fill(Hue[3]);
  textSize(50);
  text (Picker[3], 100, 60);
  
  fill(Hue[4]);
  textSize(50);
  text (Picker[4], 120, 60);
  
  fill(Hue[5]);
  textSize(50);
  text (Picker[5], 150, 60);
  
  fill(Hue[c])
  textSize(50);
  text (Picker[6], 180, 60);
  
  for (var i = 0; i < marker.length; i=i+1) {
    marker[i].move();
    marker[i].display();
    }
}

function keyTyped() {
  if (key === 'a') {
    c = 0;
  } else if (key === 's') {
    c = 1;
  } else if (key === 'd') {
    c = 2;
  } else if (key === 'f') {
    c = 3;
  } else if (key === 'g') {
    c = 4;
  } else if (key === 'h') {
    c = 5;
  }

}

function Color(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    noStroke();
    fill (Hue[c]);
    ellipse(this.x, this.y, 40, 40);
  }

  this.move = function() {
    this.x;
    this.y;

  }
}