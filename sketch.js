
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope, rope2, rope3, rope4, rope5;
var bobDiameter;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobDiameter = 50;

  roof = new Roof(400, 200, 300, 35);
  bobObject1 = new Bob(300, 450, bobDiameter);
  bobObject2 = new Bob(350, 450, bobDiameter);
  bobObject3 = new Bob(400, 450, bobDiameter);
  bobObject4 = new Bob(450, 450, bobDiameter);
  bobObject5 = new Bob(500, 450, bobDiameter);


  rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter * 2, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter * 1, 0);
  rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter * 0, 0);
  rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter * -1, 0);
  rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter * -2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 200, 0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){
  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50,y:-45});
}

}

