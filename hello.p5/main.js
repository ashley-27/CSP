//main.js

class Ball {
  constructor(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  collide(other) {
    if (other == this) {
      return;
    }
    let relative = p5.Vector.sub(other.pos, this.pos);
    let dist = relative.mag() - (this.radius + other.radius);
    if (dist < 0) {
      let movement = relative.copy().setMag(abs(dist/2));
      this.pos.sub(movement);
      other.pos.add(movement);
    }
  }

  move(){
    this.vel.y += 1;
    this.pos.add(this.vel);

    if(this.pos.x < this.radius){
      this.pos.x = this.radius;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x > width-this.radius){
      this.pos.x = width-this.radius;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y < this.radius){
      this.pos.y = this.radius;
      this.vel.y = -this.vel.y;
    }
    if (this.pos.y > height-this.radius) {
      this.pos.y = height-this.radius;
      this.vel.y = -this.vel.y;
    }
    }
  draw() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.radius*2);
  }
}

let balls = [];

function setup() {
  createCanvas(400,400);
  for (let i = 0; i<10; i++){
    balls.push(new Ball(
      createVector(random(width), random(height)),
      p5.Vector.random2D().mult(random(10)),
      30,
      color(random(255),random(255),random(255))
    ));
  }
}

function draw() {
  background(220);

  for(let i = 0; i < balls.length; i++){
    for (let j = 0; j < i; j++) {
      balls[i].collide(balls[j]);
    }
  }

  for (let i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].draw();
  }

}
