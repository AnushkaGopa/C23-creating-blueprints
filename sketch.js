const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

//create objects based on the class Box(design or blueprint)
box1 = new Box(200,100,50,50);

box2 = new Box(100,50,50,100);

ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    //display the object
    box1.display();
    box2.display();
    ground.display();
}