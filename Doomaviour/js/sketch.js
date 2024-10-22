let xArrayNote1 = [];
let xArrayNote2 = [];
let yArrayNote1 = [];
let yArrayNote2 = [];
let xArrayD = [];
let yArrayD = [];
let note1Num, note2Num;

let disk = 0;
let r = 90;
let coordinateNum = 10;
let randomArray = [];

let from;
let to;
let a = 10;
let c1X = 725;
let c2X = 725;
let c3X = 725;
let c4X = 725;

let squarelocX = 400;
let xSpeed = 5;
let squarelocY = 250;
let ySpeed = 1;
let x2;
let y2;
let Note1Color;
let transparencyA = 0;
let Aspeed = 1;

function setup() {
  let cnv=createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  for (let i = 0; i < 60; i++) {
    randomArray.push(random(0, 5));
  }
}

// function drawbackground() {
//   color change
//   let sinValue = map(sin(frameCount * 0.1), -1, 1, 0, 1);
//   from = color("#C0ECF189");
//   to = color("#E1BAECA5");
//   backgroundColor = lerpColor(from, to, sinValue);

//   //wave texture
//   let waveDistance = 5;
//   for (let i = 0; i < 200; i++) {
//     for (let y = 0; y < height; y++) {
//       let ampli = 100;
//       let frequency = y * 0.01 + 5;
//       let sinValue = sin(frequency) * ampli;
//       let x = -100 + sinValue + i * waveDistance;
//       fill("#201E1E");
//       noStroke();
//       circle(x, y, 0.5);
//     }
//   }
// }

