// let egg1;
// let egg2;

let basket=[];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  //  egg1=new Egg(random(width),random(height));
  //  egg2=new Egg(random(width),random(height));
 
  for(let i=0;i<10;i++){
    let newEgg=new Egg(random(width),random(height));
    basket.push(newEgg)
  }
}

function draw() {
  background(220);
  // egg1.display();
  // egg2.display();
  for(let i=0;i<basket.length;i++){
    basket[i].display();
    basket[i].update();
  }
}
class Egg{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.scaleFactor = random(0.3, 1);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.showYolk=false;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > width){
      this.speedX = -this.speedX
      this.showYolk=!this.showYolk;
    }
    if(this.y < 0 || this.y > height){
      this.speedY = -this.speedY
      this.showYolk=!this.showYolk;
    }
  }
  display(){

    push();
    translate(this.x,this.y);
    scale(this.scaleFactor)
      noStroke();
      fill(255, 200);
      arc(0, 0, 80, 80,  0,  PI);
      arc(0, 0, 80, 130, PI, 2*PI);

      // egg yolk
      if(this.showYolk==true){

      
      fill(255, 164, 0);
      circle(0, 0, 40)
      }
    
    pop();
  }
}
function mousePressed(){
  basket.push(new Egg(mouseX,mouseY))
}







