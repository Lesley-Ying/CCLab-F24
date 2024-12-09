let img1;
let img2;
let img3;
let im4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let squares = [];
let squareHeight = 10;
let squareNumber = 150;
let waveAmplitude = 20;
let waveSpeed = 0.03;
let horizontalAmplitude = 100;
let horizontalSpeed = 0.01;
let mySound;

function preload() {
  mySound = loadSound("assets/scissorsound.mp3");
  tearSound = loadSound("assets/dripping.wav");
  img1 = loadImage("assets/scissoropen.png");
  img2 = loadImage("assets/scissorclose.png");
  img3 = loadImage("assets/1.png");
  img4 = loadImage("assets/2.png");
  img5 = loadImage("assets/3.png");
  img6 = loadImage("assets/4.png");
  img7 = loadImage("assets/5.png");
  img8 = loadImage("assets/6.png");
  img9 = loadImage("assets/test tube empty.png");
  img10 = loadImage("assets/test tube half.png");
  img11 = loadImage("assets/test tube full.png");
  img12 = loadImage("assets/test tube pour.png");
  img13 = loadImage("assets/test tube pour 2.png");
  img14 = loadImage("assets/test tube pour 3.png");
  img15 = loadImage("assets/congrats.png");
  img16 = loadImage("assets/try.png");
  img17 = loadImage("assets/blank.png");
  img18 = loadImage("assets/heart.png")

  imgShow = img1;
  imgShowTube = img9;
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas-container');

  for (let i = 0; i < squareNumber; i++) {
    squares.push(new Square(i * squareHeight)); // x position for each rectangle

  }
  puppet = new Puppet();

}

