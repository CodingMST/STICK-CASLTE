const Bodies = Matter.Bodies;


var engine, world;
var circle;
var circle;
var circle;
function setup() {

  createCanvas(1000,800);
  s1 = createSprite(400, 600, 50, 800);
  s2 = createSprite(450, 750, 50, 800);
  s3 = createSprite(350, 900, 50, 800);
  s4 = createSprite(500, 600, 50, 800);
  s5 = createSprite(300, 600, 50, 850);

  
}

function draw() {
  background(0,255,125); 
  fill("0,0,0");
  
s1.shapeColor = "blue";
s2.shapeColor = "yellow";
s3.shapeColor = "darkred";
s5.shapeColor = "purple";
s4.shapeColor = "green";

  rectMode("CENTER");
  
s1.depth = 100;
  
     
  fill("yellow");
rect(355,160, 100, 40);
  fill("blue");
circle(350,400, 35, 70);
fill("darkred");
circle(450,250, 35, 70);

drawSprites();
}