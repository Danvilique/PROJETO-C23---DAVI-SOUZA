
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var ball2_options = {
    restitution: 0.0,
    frictionAir:0.0

   }
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(250,250,15,ball2_options);
  World.add(world,ball2);

  rectMode(CENTER);
  ellipseMode(RADIUS);  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  ellipse(ball2.position.x,ball2.position.y, 15);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