function draw() {
  background(0);
  for (let i = 0; i < squares.length; i++) {
    squares[i].update();
    squares[i].display();

  }
  puppet.update();
  puppet.display();

  image(imgShow, mouseX, mouseY, 50, 50);
  image(imgShowTube, puppet.tubeX, puppet.tubeY, puppet.tubeWidth, puppet.tubeHeight);
  if (puppet.showHeart == true) {
    image(img18, puppet.x - 25, puppet.y - 40, 25, 25);
  }


  let yOffset4 = sin(frameCount * waveSpeed) * waveAmplitude;
  let yOffset5 = sin(frameCount * waveSpeed + PI / 2) * waveAmplitude;
  let yOffset6 = sin(frameCount * waveSpeed + PI) * waveAmplitude;
  let yOffset7 = sin(frameCount * waveSpeed + (3 * PI) / 2) * waveAmplitude;
  let yOffset8 = sin(frameCount * waveSpeed + (4 * PI) / 2) * waveAmplitude;


  let xOffset4 = sin(frameCount * horizontalSpeed) * horizontalAmplitude;
  let xOffset5 = sin(frameCount * horizontalSpeed + PI / 2) * horizontalAmplitude;
  let xOffset6 = sin(frameCount * horizontalSpeed + PI) * horizontalAmplitude;
  let xOffset7 = sin(frameCount * horizontalSpeed + (3 * PI) / 2) * horizontalAmplitude;
  let xOffset8 = sin(frameCount * horizontalSpeed + (4 * PI) / 2) * horizontalAmplitude;


//pools of "bad emotions"
  image(img4, xOffset4 + windowWidth / 2 - 500, 2.5 * windowHeight / 3 + yOffset4, 200, 100);
  image(img5, xOffset5 + windowWidth / 2 - 300, 2.5 * windowHeight / 3 + yOffset5, 200, 100);
  image(img6, xOffset6 + windowWidth / 2 + 200, 2.5 * windowHeight / 3 + yOffset6, 200, 100);
  image(img7, xOffset7 + windowWidth / 2 + 400, 2.5 * windowHeight / 3 + yOffset7, 200, 100);
  image(img8, xOffset8 + windowWidth / 2 - 50, 2.5 * windowHeight / 3 + yOffset8, 200, 150);





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
    this.tear = 255;
    this.tear2 = 255;
    this.squaretrans = 255;
    this.swingAmplitude = 3;
    this.swingSpeed = 0.02;
    this.rotationAmplitude = 0.02;
    this.swingOffset = 0;
    this.rotationOffset = 0;
    this.swingOffset = 0;
    this.leftswing2 = 0;
    this.leftSwingAngle2 = 0;
    this.leftSwingAmplitude2 = 1;
    this.leftSwingDecrease2 = 0.995;
    this.cutponit2X = 0;
    this.cutponit2Y = 0;
    this.squareFrame = 0;
    this.tubeChange = 0;
    this.tubeWidth = 80;
    this.tubeHeight = 160;
    this.tubeX = windowWidth / 5;
    this.tubeY = windowHeight / 2;
    this.soundEnabled = true;
    this.happy1 = 0;
    this.happy2 = 0;
    this.showHeart = false;

  }
  display() {

    //cut right string
    if (this.cutlineRight1 == true) {
      push();
      translate(130 + windowWidth / 2 - 40 + 45 + 5, -240 + windowHeight / 2 + 55 - 40);
      rotate(this.rightswing1);
      beginShape();
      noFill();
      stroke("white");
      vertex(0, 0);
      bezierVertex(160 + windowWidth / 2 - 40 - (130 + windowWidth / 2 - 40) - 30, -44 + windowHeight / 2 - (-240 + windowHeight / 2 + 55) - 200, 130 + windowWidth / 2 - 40 - (130 + windowWidth / 2 - 40), 60 + windowHeight / 2 - (-240 + windowHeight / 2 + 55) - 150, this.cutponit2X - (130 + windowWidth / 2 - 40 + 45 + 5), this.cutponit2Y - (-240 + windowHeight / 2 + 55 - 40));
      endShape();
      fill("red");
      circle(0, -10, 10)
      pop();
    }

    if (this.cutlineLeft1 == true) {
      push();
      translate(-99 + windowWidth / 2, -300 + windowHeight / 2 + 55);
      rotate(this.leftswing2);

      stroke("white");
      fill("red");
      circle(0, 0, 10)
      beginShape();
      noFill();
      vertex(0, 0);
      bezierVertex(-115 + windowWidth / 2 - (-99 + windowWidth / 2), -270 + windowHeight / 2 + 55 - (-300 + windowHeight / 2 + 55), -91 + windowWidth / 2 - (-99 + windowWidth / 2), -253 + windowHeight / 2 + 55 - (-300 + windowHeight / 2 + 55), this.cutpointX - (-99 + windowWidth / 2), this.cutponitY - (-300 + windowHeight / 2 + 55));
      endShape();
      pop();
    }

    //string right original
    if (puppet.cutlineRight1 == false) {
      push();
      translate(130 + windowWidth / 2 - 40 + 45 + 5, -240 + windowHeight / 2 + 55 - 40);
      rotate(-this.rotationOffset);
      beginShape();
      noFill();
      stroke("white");
      vertex(0, 0);

      bezierVertex(160 + windowWidth / 2 - 40 - (130 + windowWidth / 2 - 40), -44 + windowHeight / 2 - (-240 + windowHeight / 2 + 55), 130 + windowWidth / 2 - 40 - (130 + windowWidth / 2 - 40), 60 + windowHeight / 2 - (-240 + windowHeight / 2 + 55), 112.5 + windowWidth / 2 - 40 - (130 + windowWidth / 2 - 40), -19 + windowHeight / 2 - (-240 + windowHeight / 2 + 55));
      endShape();
      fill("red");
      circle(0, -10, 10)
      pop();
    }


    //string left original
    if (puppet.cutlineLeft1 == false) {
      push();
      translate(-99 + windowWidth / 2, -300 + windowHeight / 2 + 55);
      rotate(-this.rotationOffset);
      stroke("white");
      fill("red");
      circle(0, 0, 10)
      beginShape();
      noFill();
      vertex(0, 0);
      bezierVertex(-115 + windowWidth / 2 - (-99 + windowWidth / 2), -270 + windowHeight / 2 + 55 - (-300 + windowHeight / 2 + 55), -91 + windowWidth / 2 - (-99 + windowWidth / 2), -253 + windowHeight / 2 + 55 - (-300 + windowHeight / 2 + 55), -95 + windowWidth / 2 + 20 - (-98 + windowWidth / 2 + 20) + 15, -99 + windowHeight / 2 + 15 - (-210 + windowHeight / 2) + 40);
      endShape();
      pop();
    }

    push();
    image(img3, windowWidth / 2 - 165, windowHeight / 12.5, 400, 175);//flawless emotion
    translate(this.x + this.swingOffset, this.y + this.move);
    rotate(this.rotationOffset);
    scale(0.8);
    fill("white");
    stroke(0);
    rect(-10, -81, 20, 40);
    ellipse(0, -120, 80, 90);//face

    if (this.cutlineRight1 == true) {
      fill(0, 135, 255, this.tear);
      noStroke();
      ellipse(25, -105, 5, 10);
      ellipse(-25, -105, 5, 10);
    }
    if (this.cutlineLeft1 == true) {
      fill(0, 135, 255, this.tear2);
      noStroke();
      ellipse(25, -105, 5, 10);
      ellipse(-25, -105, 5, 10);
    }


    //earrings
    fill("#9E150B");
    circle(-40, -100, 10);
    circle(40, -100, 10);
    //eyes
    stroke(0);
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
    this.drawHat();

    //dress
    this.drawDress();
    //call arm
    rightArm(0, 0);
    leftArm(0, 0);
    //shoulder
    fill("white");
    stroke(0);
    circle(-40, -60, 30);
    circle(40, -60, 30);

    pop();
  }
  drawHat() {
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

  }
  drawDress() {
    fill("white");
    noStroke();
    triangle(0, -22, -127, 171, 127, 171);
    stroke(0);
    rect(-28, -10, 55, 60, 10);//connect
    rect(-50, -65, 95, 80, 20, 20, 50, 50);

    push();
    translate(0, 0);
    stroke(0);
    beginShape();
    vertex(-26, 34);
    bezierVertex(-64, 53, -117, 97, -127, 171);
    endShape();
    pop()

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
  }
  
  update() {
    this.swingOffset = sin(frameCount * this.swingSpeed) * this.swingAmplitude;
    this.rotationOffset = sin(frameCount * this.swingSpeed) * this.rotationAmplitude;
    this.y += this.move;
    
    //scissor switch
    if (mouseIsPressed == true) {
      imgShow = img2;
    } else {
      imgShow = img1;
    }
    
    
    if (this.cutlineRight1 == true) {
      if (this.tear > 0) {
        this.tear -= 2;
      }
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
        this.rightSwingAmplitude *= this.rightSwingDecrease;
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
    };

    if (this.cutlineLeft1 == true) {
      this.leftswing2 = sin(this.leftSwingAngle2) * this.leftSwingAmplitude2;
      this.leftSwingAmplitude2 *= this.leftSwingDecrease2;

      this.leftSwingAngle2 += 0.015;

      if (this.leftSwingAmplitude2 < 0.01) {
        this.leftswing2 = 0;
      }


      if (this.tear2 > 0) {
        this.tear2 -= 2;
      }

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

    


    if (this.cutlineRight1 == true || this.cutlineLeft1 == true) {
      this.rotationAmplitude = 0.05;
      this.mouthRightY = -96;
      this.mouthLeftY = -96;
      if (this.tubeChange == 0) {
        imgShowTube = img10;
        this.tubeChange = 1
      };
    };
    if (this.cutlineLeft1 == true && this.cutlineRight1 == true) {
      //cursor('grab');
      imgShow = img17;
      if (this.tubeChange == 1) {
        this.tubeChange = 2;
        imgShowTube = img11;
      }
      if (puppet.tubeChange == 2) {
        //text("try the tube",windowWidth/5,windowHeight/2);
        image(img16, windowWidth / 5 - 100, windowHeight / 2, 100, 20);
      }
    }
    if (this.cutlineRight1 == true && this.cutlineLeft1 == true) {
      this.soundEnabled = false;

    }


  }
}

