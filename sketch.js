var wall;
var bullet;
var speed, weight,thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapecolor = "white"
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = 80,80,80

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
     var Damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

   if(Damage >= 11) {
    
    bullet.shapeColor = "red"
    
   }
   
  else if(Damage <= 10){
   
    bullet.shapeColor = "green"

  }
 }
}


function hasCollided (lbullet, lwall){
bulletRightEdge = lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge >=wallLeftEdge){
  return true
}
return false;
}