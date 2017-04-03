var balls = [];
var ballGen = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0)
  fill(random())
  for (var i = 0; i < balls.length; i++) {
    balls[i].render();
    balls[i].move();
  }
}

function mousePressed() {
  balls[ballGen] = new Ball(mouseX, mouseY, random(25, 100), random(5, 20), color(random(255), random(255), random(255)));
  ballGen++;
}

function Ball(x, y, sz, sp, co) {
  this.xpos = x;
  this.ypos = y;
  this.size = sz;
  this.speedx = random(-1, 1) * sp;
  this.speedy = random(-1, 1) * sp;
  this.cl = co;
  this.render = function() {
    fill(co);
    noStroke();
    ellipse(this.xpos, this.ypos, this.size, this.size);
  }

  this.move = function() {
    this.xpos = this.xpos + this.speedx;
    this.ypos = this.ypos + this.speedy;
    if ((this.xpos >= width) || (this.xpos <= 0)) {
      this.speedx = -this.speedx;
    }
    if ((this.ypos >= height) || (this.ypos <= 0)) {
      this.speedy = -this.speedy;
    }
  }
}