function mousePressed() {

  if (puppet.soundEnabled == true) {
    mySound.play();
  }

  if (
    mouseX + 10 > windowWidth / 2 + 130 &&
    mouseX + 10 < windowWidth / 2 + 160 &&
    mouseY + 40 > 0 &&
    mouseY + 40 < windowHeight / 2 - 6
  ) {
    puppet.cutlineRight1 = true;
    puppet.cutponit2X = mouseX + 10;
    puppet.cutponit2Y = mouseY + 40;


  }
  if (
    mouseX + 10 > windowWidth / 2 - 120 &&
    mouseX + 10 < windowWidth / 2 - 80 &&
    mouseY + 40 < windowHeight / 2 &&
    mouseY + 40 > 100
  ) {
    puppet.cutlineLeft1 = true;
    puppet.cutpointX = mouseX + 10;
    puppet.cutponitY = mouseY + 40;
  }
  if (mouseX > windowWidth / 5 && mouseX < windowWidth / 5 + 80 && mouseY > windowHeight / 2 && mouseY < windowHeight / 2 + 160) {

    if (puppet.tubeChange == 2) {
      tearSound.play();
      puppet.tubeWidth = 160;
      puppet.tubeHeight = 80;
      puppet.tubeY = windowHeight / 2 + 50;
      puppet.tubeChange = 3;

      imgShowTube = img12;
    }

  }
  
}

