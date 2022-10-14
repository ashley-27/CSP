//thanks Mr. J
int MAX_WEIGHT = 10;
ArrayList<Star> stars = new ArrayList<Star>();
PVector direction;

void setup() {
  size(700,870);
  surface.setLocation(740,-100);
  
  for (int i = 0; i<600; i++) {
    Star star = new Star();
    stars.add(star);   
  }
}

void draw() {
    background(0);
    for (Star s : stars) {
      s.display();
      PVector direction = new PVector(2,-1);
      s.move(direction);
    }
}

void keyPressed () {
  if (key == 'w') {
    PVector change = new PVector(0,-1);
    direction = direction.add(change);
  }
}
