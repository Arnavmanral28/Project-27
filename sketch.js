
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject; 
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(200,400,30);
	World.add(world,bobObject1);
	bobObject2 = new Bob(230,400,30);
	World.add(world,bobObject2);
	bobObject3 = new Bob(260,400,30);
	World.add(world,bobObject3);
	bobObject4 = new Bob(290,400,30);
	World.add(world,bobObject4);
	bobObject5 = new Bob(320,400,30);
	World.add(world,bobObject5);

	roofObject = new Roof(400,200,500,20);

	World.add(world,roofObject);

	rope1 = new Rope(bobObject1.body,roofObject.body,-60*2,0);
    World.add(world,rope1);

	rope2 = new Rope(bobObject2.body,roofObject.body,-60*2,0);
	World.add(world,rope2);

	rope3 = new Rope(bobObject3.body,roofObject.body,-60*2,0);
	World.add(world,rope3)

	rope4 = new Rope(bobObject4.body,roofObject.body,-60*2,0);
    World.add(world,rope4);

	rope5 = new Rope(bobObject5.body,roofObject.body,-60*2,0);
	World.add(world,rope5);




	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("white");
  
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display(); 

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