function rightArm(a, b) {
  push();
  stroke(0);
  translate(a + 40, b - 55);

  rotate(puppet.rightswing + puppet.rightswing1 + puppet.happy1);

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



  pop();



}
function leftArm(c, d) {
  push();
  stroke(0);
  translate(c - 40, d - 55);


  rotate(-puppet.leftswing + puppet.leftswing1 + puppet.happy2);
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

  pop();

}
class Square {
  constructor(startX) {
    // this.x = windowWidth / 2 - 3;
    // this.y = startY;
    this.x = startX;
    this.y = 2.15 * windowHeight / 3;
    //this.speedX = random(-1, 1); // Random horizontal speed
    this.speedY = random(-1, 1);
    this.size = squareHeight;
    this.isBlue = false;
    this.allBlue = false;
    this.squareBlue = false;
    this.squareFrame = 0;
    this.currentSquare = 0;


  }

  display() {

    noStroke();
    if (this.isBlue == true) {
      fill(0, 135, 255); // 蓝色
    } else {
      fill(255); // 白色
    }
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    if (puppet.tubeChange == 3) {

      if (!this.squareBlue) {
        this.squareBlue = true;
        this.squareFrame = frameCount;
      }
      this.currentSquare = floor((frameCount - this.squareFrame) / 2) % squares.length; // change a single square every 2 framcount
      
      if (this.currentSquare < squares.length) {
        squares[this.currentSquare].isBlue = true;

      }
      if (this.currentSquare == 149 && !this.allBlue) {
        this.allBlue = true;

      }

    }

    if (this.allBlue == true) {
      this.y += this.speedY;
      puppet.tubeWidth = 200;
      puppet.tubeHeight = 50;
      imgShowTube = img17;

    } // Update position based on speed
    if (puppet.y + puppet.move + 160 < windowHeight && this.allBlue == true) {
      puppet.move = 0.5
    } else {
      puppet.move = 0;
    }
    if (puppet.move == 0 && this.allBlue == true) {
      puppet.happy1 = -0.9 + sin(frameCount * 0.01);
      puppet.happy2 = 0.9 - sin(frameCount * 0.01);
      imgShowTube = img15;
      document.getElementById("successSentence").style.display = "block";
      puppet.showHeart = true;
      puppet.rotationAmplitude = 0;
      puppet.swingAmplitude = 0;
      //successSound.play();

    }
    if (this.currentSquare > 50 && this.currentSquare < 100 && !this.allBlue) {
      imgShowTube = img13;

    }
    if (this.currentSquare >= 100 && this.currentSquare < 148 && !this.allBlue) {
      imgShowTube = img14;

    }
  }
}

