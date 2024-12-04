let img1;
let img2;
let img3;
let im4;
let img5;
let img6;
let img7;
let img8;
let squares = [];
let squareHeight = 10;
let squareNumber = 100;
let waveAmplitude = 20; 
let waveSpeed = 0.03;   
let horizontalAmplitude = 100; 
let horizontalSpeed = 0.01;   




let mySound;
function preload() {
  img1 = loadImage("assets/scissoropen.png");
  img2 = loadImage("assets/scissorclose.png");
  img3 = loadImage("assets/1.png");
  img4 = loadImage("assets/2.png");
  img5 = loadImage("assets/3.png");
  img6 = loadImage("assets/4.png");
  img7=loadImage("assets/5.png");

  imgShow = img1;
  mySound = loadSound("assets/scissorsound.mp3");
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas-container');
  for (let i = 0; i < squareNumber; i++) {
    squares.push(new Square(i * squareHeight)); // y position for each rectangle

  }
  puppet = new Puppet();

}

function draw() {
  background(0);
  image(imgShow, mouseX, mouseY, 50, 50);
  circle(mouseX + 10, mouseY + 40, 10);//helping circle

  //image(img3,0,100,650,650);



  for (let i = 0; i < squares.length; i++) {
    squares[i].display();
    squares[i].update();
  }


  
  puppet.display();
  puppet.update();

  let yOffset4 = sin(frameCount * waveSpeed) * waveAmplitude;
  let yOffset5 = sin(frameCount * waveSpeed + PI / 2) * waveAmplitude; 
  let yOffset6 = sin(frameCount * waveSpeed + PI) * waveAmplitude;    
  let yOffset7 = sin(frameCount * waveSpeed + (3 * PI) / 2) * waveAmplitude;

  
  let xOffset4 = sin(frameCount * horizontalSpeed) * horizontalAmplitude;
  let xOffset5 = sin(frameCount * horizontalSpeed + PI / 2) * horizontalAmplitude; 
  let xOffset6 = sin(frameCount * horizontalSpeed + PI) * horizontalAmplitude;     
  let xOffset7 = sin(frameCount * horizontalSpeed + (3 * PI) / 2) * horizontalAmplitude;

  

 
  image(img4, xOffset4-500, windowHeight / 3 + yOffset4, 200, 100);
  image(img5, xOffset5-200, windowHeight / 3 + yOffset5, 200, 100);
  image(img6, xOffset6+200, windowHeight / 3 + yOffset6, 200, 100);
  image(img7, xOffset7+400, windowHeight / 3 + yOffset7, 200, 100);

  image(img3,-340,-windowHeight/1.5,700,300)
    
  







  // Style the text.
  textAlign(CENTER);
  textSize(16);
  fill("white");

  // Display the mouse's coordinates.
  text(
    `x: ${mouseX} y: ${mouseY}`,
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
    this.mouthLeftX = -12;
    this.mouthLeftY = -98;
    this.mouthRightX = 12;
    this.mouthRightY = -98;
    this.mouthMiddle = -99;
    this.cutpointX = 0;
    this.cutpointY = 0;
    this.move = 0;
    this.leftswing = 0;
    this.leftswing1 = 0;
    this.rightswing1 = 0;
    this.leftSwingStarted = false;
    this.rightSwingStarted = false;
    this.leftswingfore = 0;
    this.leftswinghand = 0;
    this.rightswingfore = 0;
    this.rightswing = 0;
    this.rightswinghand = 0;
    this.tear=255;
    this.tear2=255;
    this.squaretrans=255;
  }
  display() {
    push();
    // image(img3,mouseX,mouseY,100,100)
    // image(img4,windowWidth/2-50,windowHeight/2+windowHeight/4,100,100);

    translate(this.x, this.y + this.move)


    scale(0.8);
    //scale(-1,1);
    fill("white");
    stroke(0);
    rect(-10, -81, 20, 40);
    ellipse(0, -120, 80, 90);//face


    //earrings
    fill("#9E150B");
    circle(-40, -100, 10);
    circle(40, -100, 10);
    //eyes
    push();
    translate(0, 0);
    beginShape();
    fill("brown");
    vertex(-10, -120);
    bezierVertex(-16, -123.5, -28, -123.5, -33, -120.5);
    endShape();
    pop();
    push();
    translate(5, 0);
    scale(-1, 1);

    beginShape();
    fill("brown");
    vertex(-10, -120);
    bezierVertex(-16, -123.5, -28, -123.5, -33, -120.5);
    endShape();
    pop();




    push();
    translate(0, 5);
    noFill();
    beginShape();
    vertex(-11, -125);
    bezierVertex(-16, -122, -26, -122, -29, -128);
    endShape();
    fill("rgb(5,85,5)");
    noStroke();
    ellipse(-21, -125, 9, 4);
    pop();
    push();
    translate(5, 5);
    noFill();
    scale(-1, 1);
    beginShape();
    vertex(-11, -125);
    bezierVertex(-16, -122, -26, -122, -29, -128);
    endShape();
    fill("rgb(5,85,5)");
    noStroke();
    ellipse(-19, -125, 9, 4);
    pop();

    //eyebrow
    push();
    noFill();
    beginShape();
    translate(0, 5);
    vertex(-6, -131);
    bezierVertex(-15, -140, -23, -139, -33, -137);
    endShape();
    pop();

    push();
    noFill();
    beginShape();
    translate(5, 5);
    scale(-1, 1);
    vertex(-6, -131);
    bezierVertex(-15, -140, -23, -139, -33, -137);
    endShape();
    pop();
    //mouth 下唇
    push();
    beginShape();
    fill("#9E150B")
    noStroke();
    vertex(this.mouthLeftX, this.mouthLeftY);
    bezierVertex(-8, -89, 5, -89, this.mouthRightX, this.mouthRightY);
    endShape();
    pop();
    //mouth 上唇
    push();
    translate(0, 1);
    beginShape();
    noStroke();
    fill("#9E150B");
    vertex(this.mouthLeftX, this.mouthLeftY);
    bezierVertex(-6, -103, -4, -103, 0, this.mouthMiddle);
    endShape();
    pop();
    push();
    translate(0, 1);
    scale(-1, 1);
    fill("#9E150B");
    beginShape();
    noStroke();
    vertex(this.mouthLeftX, this.mouthLeftY);
    bezierVertex(-6, -103, -4, -103, 0, this.mouthMiddle);
    endShape();
    pop();
    //hat
    push();
    translate(-10, -160);
    rotate(-0.3);
    fill("#9E150B")
    ellipse(0, 0, 100, 40);
    pop();
    beginShape();
    stroke("white")
    noFill();
    vertex(24, -201);
    bezierVertex(27, -181, 10, -160, -7, -155);
    endShape();

    //body
    fill("white");
    noStroke();
    triangle(0, -22, -127, 171, 127, 171);
    stroke(0);
    rect(-28, -10, 55, 60, 10);//connect
    rect(-50, -65, 95, 80, 20, 20, 50, 50);


    //dress
    push();
    translate(0, 0);
    stroke(0);
    beginShape();
    vertex(-26, 34);
    bezierVertex(-64, 53, -117, 97, -127, 171);
    endShape();

    push();
    translate(0, 0);
    scale(-1, 1);
    stroke(0);
    beginShape();
    vertex(-26, 34);
    bezierVertex(-64, 53, -117, 97, -127, 171);
    endShape();
    pop();

    push();
    beginShape();
    vertex(-127, 171);
    bezierVertex(-60, 206, 52, 206, 127, 171);
    endShape();
    pop();







    rightArm(0, 0);
    leftArm(0, 0);
    //shoulder
    fill("white");
    stroke(0);
    circle(-40, -60, 30);
    circle(40, -60, 30);

    pop();
    
    
    

  }
  update() {
    if (mouseIsPressed == true) {
      imgShow = img2;
    } else {
      imgShow = img1;
    }

    if (this.cutlineRight1 == true) {
      fill(8,35,185,this.tear);
      this.tear-=2;
      //this.squaretrans-=0.5;
      noStroke();
      ellipse(25,-105,5,10);
      ellipse(-25,-105,5,10);

      if (this.rightswing < 0.5) {
        this.rightswing += 0.05;
      } else {

        if (!this.rightSwingStarted) {
          this.rightSwingStarted = true;
          this.rightSwingAngle = 0;
          this.rightSwingAmplitude = 1;
          this.rightSwingDecrease = 0.995;
        }

        this.rightSwingAngle += 0.02; // speed
        this.rightSwingAmplitude *= this.rightSwingDecrease; // 逐渐减小幅度


        this.rightswing1 = sin(this.rightSwingAngle) * this.rightSwingAmplitude;


        if (this.rightSwingAmplitude < 0.01) {
          this.rightswing1 = 0;
        }


      }
      if (this.rightswingfore < 1.5) {
        this.rightswingfore += 0.01
      }
      if (this.rightswinghand < 0.5) {
        this.rightswinghand += 0.01;
      }

      this.rightElbow = sin(frameCount * 0.01);
      this.rightHand = sin(frameCount * 0.01);
      this.mouthRightY=-96;
      this.mouthLeftY=-96;





    };
    if (this.cutlineLeft1 == true) {
      fill(8,35,185,this.tear2);
      this.tear2-=2;
      //this.squaretrans-=0.5;
      noStroke();
      ellipse(25,-105,5,10);
      ellipse(-25,-105,5,10);

      if (this.leftswingfore < 1.5) {
        this.leftswingfore += 0.05
        // console.log(puppet.leftswingfore)
      }
      if (this.leftswinghand < 0.5) {
        this.leftswinghand += 0.02
      }


      if (this.leftswing < 1.8) {
        this.leftswing += 0.07;
      } else {
        if (!this.leftSwingStarted) {
          this.leftSwingStarted = true;
          this.leftSwingAngle = 0;
          this.leftSwingAmplitude = 1;
          this.leftSwingDecrease = 0.995;
          this.leftSwingDirection = -1;
        }


        this.leftSwingAngle += 0.015 * this.leftSwingDirection;
        console.log(this.leftSwingAngle);


        if (this.leftSwingAngle < -0.7) {
          this.leftSwingDirection = 1;
        }


        this.leftSwingAmplitude *= this.leftSwingDecrease;


        this.leftswing1 = sin(this.leftSwingAngle) * this.leftSwingAmplitude;


        if (this.leftSwingAmplitude < 0.01) {
          this.leftswing1 = 0;
        }
      }





    }



    if (this.cutlineLeft1 == true && this.cutlineRight1 == true) {
      this.squaretrans-=1;
      if (this.y + this.move + 160 < windowHeight) {
        this.move = 0.2
      } else {
        this.move = 0;
        console.log(this.move)
      }
      this.y += this.move;

    }
  }
}

