/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new LesleyDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class LesleyDancer {
  constructor(startX, startY) {//这里不能加东西了
    this.x = startX;
    this.y = startY;
    this.aX=200;
    this.aY=200;
    this.ScaleBody=0.8;
    this.taleColor="white"
    this.bodyFlip=1;
    this.angle=0;
    this.tailAngle = 0;
    this.tailWaveSpeed = 0.1;
    this.tailAmplitude = 20;
    this.targetX = startX;
    this.lerpSpeed = 0.1; 
    
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    if(frameCount % 140 ==0){
      this.bodyFlip=-this.bodyFlip
      this.targetX = this.x + (this.bodyFlip * 25);
    }
    this.angle+=0.05;
    this.tailAngle += this.tailWaveSpeed;
    if (this.tailAngle > TWO_PI) {
      this.tailAngle -= TWO_PI;
    }
    this.tailWaveSpeed = 0.1 + random(-0.02, 0.02);
    this.tailAmplitude = 20
    this.x = lerp(this.x, this.targetX, this.lerpSpeed);
    
  
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    
    push();
    translate(this.x, this.y);
    scale(this.ScaleBody)
    scale(this.bodyFlip,1);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    translate(229 - this.aX, 255- this.aY);
    let tailWave = sin(this.tailAngle) * this.tailAmplitude;
    rotate(0.5*radians(tailWave));
    
    
    beginShape();//tale
  noStroke();
  fill("#B3F0F8")
  
  vertex(0,0)
  
  bezierVertex(49,-275,166,20,0,0);
  endShape();
  push();
  translate(-20,0);
  noFill();
  stroke(this.taleColor)
  strokeWeight(2)
  arc(120,-50,70,70,PI*1.3,PI + HALF_PI)
  arc(110, -20, 70, 70, PI*1.3,PI + HALF_PI);
  arc(100, 5, 70, 70, PI*1.3,PI + HALF_PI);
  arc(80, 20, 70, 70, PI*1.3,PI + HALF_PI*1.2);
  arc(45, 40, 80, 80, PI + HALF_PI, TWO_PI-QUARTER_PI);
  pop();
  pop();
  
  fill("pink")
  noStroke();
  beginShape();//body
  vertex(167 - this.aX, 238 - this.aY);
  bezierVertex(
    184 - this.aX,
    312 - this.aY,
    284 - this.aX,
    278 - this.aY,
    243 - this.aX,
    233 - this.aY,
  );
  
  endShape();
 
  push();
  translate(-50, -40);

  rotate(radians(-30));
  noStroke();
  fill("white")
  ellipse(0, 0, 80, 60);//left ear
  //stroke(0);
  fill("#B3F0F8")
  ellipse(0, 0, 20, 15);//left ear 2
  pop();
  
  push();
  translate(52, -40);
  rotate(radians(30));
  noStroke();
  fill("white")
  ellipse(0, 0, 80, 60);//right ear
  //stroke(0);
  fill("#B3F0F8")
  ellipse(0, 0, 20, 15);//right ear 2
  pop();
  fill("white")
  noStroke();
  ellipse(0, 0, 120, 90);//face
  noStroke();
  for (let i = 0; i < 4; i ++) {
    push();
    translate(-15, -45);
    rotate(radians((180/4) * i));
    fill("pink")
    ellipse(0, 0, 20, 8);
    pop();
  }
  fill("white")
  circle(-15,-45,5)

  push();
  translate(0,-8)
  rotate(radians(sin(2*this.angle))*10)
  noFill();
  
  
  beginShape();//left hand
  stroke("grey");
  strokeWeight(2)
  vertex(183-this.aX,258-this.aY);
  bezierVertex(185-this.aX,235-this.aY,201-this.aX,239-this.aY,199-this.aX,258-this.aY)
  endShape();
  pop();

  push();
  translate(0,-8)
  rotate(radians(sin(2*this.angle))*22);
  noFill();
  
  
  stroke("grey")
  strokeWeight(2)
  beginShape();//right hand
  vertex(225-this.aX,250-this.aY);
  bezierVertex(221-this.aX,235-this.aY,230-this.aX,230-this.aY,244-this.aX,248-this.aY);
  endShape();
  pop();
  fill("#4D3228")//eyes
  circle(-20,-2,25)
  circle(20,-2,25)
  fill("#B3F0F8")
  ellipse(0,5,8,4)//nose
  fill("white")// eye hightlight
  circle(-15,0,10)
  circle(15,0,10)
  circle(-25,3,5)
  circle(25,3,5)
  
  noFill()//mouth
  stroke("#4D3228")
  strokeWeight(2)
  arc(200-200,205-200,30,30,QUARTER_PI, HALF_PI)
  fill("white")
  beginShape();//left foot
  stroke("grey");
  strokeWeight(2)
  vertex(191-this.aX,270-this.aY)
  bezierVertex(179-this.aX,273-this.aY,198-this.aX,293-this.aY,200-this.aX,271-this.aY)
  endShape();
  beginShape();//right foot
  stroke("grey");
  strokeWeight(2)
  vertex(230-this.aX,273-this.aY);
  bezierVertex(230-this.aX,284-this.aY,268-this.aX,290-this.aY,240-this.aX,268-this.aY)
  endShape();
  //cheekblush
  fill("pink")
  noStroke();
  ellipse(-37,10,20,10)
  ellipse(37,10,20,10)
  






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
   
    // this.drawReferenceShapes()

    

    
    
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/