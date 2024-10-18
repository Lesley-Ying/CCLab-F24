let angle = 0;
let bgColor = "white";
let x1Array = [];
let y1Array = [];
let initialSizeOfArray = 200;
let r = 80;
let coordinateNum = 10;
let randomArray = [];
let mouseClick = 0;
let c1X = 725;

function setup() {
  let cnv=createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
  for (let i = 0; i < coordinateNum; i++) {
    randomArray.push(random(0, 3));
  }
  for (let i = 0; i < initialSizeOfArray; i++) {
    x1Array[i] = random(0, width);
    y1Array[i] = random(100, 200);
  }
}

function draw() {
  //let bgColor='white'
  background(bgColor);

  push();
  // scale(2)

  let waveDistance = 5;

  for (let i = 0; i < 200; i++) {
    for (let y = 0; y < height; y++) {
      let ampli = 100;
      let frequency = y * 0.01 + frameCount * 0.1;
      let sinValue = sin(frequency) * ampli;
      let x = -100 + sinValue + i * waveDistance;
      fill("#201E1E");
      noStroke();
      circle(x, y, 0.5);
    }
  }
  pop();

  // drawRecordA(
  //   width / 2 + frameCount * 0.1,
  //   height / 2 + frameCount * 0.1,
  //   random(-50, 50)
  // );
  //drawRecordB(random(-5,5))

  push(); //record player
  translate(700, 100);
  scale(0.5);
  fill("black");
  noStroke();
  if (mouseClick == 0) {
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

  push(); //shelf
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

  pop();

  if (mouseClick == 0) {
    push();

    translate(width / 2 + frameCount * 0.1, height / 2 + frameCount * 0.1);
    beginShape();
    for (let i = 0; i < coordinateNum; i++) {
      noStroke();
      fill("rgb(245,245,205)");
      // circle(
      //   r * noise(frameCount * 0.05 + randomArray[i]) * cos((2 * PI * i) / coordinateNum),
      //   r * noise(frameCount * 0.05 + randomArray[i]) * sin((2 * PI * i) / coordinateNum),
      //   5
      // );
      curveVertex(
        r *
          noise(frameCount * 0.05 + randomArray[i]) *
          cos((2 * PI * i) / coordinateNum),
        r *
          noise(frameCount * 0.05 + randomArray[i]) *
          sin((2 * PI * i) / coordinateNum)
      );
    }
    endShape(CLOSE);
    pop();
  }

  drawRecordA(
    width / 2 + frameCount * 0.1,
    height / 2 + frameCount * 0.1,
    random(-50, 50)
  );
  //drawRecordB(400,250);

  if (
    //blue
    mouseIsPressed == true &&
    mouseX >= 77.5 &&
    mouseX <= 122.5 &&
    mouseY >= 387.5 &&
    mouseY <= 432.5
  ) {
    mouseClick = 5;
  } else if (mouseIsPressed == false && mouseClick == 5) {
    mouseClick = 6;
  } else if (mouseClick == 6) {
    bgColor = "#85ECFC77";
    fill("white");
    noStroke();
    triangle(84, 395, 84, 419, 121, 406);
  }
  if (
    //orange
    mouseIsPressed == true &&
    mouseX >= 137.5 &&
    mouseX <= 182.5 &&
    mouseY >= 387.5 &&
    mouseY <= 432.5
  ) {
    mouseClick = 7;
  } else if (mouseIsPressed == false && mouseClick == 7) {
    mouseClick = 8;
  } else if (mouseClick == 8) {
    bgColor = "rgba(248,248,163,0.14)";
    fill("white");
    noStroke();
    triangle(147, 391, 147, 422, 178, 407);
  }
  if (
    //green
    mouseIsPressed == true &&
    mouseX >= 137.5 &&
    mouseX <= 182.5 &&
    mouseY >= 327.5 &&
    mouseY <= 372.5
  ) {
    mouseClick = 3;
  } else if (mouseIsPressed == false && mouseClick == 3) {
    mouseClick = 4;
  } else if (mouseClick == 4) {
    bgColor = "#CDF59F23";
    fill("white");
    noStroke();
    triangle(145, 332, 145, 362, 180, 347);

    //drawRecordB(random(-5,5))
    //    drawRecordA(
    //   width / 2 + frameCount * 0.1,
    //   height / 2 + frameCount * 0.1,
    //   random(-50, 50)
    // );
  }
}

function drawRecordA(x, y, randomNum1) {
  if (
    mouseIsPressed == true &&
    mouseY <= 372.5 &&
    mouseX >= 77.5 &&
    mouseX <= 122.5 &&
    mouseY >= 327.5
  ) {
    mouseClick = 1;
    bgColor = "rgba(238,213,218,0.38)";
  } else if (mouseIsPressed == false && mouseClick == 1) {
    mouseClick = 2;
  } else if (mouseClick == 2) {
  }

  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#E6BDCB77"); //A
    circle(750, 78, dia);
  }
  push();
  if (c1X < 770) {
    c1X += 0.5;
  } else {
    c1X = 725;
  }
  fill(0);
  circle(c1X, 125, 10);

  pop();

  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < x1Array.length; i++) {
    x1Array[i] += randomNum1;
    y1Array[i] += randomNum1;
    let x1 = x1Array[i];
    let y1 = y1Array[i];
    circle(x, y, 20);
    // circle(0 + randomNum1,0 + randomNum1, 5);
    //square(10 + randomNum1, 10 + randomNum1, 10);
  }
  pop();
  fill("rgba(255,255,255,0.61)");
  noStroke();
  triangle(82, 330, 82, 365, 120, 348);

  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < coordinateNum; i++) {
    noStroke();
    // circle(
    //   r *
    //     noise(frameCount * 0.15 + randomArray[i]) *
    //     cos((2 * PI * i) / coordinateNum),
    //   r *
    //     noise(frameCount * 0.15 + randomArray[i]) *
    //     sin((2 * PI * i) / coordinateNum),
    //   5
    // );
    curveVertex(
      r *
        noise(frameCount * 0.15 + randomArray[i]) *
        cos((2 * PI * i) / coordinateNum),
      r *
        noise(frameCount * 0.15 + randomArray[i]) *
        sin((2 * PI * i) / coordinateNum)
    );
  }
  endShape(CLOSE);
  pop();
}

