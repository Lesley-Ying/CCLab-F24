let img;
function preload(){
  img=loadImage("assets/scissor.png")
}
function setup() {
  let canvas = createCanvas(innerWidth,innerHeight);
  canvas.parent('p5-canvas-container');
  
}

function draw() {
  background(220);
  image(img,mouseX,mouseY,50,50)
}