function draw() {
  background("#BAEDF4A8");
  drawRecordPlayer(700, 100);
  //drawbackground();

  

  if (disk == 0) {
    push();
    translate(width / 2 + noise(-150,150), height / 2 + noise(-150,150));
    noStroke();
    let sinValue = map(sin(frameCount * 0.025), -1, 1, 0, 1);
    from = color("rgba(255,255,255,0.52)");
    to = color("#9E9E9EB5");
    backgroundColor = lerpColor(from, to, sinValue);
    fill(backgroundColor);
    beginShape();
    for (let i = 0; i < coordinateNum; i++) {
      let curveVertexX =
        r *
        noise(frameCount * 0.01 + randomArray[i]) *
        cos((2 * PI * i) / coordinateNum);
      let curveVertexY =
        r *
        noise(frameCount * 0.01 + randomArray[i]) *
        sin((2 * PI * i) / coordinateNum);
      curveVertex(curveVertexX, curveVertexY);
      
      
    }
    endShape(CLOSE);
    pop();
  }
  if (disk == 1) {
    Note1Color = "pink";
    r = 80;
    // noStroke();
    // fill("rgba(255,255,255,0.6)")
    // push()
    // translate(30,10);
    // quad(450,220,700,220,500,300,250,300)
    // pop();
    for (let i = 0; i < note1Num; i++) {
      drawNote1(xArrayNote1[i], yArrayNote1[i]);
    }
    for (let i = 0; i < xArrayNote1.length; i++) {
      let noteWave = noise(frameCount * 0.1 +i);
      let moving = map(noteWave, 0, 1, -2, 2);
      xArrayNote1[i] += 0.5;
      yArrayNote1[i] += moving;
    }
    push();
    translate(width / 2 + frameCount * 0.01, height / 2 + frameCount * 0.01);
    //translate(width / 2 +110, height / 2 +20);
    fill(218,124,156,transparencyA);

    transparencyA = transparencyA + Aspeed;
    if (transparencyA >= 100) {
      Aspeed = -Aspeed;
    } else if (transparencyA <= 0) {
      Aspeed = -Aspeed;
    }
    coordinateNum=10;
    beginShape();
    for (let i = 0; i < coordinateNum; i++) {
      noStroke();

      curveVertex(
        r *
          noise(frameCount * 0.1 + randomArray[i]) *
          cos((2 * PI * i) / coordinateNum),
        r *
          noise(frameCount * 0.1 + randomArray[i]) *
          sin((2 * PI * i) / coordinateNum)
      );
    }
    endShape(CLOSE);
    pop();

    //record player working
    push();
    if (c1X < 770) {
      c1X += 0.2;
    } else {
      c1X = 725;
    }
    fill(0);
    circle(c1X, 125, 10);

    pop();

    // corresponding record appear in player
    for (let dia = 55; dia > 20; dia -= 3) {
      stroke("black");
      strokeWeight(1);
      fill("#E6BDCB77"); //A
      circle(750, 78, dia);
    }
  } else if (disk == 2) {
    // push()
    // translate(30,10);
    // noStroke();
    // fill("rgba(255,255,255,0.7)")
    // quad(450,220,700,220,500,300,250,300)
    // pop();
    let backgroundColor = "black";
    for (let i = 0; i < note2Num; i++) {
      drawNote2(xArrayNote2[i], yArrayNote2[i]);
    }
    for (let i = 0; i < xArrayNote2.length; i++) {
      let noteWave = noise(frameCount * 0.1 +i);
      let moving = map(noteWave, 0, 1, -1,1);
      xArrayNote2[i] += 0.5;
      yArrayNote2[i] += moving;
    }
    squarelocX = squarelocX + xSpeed;
    squarelocY = squarelocY + ySpeed;
    if (squarelocX < 0 + 200 || squarelocX > width - 200) {
      xSpeed = -xSpeed;
    }

    if (squarelocY < 0 + 250 || squarelocY > height - 250) {
      ySpeed = -ySpeed;
    }
    push();
    translate(squarelocX, squarelocY);
    for (let i = 0; i < 380; i++) {
      let x2 = random(310, 350) * abs(0.5 * cos(frameCount * 0.01));
      let y2 = random(150, 200) * abs(sin(frameCount * 0.01));
      let angle = random(0, 45);
      push();
      translate(x2, y2);
      rotate(angle);
      angle += 0.2;

      let sinValue = map(sin(frameCount * 0.1), -1, 1, 0, 1);
      from = color("#37E23E");
      to = color("#EE463A");
      backgroundColor = lerpColor(from, to, sinValue);
      fill(backgroundColor);
      noStroke();

      rect(-15, -15, a, a);
      pop();
    }
    pop();
    push();
    if (c2X < 770) {
      c2X += 0.2;
    } else {
      c2X = 725;
    }
    fill(0);
    circle(c2X, 125, 10);

    pop();
    //corresponding record appear
    for (dia = 55; dia > 20; dia -= 3) {
      stroke("black");
      strokeWeight(1);
      fill("rgb(159,203,159)"); //B
      circle(750, 78, dia);
    }
  } else if (disk == 3) {
      r=50;
    r+=15;
    if (r>=100){
      r-=5;
    } else if(r<=20){
      r+=5
    }
    coordinateNum = 55;

    push();
    translate(width / 2 + noise(-50,50), height / 2 + noise(-50,50));
    noStroke();
    fill("white");
    beginShape();
    for (let i = 0; i < coordinateNum; i++) {
      let curveVertexX =
        r *
        noise(frameCount * 0.005 + randomArray[i]) *
        cos((2 * PI * i) / coordinateNum);
      let curveVertexY =
        r *
        noise(frameCount * 0.005 + randomArray[i]) *
        sin((2 * PI * i) / coordinateNum);
      curveVertex(curveVertexX, curveVertexY);
    
    }

    endShape(CLOSE);
    pop();
    for (let i = 0; i < note2Num; i++) {
      drawNote2(xArrayNote2[i], yArrayNote2[i]);
    }
    for (let i = 0; i < xArrayNote2.length; i++) {
       let noteWave = noise(frameCount * 0.1 +i);
      let moving = map(noteWave, 0, 1, -1,1);
      xArrayNote2[i] += 0.5;
      yArrayNote2[i] += moving;
    }
    push();
    if (c3X < 770) {
      c3X += 0.2;
    } else {
      c3X = 725;
    }
    fill(0);
    circle(c3X, 125, 10);
    //corresponding record appear
    pop();
    for (let dia = 55; dia > 20; dia -= 3) {
      stroke("black");
      strokeWeight(1);
      fill("#9FCED4"); //C
      circle(750, 78, dia);
    }
  } else if (disk == 4) {
   
   

    for (let i = 0; i < note2Num; i++) {
      drawNote2(xArrayNote2[i], yArrayNote2[i]);
    }
    for (let i = 0; i < xArrayNote2.length; i++) {
       let noteWave = noise(frameCount * 0.1 +i);
      let moving = map(noteWave, 0, 1, -1,1);
      xArrayNote2[i] += 0.5;
      yArrayNote2[i] += moving;
    }
    push();
    if (c4X < 770) {
      c4X += 0.2;
    } else {
      c4X = 725;
    }
    fill(0);
    circle(c4X, 125, 10);

    pop();
    //corresponding record appear
    for (let dia = 55; dia > 20; dia -= 3) {
      stroke("black");
      strokeWeight(1);
      fill("#EFBE76"); //D
      circle(750, 78, dia);
    }
coordinateNum=10;
    for (let i = 0; i < 5; i++) {
      xArrayD[i] = random(300, 400);
      yArrayD[i] = random(200, 300);
      drawDoomaD(xArrayD[i], yArrayD[i]);
    }
  }

  push(); //shelf start
  translate(20, 250);
  fill("#684C426D");
  noStroke();
  rect(32, 30, 160, 180);
  fill("white");
  rect(50, 50, 120, 140);
  rect(70, 10, 80, 50);
  stroke("black");
  textSize(20);
  strokeWeight(5);
  text("SHELF", 80, 40);

  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#E6BDCB77"); //A
    circle(80, 100, dia);
  }
  for (dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("rgb(159,203,159)"); //B
    circle(140, 100, dia);
  }
  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#9FCED4"); //C
    circle(80, 160, dia);
  }
  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#EFBE76"); //D
    circle(140, 160, dia);
  }

  pop(); //shelf end
}

