let magicShelf;
let playerColor = "rgb(224,212,212)";
let xArrayNote1 = [];
let xArrayNote2 = [];
let yArrayNote1 = [];
let yArrayNote2 = [];
let yArrayNote3 = [];
let xArrayNote3 = [];
let xArrayD = [];
let yArrayD = [];
let randomArray = [];
let note1Num, note2Num, note3Num;
let rectSize = 30;
let brightness;
let disk4Count = 0;
let disk = 0;
let ampA = 0.5;
let arect = 35;
let c1X = 725;
let c2X = 725;
let c3X = 725;
let c4X = 725;
let squarelocX = 400;
let xSpeed = 5;
let squarelocY = 250;
let ySpeed = 1;
let xOffset, yOffset;
let speed = 0.005;
let bgColor = 255;
function setup() {
  xOffset = random(1000);
  yOffset = random(1000);
 let cnv = createCanvas(800, 500);
 cnv.parent("p5-canvas-container");
  for (let i = 0; i < 60; i++) {
    randomArray.push(random(0, 5));
  }
}

function draw() {
  background(bgColor);
  if (disk == 0) {
    //background changing
    noStroke();
    for (let xBg = 0; xBg < width; xBg++) {
      let freq = xBg * 0.05 * noise(sin(frameCount * 0.005));
      let sinValue = sin(freq);
      let brightness = map(sinValue, -1, 1, 150, 255);
      fill(brightness);
      rect(xBg, 0, 1, height);
    }
    // color and moving of the creature
    noStroke();
    let sinValue = map(sin(frameCount * 0.025), -1, 1, 0, 1);
    from = color("rgba(255,255,255,0.52)");
    to = color("#9E9E9EB5");
    creatureColor = lerpColor(from, to, sinValue);
    fill(creatureColor);
    let r = 90;
    let x0 = 0.2 * noise(xOffset) * width;
    let y0 = 0.2 * noise(yOffset) * height;
    drawDoomaD(width / 2 + x0, height / 2 + y0, 90, 10, 0.01);
    xOffset += speed;
    yOffset += speed;
  }
  drawShelfandRecord(20, 250, 700, 100);
  if (disk == 1) {
    magicShelf = "pink";
    note1ColorMain = "#A8F4FB82";
    note1ColorMinor = "#FBF5F596";
    note2ColorMain = "#F97BF0";
    note2ColorMinor = "#F4E7E7A3";
    bgColor = "#EFE8B0C9";
    r = 80;
    //draw note
    for (let i = 0; i < note1Num; i++) {
      drawNote1(xArrayNote1[i], yArrayNote1[i]);
    }
    for (let i = 0; i < xArrayNote1.length; i++) {
      xArrayNote1[i] += 0.5;
      yArrayNote1[i] += ampA * sin(frameCount * 0.05);
    }
    for (let i = 0; i < note2Num; i++) {
      drawNote2(xArrayNote2[i], yArrayNote2[i]);
    }
    for (let i = 0; i < xArrayNote2.length; i++) {
      xArrayNote2[i] += 0.5;
      yArrayNote2[i] += ampA * sin(frameCount * 0.03);
    }
    //creature color
    let sinValue = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    from = color("#F97BF0");
    to = color("#A8F4FB82");
    creatureColor = lerpColor(from, to, sinValue);
    fill(creatureColor);
    //creature moving
    let x1 = 0.25 * noise(xOffset) * width;
    let y1 = 0.25 * noise(yOffset) * height;
    drawDoomaD(width / 2 + x1, height / 2 + y1, 90, 10, 0.1);
    drawCompanionA(width / 2 + x1, height / 2 + y1);
    xOffset += speed;
    yOffset += speed;
    //record player working
    push();
    if (c1X < 770) {
      c1X += 0.1;
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
      fill("#F6C7D719"); //A
      circle(750, 78, dia);
    }
    fill(0);
    triangle(95, 342, 95, 358, 108, 350);
  }
  if (disk == 2) {
    note1ColorMain = "#37E23E";
    note1ColorMinor = "#37E23E";
    note2ColorMain = "#EE463A";
    note2ColorMinor = "#EE463A";
    let sinValue = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    from = color("#2A852E7F");
    to = color("#003803");
    bgColor = lerpColor(from, to, sinValue);

    //draw note
    for (let i = 0; i < note3Num; i++) {
      drawNote3(xArrayNote3[i], yArrayNote3[i]);
    }
    for (let i = 0; i < xArrayNote3.length; i++) {
      let noteWave = noise(frameCount * 0.1 + i);
      let moving = map(noteWave, 0, 1, -1, 1);
      xArrayNote3[i] += 0.5;
      yArrayNote3[i] += moving;
    }
    //creature
    squarelocX = squarelocX + xSpeed;
    squarelocY = squarelocY + ySpeed;
    if (squarelocX < 0 + 300 || squarelocX > width - 300) {
      xSpeed = -xSpeed;
    }
    if (squarelocY < 0 + 350 || squarelocY > height - 350) {
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
      creatureColor = lerpColor(from, to, sinValue);
      fill(creatureColor);
      noStroke();
      rect(-15, -15, arect, arect);
      pop();
    }
    pop();
    //record player working
    push();
    if (c2X < 770) {
      c2X += 0.1;
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
      fill("rgba(72,245,72,0.07)"); //B
      circle(750, 78, dia);
    }
    fill(0);
    triangle(155, 342, 155, 358, 168, 350);
  }
  if (disk == 3) {
    //call all color
    note1ColorMain = "#687C85";
    note1ColorMinor = "#687C85";
    note2ColorMain = "#687C85";
    note2ColorMinor = "#687C85";
    let sinValue = map(sin(frameCount * 0.01), -1, 1, 0, 1);
    from = color("#111632");
    to = color("#696E8C82");
    creatureColor = lerpColor(from, to, sinValue);
    bgColor = "#79A2B5EA";
    let x3 = 0.25 * noise(xOffset) * width;
    let y3 = 0.25 * noise(yOffset) * height;
    //creature
    noStroke();
    fill(creatureColor);
    drawDoomaD(width / 2 + x3, height / 2 + y3, 100, 55, 0.005);
    xOffset += speed;
    yOffset += speed;
    //note
    for (let i = 0; i < note2Num; i++) {
      drawNote2(xArrayNote2[i], yArrayNote2[i]);
    }
    for (let i = 0; i < xArrayNote2.length; i++) {
      xArrayNote2[i] += 0.5;
      yArrayNote2[i] += 0.1 * sin(frameCount * 0.01);
    }
    for (let i = 0; i < note1Num; i++) {
      drawNote1(xArrayNote1[i], yArrayNote1[i]);
    }
    for (let i = 0; i < xArrayNote1.length; i++) {
      xArrayNote1[i] += 0.5;
      yArrayNote1[i] += 0.2 * sin(frameCount * 0.01);
    }
    //record player moving
    push();
    if (c3X < 770) {
      c3X += 0.1;
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
      fill("#969ECA2B"); //C
      circle(750, 78, dia);
    }
    // play button
    fill(0);
    triangle(95, 402, 95, 418, 108, 410);
  }
  if (disk == 4) {
    disk4Count += 1;
    noStroke();
    for (let y = 0; y < height; y += rectSize) {
      for (let x = 0; x < width; x += rectSize) {
        fill(random(240, 255), random(240, 255), random(240, 255));
        rect(x, y, rectSize, rectSize);
      }
    }
    push();
    if (c4X < 770) {
      c4X += 0.1;
    } else {
      c4X = 725;
    }
    fill(0);
    circle(c4X, 125, 10);
    drawShelfandRecord(20, 250, 700, 100);

    for (let dia = 55; dia > 20; dia -= 3) {
      stroke("black");
      strokeWeight(1);
      fill("#F79D8116"); //D
      circle(750, 78, dia);
    }
    fill(0);
    triangle(155, 402, 155, 418, 168, 410);
    //分散效果
    let directionX = [1, -1, 0, 0, 1];
    let directionY = [0, 0, 1, -1, 1];
    for (let i = 0; i < 5; i++) {
      let xD = 2*width / 3 + directionX[i] * disk4Count * 0.8;
      let yD = 2*height / 3+ directionY[i] * disk4Count * 0.8;
      push();
      translate(xD, yD);
      transparencyD = 200;
      let sinValue = map(sin(frameCount * 0.025), -1, 1, 0, 1);
      from = color("rgba(255,255,255,0.52)");
      to = color("#9E9E9EB5");
      creatureColor = lerpColor(from, to, sinValue);
      fill(creatureColor);
      drawDoomaD(0, 0, 50, 10, 0.01);
      pop();
    }
  } else {
    disk4Count = 0;
  }
}

