const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine, ground;
var ball;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options={
        isStatic: true
    }

  ground = Bodies.rectangle(200,380,400,30,ground_options);
    World.add(world,ground);
 
   
    console.log(ground);
  ball = Bodies.circle(200,200,20,{restitution:1});
   World.add(world,ball);
   console.log(ball);
   
}

function draw(){
    background("black");
    Engine.update(engine);
     
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}