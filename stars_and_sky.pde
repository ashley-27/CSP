class Star {
  PVector pos;
  float size;
  float colour;
  int margin = 50;
  int TOP_SPEED = 2;
  float speed;
    
  Star(){
   this.pos=new PVector(random(width),random(height));
   this.size = random(MAX_WEIGHT);
   this.speed = map(this.size, 0, MAX_WEIGHT, 0, TOP_SPEED);
   this.colour = (255 / MAX_WEIGHT) * this.size;
}

void display() {
  stroke(this.colour, this.colour, this.colour, this.colour);
  strokeWeight(this.size);  
  point (this.pos.x,this.pos.y);
}

void move(PVector direction) {
  direction.mult(this.speed);
  this.pos.add(direction);
  
  if (this.pos.x > width + this.margin) {
      this.pos.x = -this.margin;
    } else if (this.pos.x < 0 - this.margin) {
      this.pos.x = width + this.margin;
    }
  if (this.pos.y > height + this.margin) {
    this.pos.y = -this.margin;
  } else if (this.pos.y < 0 - this.margin) {
    this.pos.y = height + this.margin;
  }  
 }
}
