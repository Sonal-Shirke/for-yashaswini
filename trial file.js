const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup(){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;

    object=Bodies.rectangle(200,100,50,50);
    World.add(world,object)

    console.log(object)
    console.log(object.type)
    console.log(object.position.y)
}

function draw(){
    background("pink");
    rectMode(CENTER);
    rect(200,200,50,50);
}