function mouseClicked() {
  let mouseDist1 = dist(mouseX, mouseY, 100, 350);
  let mouseDist2 = dist(mouseX, mouseY, 160, 350);
  let mouseDist3 = dist(mouseX, mouseY, 100, 410);
  let mouseDist4 = dist(mouseX, mouseY, 160, 410);

  if (mouseDist1 <= 22.5) {
    disk = 1;
    note1Num = floor(random(2, 4));
    for (let i = 0; i < note1Num; i++) {
      xArrayNote1[i] = random(200, 400);
      yArrayNote1[i] = random(100, 150);
    }
    note2Num = floor(random(1, 3));
    for (let i = 0; i < note2Num; i++) {
      xArrayNote2[i] = random(0, 200);
      yArrayNote2[i] = random(100, 150);
    }
  } else if (mouseDist2 <= 22.5) {
    disk = 2;

    note3Num = floor(random(5, 8));
    for (let i = 0; i < note3Num; i++) {
      xArrayNote3[i] = random(1, 800);
      yArrayNote3[i] = random(100, 200);
    }
  } else if (mouseDist3 <= 22.5) {
    disk = 3;
    note1Num = floor(random(1, 5));
    for (let i = 0; i < note1Num; i++) {
      xArrayNote1[i] = random(200, 600);
      yArrayNote1[i] = random(100, 150);
    }
    note2Num = floor(random(2, 5));
    for (let i = 0; i < note2Num; i++) {
      xArrayNote2[i] = random(width);
      yArrayNote2[i] = random(100, 200);
    }
  } else if (mouseDist4 <= 22.5) {
    disk = 4;
    startX = width / 2;
    startY = height / 2;
  }
}

