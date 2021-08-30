var s1,s2;
var sprites = [];
function setup() 
{
  createCanvas(400,400);
  s1 = createSprite(100,100,20,20);
  s2 = createSprite(150,100,25,20);
  sprites = [s1,s2];
  console.log(sprites[0].x);
  console.log(sprites[1].y);
}


function draw() 
{
background(51);
drawSprites();
}

