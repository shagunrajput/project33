const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snowfall=[];
var snow;
function preload() {
  backgroundImg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
//  snowfall=new Snow (Math.round(random(0,800)),0,80); 

 
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  
  if (frameCount % 10 === 0) {
    snowfall.push(new Snow(random(width / 2 - 400, width / 2 + 400), 0, 5));
}
for (var a = 0; a < snowfall.length; a++) {
    snowfall[a].display();
}


    
  
}