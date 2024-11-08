// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 1000; // Decide the initial number of particles.

let particles = [];
let test;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  colorMode(HSB)
  angleMode(DEGREES)

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(0, random(600));
  }
}

function draw() {
  background(0);
  //console.log(particles.length)
  for(let i = 0; i < 5; i++){
    particles.push(new Particle(0,random(600), true))
  }
  for(let i = 0; i < 5; i++){
  particles.push(new Particle(0,random(600), false))
  }
    
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
  

  for(let i=particles.length-1; i>=0;i--){
    if(particles[i].dead==true){
      particles.splice(i,1)
    }
  }
  
}

class Particle {
  // constructor function
  constructor(startX, startY, roundBool) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(0.1,0.5);
    this.move = random(100); 
    this.windForce = random(10, 50); 
    this.yOffset = random(100); 
    this.sat=random(80,100) ;
    this.hue=random(240,290)
    this.age = 0;
    this.lifeSpan = random(400, 600);
    this.xSpeed=0;
    this.ySpeed=0;
    this.dead=false;
    this.round=roundBool;
    // this.randomVal = random();
    this.angle =0;
    this.angelIncrease=false;
    this.testX = 0;
    this.testY = 0;
    this.test = false;
    
  }
  // methods (functions): particle's behaviors
  update() {
    
    this.move+=0.01;
    this.xSpeed=(noise(this.move)-0.5) * this.windForce;
    
    this.ySpeed += 1;
    this.sat -= 0.5;
    this.dia += 0.01;
    this.age++;
    
    if (this.age > this.lifeSpan) {
      this.dead=true;
    }
    
    
    if(this.round == true){
      // console.log(this.angle);
      if (this.x>width/2+100){
        this.angleIncrease=true
        this.test = true;
      } else {
        this.x +=this.xSpeed;
        this.y += sin(this.ySpeed)*random(-1,1);
      }
      if (this.test == true) {
        this.testY = this.y;
        this.test = false;
      }
      if (this.angleIncrease==true) {
        this.angle += 0.7;
        console.log(this.angle);
        this.x=  width / 2 -100+100* cos(this.angle);
        this.y=  this.testY -100+100 * sin(this.angle);
      }
    } else {
      this.x +=this.xSpeed;
      this.y += sin(this.ySpeed)*random(-1,1);
    }
    
    
    
    
   
    // (add) 
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    fill(this.hue,100,100);
    noStroke();
    circle(0, 0, this.dia);

    pop();
  }
}
