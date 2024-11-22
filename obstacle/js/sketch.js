let myObstacles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < 10; i++) {
    myObstacles.push(new Obstacle())
  }

  fly1 = new Fly();

}

function draw() {
  background(220);
  //

  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].update();
    myObstacles[i].display();
  }
  fly1.display();
  fly1.update();
  for(let i=0;i<myObstacles.length;i++){
    myObstacles[i].checkCollision(fly1.x,fly1.y)
  }

}


class Obstacle {
  constructor() {

    // should begin just out of frame to the right
    this.size = random(10, 50);
    this.x = random(width, 2 * width);
    this.y = random(0, height - 2 * this.size);
    // random y location
    // needs a negative speed (moving it to left)
    this.speedX = random(-5, -1);

    //optional:
    // random size
    // random speed


  }
  update() {
    // move left
    this.x += this.speedX;
    // detect when out of frame
    if (this.x < -this.size) {
      // reset x to right side out of frame and random y
      this.x = width;
      this.y = random(0, height - 2 * this.size);
      this.speedX = random(-5, -1);
      this.size = random(10, 50);
    }


  }
  display() {
    // show a box at x y （use push pop and translate ;-)
    push();
    translate(this.x, this.y);
    fill(0);
    rect(0, 0, this.size, this.size)

    pop();
  }
  checkCollision(otherX, otherY) {
    if (otherX > this.x && otherX < this.x + this.size && otherY < this.y + this.size) {
      console.log("collision")
    }

  }
}
class Fly {
  constructor() {
    this.x = width / 3;
    this.y = height / 2;
    this.speedY = 0;
    this.r = 3;

  }
  update() {
    if (this.y < height) {
      this.speedY += 0.1;
    }
    if (keyIsPressed == true && key == "w") {
      this.speedY = -0.2;

    }
    this.y += this.speedY;
    if (this.y >= height - this.r) {
      this.y = height - this.r;
    }

  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, 5)
    pop();
  }
}