const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ropes;
var roof;
//Create multiple bobs, mulitple ropes varibale here
var bl1,bl2,bl3,bl4,bl5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	
	roof = Bodies.rectangle(300,100,230,20,roof_options);
    World.add(world,roof);
	bl1 = Bodies.circle(320,400,20);
	World.add(world,bl1);
	bl2 = Bodies.circle(360,400,20);
	World.add(world,bl2);
	bl3 = Bodies.circle(400,400,20);
	World.add(world,bl3);
	bl4 = Bodies.circle(440,400,20);
	World.add(world,bl4);
	bl5 = Bodies.circle(480,400,20);
	World.add(world,bl5);
	rope1 = new Rope(bl1,{x: 200,y: 100});
	rope2 = new Rope(bl2,{x: 250,y: 100});
	rope3 = new Rope(bl3,{x: 300,y: 100});
	rope4 = new Rope(bl4,{x: 350,y: 100});
	rope5 = new Rope(bl5,{x: 400,y: 100}); 
	Engine.run(engine);

  
}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display(); 
  //create ellipse shape for multiple bobs here
	ellipse(bl1.position.x,bl1.position.y,20);
	ellipse(bl2.position.x,bl2.position.y,20);
	ellipse(bl3.position.x,bl3.position.y,20);
	ellipse(bl4.position.x,bl4.position.y,20);
	ellipse(bl5.position.x,bl5.position.y,20);
	
	if(keyIsDown(LEFT_ARROW)) {
		keyPressed();
	}

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	Matter.Body.applyForce(bl1,{x:0,y:0},{x:-0.05,y:0});
}