function mouseClicked() {
  let mouseDist1 = dist(mouseX, mouseY, 100, 350);
  let mouseDist2 = dist(mouseX, mouseY, 160, 350);
  let mouseDist3 = dist(mouseX, mouseY, 100, 410);
  let mouseDist4 = dist(mouseX, mouseY, 160, 410);

  if (mouseDist1 <= 22.5) {
    disk = 1;
    note1Num = floor(random(5, 15));
    for (let i = 0; i < note1Num; i++) {
      xArrayNote1[i] = random(200, 600);
      yArrayNote1[i] = random(100, 150);
    }
  } else if (mouseDist2 <= 22.5) {
    disk = 2;
    note2Num = floor(random(5, 15));
    for (let i = 0; i < note2Num; i++) {
      xArrayNote2[i] = random(width);
      yArrayNote2[i] = random(100, 200);
    }
  } else if (mouseDist3 <= 22.5) {
    disk = 3;
    note2Num = floor(random(5, 15));
    for (let i = 0; i < note2Num; i++) {
      xArrayNote2[i] = random(width);
      yArrayNote2[i] = random(100, 200);
    }
  } else if (mouseDist4 <= 22.5) {
    disk = 4;
    note2Num = floor(random(5, 15));
    for (let i = 0; i < note2Num; i++) {
      xArrayNote2[i] = random(width);
      yArrayNote2[i] = random(100, 200);
    }
  }
}
function drawRecordPlayer(xRP, yRP) {
  push(); //record player
  translate(xRP, yRP);
  scale(0.5);
  fill("black");
  noStroke();
  if (disk == 0) {
    circle(50, 50, 20);
    triangle(90, 70, 90, 100, 120, 85);
  } else {
    rect(85, 70, 7, 20);
    rect(105, 70, 7, 20);
  }
  stroke("black");
  strokeWeight(5);
  line(135, 50, 60, 50);
  fill("black");
  // rect(85, 70, 7, 20);
  // rect(105, 70, 7, 20);
  rect(35, -110, 130, 130);
  fill("rgb(224,212,212)");
  circle(100, -45, 132);
  noStroke();
  fill("rgb(112,83,83)");
  circle(100, -45, 30);
  pop();
}

function drawNote1(x, y) {
  push();
  translate(x, y);
  stroke(Note1Color);
  line(6, 0 - 20, 6, 0);
  fill(Note1Color);
  noStroke();
  ellipse(0, 0, 20, 10);

  pop();
}
function drawNote2(x, y) {
  push();
  translate(x, y);
  stroke("white");
  line(5, 0 - 20, 5, 0);
  line(5 + 30, 0 - 20, 5 + 30, 0);
  line(5, 0 - 20, 5 + 30, 0 - 20);
  noStroke();
  fill("white");
  ellipse(0, 0, 20, 10);
  ellipse(0 + 30, 0, 20, 10);

  pop();
}
function drawDoomaD(xD, yD) {
  push();
  translate(xD, yD);
  noStroke();

  beginShape();
  for (let i = 0; i < coordinateNum; i++) {
    curveVertex(
      r *
        noise(frameCount * 0.01 + randomArray[i]) *
        cos((2 * PI * i) / coordinateNum),
      r *
        noise(frameCount * 0.01 + randomArray[i]) *
        sin((2 * PI * i) / coordinateNum)
    );
  }

  endShape(CLOSE);
  pop();
}