function mousePressed() {
  mySound.play();
  if (
    mouseX + 10 > windowWidth / 2 + 130 &&
    mouseX + 10 < windowWidth / 2 + 160 &&
    mouseY + 40 > 0 &&
    mouseY + 40 < windowHeight / 2 - 6
  ) {
    puppet.cutlineRight1 = true;

  }
  if (
    mouseX + 10 > windowWidth / 2 - 92 &&
    mouseX + 10 < windowWidth / 2 - 50 &&
    mouseY + 40 < windowHeight / 2 - 44 &&
    mouseY + 40 > 0
  ) {
    puppet.cutlineLeft1 = true;

    puppet.cutpointX = mouseX + 10;
    puppet.cutponitY = mouseY + 40;
  }
}

function rightArm(a, b) {
  push();
  stroke(0);
  translate(a + 40, b - 55);

  rotate(puppet.rightswing + puppet.rightswing1);

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
  rotate(-0.7 + puppet.rightswingfore + puppet.rightswing1);
  //rotate(0.9);
  // forearm
  rect(0, -5, 70, 15, 10);

  // wrist
  circle(70, 10, 25);

  // hand
  push();
  translate(70, 10);
  rotate(0.7 - puppet.rightswinghand + puppet.rightswing1);
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


  rotate(-puppet.leftswing + puppet.leftswing1);
  //upper arm
  push();
  rotate(0.5);
  rect(-60, -13, 60, 15, 10);
  pop();
  //elbow
  circle(-55, -40, 30);
  push();
  translate(-55, -40);


  rotate(-1.3 + puppet.leftswingfore + puppet.leftswing1); //-1.3
  //forearm
  rect(-65, -5, 70, 15, 10);
  //wrist
  circle(-65, 0, 30);
  //hand
  push();
  translate(-65, 0);
  rotate(-0.3 + puppet.leftswinghand + puppet.leftswing1);
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
    bezierVertex(-115, -270, -91, -253, (puppet.cutpointX - windowWidth / 2) / 0.8, (puppet.cutponitY - windowHeight / 2) / 0.8);
    endShape();
  }
}
class Square {
  constructor(startY) {
    this.x = windowWidth / 2 - 3;
    this.y = startY;
    this.speedX = random(-1, 1); // Random horizontal speed
    this.size = squareHeight;
  }

  display() {
    fill(255,255,255,puppet.squaretrans);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    if (puppet.cutlineRight1 == true &&
      puppet.cutlineLeft1 == true) {
      this.x += this.speedX;
    } // Update position based on speed
  }
}
