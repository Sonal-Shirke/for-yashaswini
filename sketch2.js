const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,ground,world,ball,box1,box2,ground1;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new box(200,100,50,50);
  box2=new box(100,100,50,100);
  ground1=new oneMoreGround(200,390,400,20);

  
  

  //console.log(ball);
 // console.log(ball.type);
 // console.log(box1.position.x);
  //console.log(ground1.position.y);

}

function draw() {
  background("pink");  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground1.display();
  drawSprites();
}