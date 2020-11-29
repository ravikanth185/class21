
var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);
  rect1=createSprite(300,200,50,50)
  rect2=createSprite(400,200,50,50)
  rect1.velocityX=1;
  rect2.velocityX=-1;
}

function draw() {
  background(255,255,255);  
 
  movingRect.x = World.mouseX; movingRect.y = World.mouseY; 
 if(istouching(movingRect,fixedRect)){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";
 }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
      bounceoff(rect1,rect2)
     

  drawSprites();
}






