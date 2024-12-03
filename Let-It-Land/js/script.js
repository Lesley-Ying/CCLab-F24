let img1;
let img2;
let mySquare=[];



let mySound;
function preload() {
  img1 = loadImage("assets/scissoropen.png");
  img2 = loadImage("assets/scissorclose.png");

  imgShow = img1;
  mySound = loadSound("assets/scissorsound.mp3");
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas-container');
  puppet = new Puppet();
  //square =new Square();
  
}

function draw() {
  background(0);
  image(imgShow, mouseX, mouseY, 50, 50);

  circle(mouseX + 10, mouseY + 40, 10);

  

  puppet.display();
  puppet.update();
  //square.display();
  //square.update();
  
  

  // Style the text.
  textAlign(CENTER);
  textSize(16);
  fill("white");

  // Display the mouse's coordinates.
  text(
    `x: ${mouseX - windowWidth / 2} y: ${mouseY - windowHeight / 2}`,
    50,
    50
  );
}
class Puppet {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.cutlineRight1 = false;
    this.cutlineLeft1 = false;
    this.rightUparm = 0;
    this.rightElbow = 0;
    this.rightHand = 0;
    this.leftUparm = 0;
    this.leftElbow = 0;
    this.leftHand = 0;
    this.mouthLeftX=-12;
    this.mouthLeftY=-98;
    this.mouthRightX=12;
    this.mouthRightY=-98;
    this.mouthMiddle=-99;
    this.stringtransparency = 255;
  }
  display() {
    push();
    translate(this.x, this.y);
    //scale(-1,1);
    fill("white");
    stroke(0);
    rect(-10, -81, 20, 40);
    



    ellipse(0, -120, 80, 90);//face
    // //shoulder
    // circle(-40, -60, 30);
    // circle(40, -60, 30);
    //earrings
    fill("#9E150B");
    circle(-40,-100,10);
    circle(40,-100,10);
    //eyes
    //if(frameCount%140==0){
    push();
    translate(-5, 4);
    beginShape();
    fill("brown")
    vertex(725 - this.x, 240 - this.y);
    bezierVertex(714 - this.x, 237 - this.y, 706 - this.x, 236 - this.y, 695 - this.x, 238 - this.y);
    endShape();
    pop();

    push();
    translate(7, 4);
    scale(-1, 1);
    beginShape();
    fill("brown");
    vertex(725 - this.x, 240 - this.y);
    bezierVertex(714 - this.x, 237 - this.y, 706 - this.x, 236 - this.y, 695 - this.x, 238 - this.y);
    endShape();
    
    pop();

    push();
    translate(0, 5);
    noFill();
    beginShape();
    vertex(-11, -125);
    bezierVertex(-16, -122, -26, -122, -29, -127);
    endShape();
    fill("rgb(5,85,5)");
    noStroke();
    ellipse(-21,-125,9,4);
    pop();
    push();
    translate(5, 5);
    noFill();
    scale(-1, 1);
    beginShape();
    vertex(-11, -125);
    bezierVertex(-16, -122, -26, -122, -29, -127);
    endShape();
    fill("rgb(5,85,5)");
    noStroke();
    ellipse(-19,-125,9,4);
    pop();
    //}
    //eyebrow
    push();
    noFill();
    beginShape();
    translate(0,5);
    vertex(-6,-131);
    bezierVertex(-15,-140,-23,-139,-33,-137);
    endShape();
    pop();

    push();
    noFill();
    beginShape();
    translate(5,5);
    scale(-1,1);
    vertex(-6,-131);
    bezierVertex(-15,-140,-23,-139,-33,-137);
    endShape();
    pop();
    //mouth 下唇
    push();
    beginShape();
    fill("#9E150B")
   noStroke();
    vertex(this.mouthLeftX,this.mouthLeftY);
    bezierVertex(-8,-89,5,-89,this.mouthRightX,this.mouthRightY);
    endShape();
    pop();
    //mouth 上唇
    push();
    translate(0,1);
    beginShape();
    noStroke();
    fill("#9E150B");
    vertex(this.mouthLeftX,this.mouthLeftY);
    bezierVertex(-6,-103,-4,-103,0,this.mouthMiddle);
    endShape();
    pop();
    push();
    translate(0,1);
    scale(-1,1);
    fill("#9E150B");
    beginShape();
    noStroke();
    vertex(this.mouthLeftX,this.mouthLeftY);
    bezierVertex(-6,-103,-4,-103,0,this.mouthMiddle);
    endShape();
    pop();
    //hat
    push();
    translate(-10,-160);
    rotate(-0.3);
    fill("#9E150B")
    ellipse(0,0,100,40);
    pop();
    beginShape();
    stroke("white")
    noFill();
    vertex(24,-201);
    bezierVertex(27,-181,10,-160,-7,-155);
    endShape();

  
    






   //body
   fill("white");
   noStroke();
   triangle(0,-22,-127,171,127,171);
   stroke(0);
   rect(-28,-10,55,60,10);//connect
    rect(-50, -65, 95, 80, 20, 20, 50, 50);
    
    
    //dress
    push();
    translate(0,0);
    stroke(0);
    beginShape();
    vertex(-26,34);
    bezierVertex(-64,53,-117,97,-127,171);
    endShape();

    push();
    translate(0,0);
    scale(-1,1);
    stroke(0);
    beginShape();
    vertex(-26,34);
    bezierVertex(-64,53,-117,97,-127,171);
    endShape();
    pop();

    push();
    beginShape();
    vertex(-127,171);
    bezierVertex(-60,206,52,206,127,171);
    endShape();
    pop();

    

    



    rightArm(0, 0);
    leftArm(0, 0);
    //shoulder
    fill("white");
    stroke(0);
    circle(-40, -60, 30);
    circle(40, -60, 30);

    
    //     push();
    //     translate();
    //     circle(95,-38,30);
    //     rotate(0.5);
    //     rect(10,-85,60,15,10);

    //     pop();

    pop();
    
  }
  update() {
    if (mouseIsPressed == true) {
      imgShow = img2;
    } else {
      imgShow = img1;
    }

    if (this.cutlineRight1 == true) {
      this.rightUparm = sin(frameCount * 0.01);
      this.rightElbow = sin(frameCount * 0.01);
      this.rightHand = sin(frameCount * 0.01);

      if (this.stringtransparency > 0) {
        this.stringtransparency -= 2;
      }
      this.mouthRightY=-96;
      this.mouthLeftY=-96;
      
    }
    if (this.cutlineLeft1 == true) {
      this.leftUparm = sin(frameCount * 0.01);
      this.leftElbow = sin(frameCount * 0.01);
      this.leftHand = sin(frameCount * 0.01);
    }
  }
}

