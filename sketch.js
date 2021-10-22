var cubo;

function setup() {
  createCanvas(800,600);
  cubo = createSprite(200, 200, 30, 30);
  cubo.shapeColor = "red";
}

function draw() 
{
  background("cyan");

  if (keyDown ("right")){
  cubo.x = cubo.x +5;
  }
  if (keyDown ("left")){
    cubo.x = cubo.x -5;
  }
  if (keyDown ("up")){
    cubo.y = cubo.y -5;
  }
  if (keyDown ("down")){
    cubo.y = cubo.y +5;
  }
drawSprites ();
}




