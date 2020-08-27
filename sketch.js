const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
function preload()
{
	
}

function setup() {
	createCanvas(500, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	bobObject1 = new Bob(175,300,40);
	bobObject2 = new Bob(215,300,40);
	bobObject3 = new Bob(255,300,40);
	bobObject4 = new Bob(295,300,40);
	bobObject5 = new Bob(335,300,40);
	bobObject5 = new Bob(335,300,40);
	roof = new Roof(255,100,250,50);
	//ropes
	rope1 = new Rope(bobObject1.body,roof.body,-80,0);
	rope2 = new Rope(bobObject2.body,roof.body,-40,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,40,0);
	rope5 = new Rope(bobObject5.body,roof.body,80,0);
	
	

	
	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,50);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  //keyPressed();
  //if(frameCount>80){
	//Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
		//{x:8,y:0});
 // }


  
  drawSprites();

  
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
			{x:-50,y:-50});
		
	}
}