function drawNote1(x, y) {
  push();
  translate(x, y);
  stroke(note1ColorMain);
  line(6, 0 - 30, 6, 0);
  strokeWeight(2);
  stroke(note1ColorMinor);
  line(6, 0 - 30, 6, 0);
  fill(note1ColorMain);
  stroke(note1ColorMinor);
  ellipse(0, 0, 20, 10);
  circle(15, 0, 5);

  pop();
}
function drawNote2(x, y) {
  push();
  translate(x, y);

  stroke(note2ColorMain);
  line(5, 0 - 30, 5, 0);
  line(5 + 30, 0 - 30, 5 + 30, 0);
  line(5, 0 - 30, 5 + 30, 0 - 30);
  strokeWeight(3);
  stroke(note2ColorMinor);
  line(5, 0 - 30, 5, 0);
  line(5 + 30, 0 - 30, 5 + 30, 0);
  line(5, 0 - 30, 5 + 30, 0 - 30);

  stroke(note2ColorMinor);
  fill(note2ColorMain);
  ellipse(0, 0, 20, 10);
  ellipse(0 + 30, 0, 20, 10);

  pop();
}
function drawNote3(x, y) {
  push();
  translate(x, y);
  strokeWeight(3);
  line(0, 0, 0, 52);
  beginShape();
  noFill();
  curveVertex(0, 27);
  curveVertex(0, 27);
  curveVertex(9, 22);
  curveVertex(11, 38);
  curveVertex(0, 52);
  curveVertex(0, 52);
  endShape();
  pop();
}
function drawDoomaD(xDM, yDM, r, coordinateNum, freqDM) {
  push();
  translate(xDM, yDM);
  noStroke();

  beginShape();

  for (let i = 0; i < coordinateNum; i++) {
    curveVertex(
      r *
        noise(frameCount * freqDM + randomArray[i]) *
        cos((2 * PI * i) / coordinateNum),
      r *
        noise(frameCount * freqDM + randomArray[i]) *
        sin((2 * PI * i) / coordinateNum)
    );
  }

  endShape(CLOSE);
  pop();
}
function drawCompanionA(xCA, yCA) {
  push();
  translate(xCA, yCA);
  let sinValue = map(sin(frameCount * 0.1), -1, 1, 0, 1);
  from = color("#F97BF0");
  to = color("#A8F4FB82");
  companionColor = lerpColor(from, to, sinValue);

  let freq1 = frameCount * 0.05;
  let amp1 = 100;
  let sinValue1 = sin(freq1) * amp1;
  let cosValue1 = cos(freq1) * amp1;
  fill(companionColor);

  let xA0 = cosValue1;
  let yA0 = sinValue1;
  noStroke();
  circle(xA0, yA0, 20);
  circle(xA0+15, yA0+15,10)
  

  let xA1 = 0;
  let yA1 = sinValue1;
  circle(xA1, yA1, 10);
  circle(xA1+30,yA1-5,10)

  let xA2 = cosValue1;
  let yA2 = 0;
  circle(xA2, yA2, 10);
  circle(xA2-15, yA2-15, 10);
  pop();
}
function drawShelfandRecord(xS, yS, xR, yR) {
  push();
  translate(xS, yS);

  fill("#291108CE");
  noStroke();
  rect(32, 30, 160, 180);
  fill("#3C170A9E");
  rect(22, 20, 160, 180);
  stroke(0);
  strokeWeight(1);
  quad(22, 20, 22, 200, 32, 210, 32, 30); //left side
  fill("#3C170A3D");
  quad(192, 30, 192, 210, 182, 200, 182, 20); //right side
  fill("#3C170AF9");
  quad(22, 20, 182, 20, 192, 30, 32, 30); //top

  line(32, 30, 22, 20);
  line(32, 210, 22, 200);
  line(192, 30, 182, 20);
  line(192, 210, 182, 200);
  fill("white");

  let squaredia = 2;
  for (let y0 = 50; y0 < 190; y0 += squaredia) {
    for (let x0 = 50; x0 < 170; x0 += squaredia) {
      let freq1 = x0 * 0.02 + frameCount * 0.01;
      let freq2 = y0 * 0.02 + frameCount * 0.01;
      let noiseValue = noise(freq1, freq2);

      let magicShelf = map(noiseValue, 0, 1, 0, 360);

      fill(magicShelf);
      noStroke();
      rect(x0, y0, squaredia, squaredia);
    }
  }
  //rect(50, 50, 120, 140);
  fill("rgb(43,9,9)");
  rect(70, 10, 80, 50, 20);

  //stroke("black");
  textSize(20);
  stroke("palegreen");
  strokeWeight(2);
  fill("palegreen");

  textFont("Courier New", 20);
  text("SHELF", 80, 40);
  fill("rgb(8,163,8)");
  strokeWeight(1);
  stroke("rgb(35,196,35)");
  textSize(15);
  text("Feed Doomaviour With Music ...", 270, 220);
  textSize(20);
  text("Click A Disk !!!", 310, 240);

  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#F6C7D719"); //A
    circle(80, 100, dia);
  }
  for (dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("rgba(72,245,72,0.07)"); //B
    circle(140, 100, dia);
  }
  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#969ECA2B"); //C
    circle(80, 160, dia);
  }
  for (let dia = 55; dia > 20; dia -= 3) {
    stroke("black");
    strokeWeight(1);
    fill("#F79D8116"); //D
    circle(140, 160, dia);
  }
  textSize(10);
  fill("yellow");
  text("DANGER", 123, 162);
  pop(); //shelf end

  push(); //record player
  translate(xR, yR); //700,100
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

  rect(35, -110, 130, 130);
  fill(playerColor);
  circle(100, -45, 132);
  noStroke();
  fill("rgb(112,83,83)");
  circle(100, -45, 30);
  pop();
}
