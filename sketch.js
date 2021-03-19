
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plane1;
var stone1;
var rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(150,30);
	plane1 = new Plane(400,690,800,20);
	stone1 = new Stone(250,50,120,120);
	rubber1 = new Rubber(300,300,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer1.display();
plane1.display();
stone1.display();
rubber1.display();

  drawSprites();
 
}



