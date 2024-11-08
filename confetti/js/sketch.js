let confettis = [];
let numConfetti = 100;
let backgroundHUE;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  
  
  colorMode(HSB)
  backgroundHUE=random(255)
}

function draw() {
  background(backgroundHUE,10,100);
 if(mouseIsPressed==true){

 
  for(let i = 0; i < 10; i++){
    confettis.push(new Confetti(mouseX,mouseY))
  }
}
fill(0)
text(confettis.length,20,20)
  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  }
  while((confettis.length >1000)){
    confettis.splice(0,1)
  }
  for(let i=confettis.length-1; i>=0;i--){
    if(confettis[i].onCanvas==false){
      confettis.splice(i,1)
    }
  }
}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    this.hue=random(360) 
    this.onCanvas=true;  
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.speedY+=0.1;
    this.speedX=this.speedX*0.99;
    if(this.y>height){
      this.onCanvas=false
    }
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.hue,50,100);
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }

}







