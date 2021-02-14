
//draw a spinning octahedron
let octahedron;

let img;

function preload() {
  octahedron = loadModel('heart.obj');
  img = loadImage('img.png');
}

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(200);
  scale(10)
  rotateX(PI);
  rotateY(frameCount * 0.01);
  translate(0, -10, 0);
  noStroke()
  fill(250, 0, 100)
  model(octahedron);
}