function setup() 
{
createCanvas(800,400);
abcd=createSprite(400, 200, 50, 50);
abcd.shapeColor="green"

efg=createSprite(500,100,50,100)
efg.shapeColor="blue"

movingRect=createSprite(200,100,40,70)
movingRect.shapeColor="red"
movingRect.velocityY=5

fixedRect=createSprite(200,300,40,70)
fixedRect.shapeColor="white"
fixedRect.velocityY=-5
}

function draw() 
{
  background("black");  
    

      //movingRect.x=mouseX
      //movingRect.y=mouseY
  
      if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
      &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
      {
        movingRect.velocityX=movingRect.velocityX*(-1)
        fixedRect.velocityX=fixedRect.velocityX*(-1)
      }
      if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
        &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
      {
        movingRect.velocityY=movingRect.velocityY*(-1)
        fiXedRect.velocityY=fixedRect.velocityY*(-1)
      }

  drawSprites();
} 
