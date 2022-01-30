var car1,car2,car3,car4, wall
var speed, weight



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 10, 5000);
  speed=random(55,90)
  weight=random(400,1500)
  car1=createSprite(10,20,30,30)
  car2=createSprite(10,120,30,30)
  car3=createSprite(10,220,30,30)
  car4=createSprite(10,320,30,30)
  wall=createSprite(1500,200,60,5000)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  car1.bounceOff(wall)

  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColor("blue");
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor=color("yellow")
    }
    if(deformation<100)
    {
      car1.shapeColor=color("green")
    }
  }
  
  if(wall.x-car2.x < (car2.width+wall.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,225,0)
    }
  }

  if(wall.x-car3.x < (car3.width+wall.width)/2)
    {
      car3.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180)
      {
        car3.shapeColor(255,0,0);
      }
      if(deformation<180 && deformation>100)
      {
        car3.shapeColor=color(230,230,0)
      }
      if(deformation<100)
      {
        car3.shapeColor=color(0,225,0)
      }
    }

    if(wall.x-car4.x < (car4.width+wall.width)/2)
    {
      car4.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180)
      {
        car4.shapeColor(255,0,0);
      }
      if(deformation<180 && deformation>100)
      {
        car4.shapeColor=color(230,230,0)
      }
      if(deformation<100)
      {
        car4.shapeColor=color(0,225,0)
      }
    }
}