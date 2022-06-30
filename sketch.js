var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyDown("left")){
    box.position.x=box.position.x-4;  
  }

  if (keyDown("right")){
    box.position.x+=4;
  }

  if (keyDown("up")){
    box.position.y=box.position.y-4;  
  }

  if (keyDown("down")){
    box.position.y+=4;
  }
  drawSprites ();
}




