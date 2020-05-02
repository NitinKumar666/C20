var a; 
var fr;
var mr;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "red";
  fr = createSprite(600,200, 50, 50);
  fr.shapeColor = "blue";
  mr = createSprite(500, 250, 30, 30); 
  mr.shapeColor = "green";
}


function draw() {
  background("grey");  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < fr.width/2 + mr.width/2 ){
      mr.shapeColor = "yellow";
      fr.shapeColor = "yellow";
    }else{
      mr.shapeColor = "green";
      fr.shapeColor = "blue";
    }
  drawSprites();
}