function mousePressed() {
  mySound.play();
  if (
    mouseX + 10 > 888 &&
    mouseX + 10 < 912 &&
    mouseY + 40 > 20 &&
    mouseY < 229
  ) {
    puppet.cutlineRight1 = true;
  }
  if (
    mouseX + 10 > 601 &&
    mouseX + 10 < 656 &&
    mouseY + 40 < 222 &&
    mouseY + 40 > 70
  ) {
    puppet.cutlineLeft1 = true;
  }
}

function rightArm(a, b) {
  push();
  stroke(0);
  translate(a + 40, b - 55);

  rotate(0.3 * puppet.rightUparm);

  // upper arm
  push();
  rotate(0.5);
  rect(-10, -15, 60, 15, 10);
  pop();

  // elbow
  circle(55, 22, 30);

  // forearm, wrist & hand
  push();
  translate(55, 22);
  rotate(-0.7 + 0.8 * puppet.rightElbow);

  // forearm
  rect(0, 0, 70, 15, 10);

  // wrist
  circle(70, 10, 25);

  // hand
  push();
  translate(70, 10);
  rotate(0.7 + 0.7 * puppet.rightHand);
  ellipse(20, 0, 40, 20);
  //stringcutdown
  if (puppet.cutlineRight1 == true) {
    push();
    translate(0, 0);
    rotate(-0.7);
    beginShape();
    noFill();
    stroke("rgba(255,255,255,puppet.stringtransparency)");

    vertex(0, 0);
    bezierVertex(8, 1, 34, 60, 56, 30);
    endShape();
    pop();
  }
  pop();

  pop();

  // pop();




  //string
  if (puppet.cutlineRight1 == false) {
    beginShape();
    noFill();
    stroke("white");
    vertex(130, -240);
    bezierVertex(160, -44, 130, 60, 107.5, -6);
    endShape();
  }

  //stringcut down
  // if (puppet.cutlineRight1 == true) {
  //   beginShape();
  //   noFill();
  //   stroke("white");
  //   vertex(107.5, -6);
  //   bezierVertex(165 - 40, -23 + 60, 191 - 40, -21 + 60, 193 - 40, -32 + 60);
  //   endShape();
  // }
  pop();
  if (puppet.cutlineRight1 == true) {
    push();
    stroke(0);
    translate(a, b);
    //stringcut up
    beginShape();
    noFill();
    stroke("rgba(255,255,255,puppet.stringtransparency)");
    vertex(170, -300);
    bezierVertex(219, -273, 206, -228, 168, -242);
    endShape();
    pop();
  }

}
function leftArm(c, d) {
  push();
  stroke(0);
  translate(c - 40, d - 55);
  rotate(1.5 * puppet.leftUparm);
  //upper arm
  push();
  rotate(0.5);
  rect(-60, -13, 60, 15, 10);
  pop();
  //elbow
  circle(-55, -40, 30);
  push();
  translate(-55, -40);
  rotate(-1.3 + 0.5 * puppet.leftElbow); //-1.3
  //forearm
  rect(-65, -5, 70, 15, 10);
  //wrist
  circle(-65, 0, 30);
  //hand
  push();
  translate(-65, 0);
  rotate(-0.3 + 0.5 * puppet.leftHand);
  ellipse(-20, 0, 40, 20);
  pop();

  pop();
  if (puppet.cutlineLeft1 == false) {
    beginShape();
    noFill();
    stroke("white");
    vertex(-98 + 40, -300 + 55);
    bezierVertex(-122 + 40, -226 + 55, -70 + 40, -160 + 55, -95 + 40, -99 + 55);
    endShape();
  }

  pop();
  if (puppet.cutlineLeft1 == true) {
    push();
    translate(c, d);
    rotate(0);
    stroke("white");
    beginShape();
    noFill();
    vertex(-99, -300);
    bezierVertex(-115, -270, -91, -253, mouseX + 10 - c, mouseY + 40 - d);
    endShape();
  }
}
// class Square{
//   constructor(){
//     this.x=windowWidth/2;
//     this.y=0;
    

//   }
//   display(){
//     for(i=0;i<30;i++){
//       rect(this.x,this.y+10*i,10,10)
//     }
//   }
//   update(){
//     if(puppet.cutlineRight1==true && puppet.cutlineLeft1==true){
//       this.x=this.x+random([-1,1]);
//     }
//   }
// }