//         function drawRecordB(x,y) {
//           if (
//             mouseIsPressed == true &&
//             mouseX >= 137.5 &&
//             mouseX <= 182.5 &&
//             mouseY >= 327.5 &&
//             mouseY <= 372.5
//           ) {
//             mouseClick = 3;

//           } else if (mouseIsPressed == false && mouseClick == 3) {
//             mouseClick = 4;
//           }else if (mouseClick == 4) {
//             bgColor = "#CDF59F23";
//             fill("white");
//             triangle(145, 332, 145, 362, 180, 347);
//             for (let i = 0; i < 60; i++) {
//               let x = width / 2 + random(0, 100);
//               let y = height / 2 - random(0, 100);
//               let angle = random(0, 90);
//               push();
//               translate(x, y);
//               rotate(radians(angle));
//               fill(" rgba(255,255,255,0.52)");

//               rect(-15, -15, 40, 40);
//               pop();

//             }
//           }

//               push();
//               translate(x, y);
//               rotate(radians(angle));
//               fill(" rgba(255,255,255,0.52)");

//               circle(-15, -15, 40);
//               pop();
//             }
//           }
//}
//  }
// }

function drawbackground() {
  background(bgColor);

  push();
  // scale(2)

  let waveDistance = 5;

  for (let i = 0; i < 200; i++) {
    for (let y = 0; y < height; y++) {
      let ampli = 100;
      let frequency = y * 0.01 + frameCount * 0.1;
      let sinValue = sin(frequency) * ampli;
      let x = -100 + sinValue + i * waveDistance;
      fill("#201E1E");
      noStroke();
      circle(x, y, 0.5);
    }
  }
  pop();
}
