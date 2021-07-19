
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 800);
	

    engine = Engine.create();
	world = engine.world;

 //creating/roof//
	roof = new Roof(400,150,300,30);
	World.add(world,roof);

	//creating/bob//
	bob1 = new Bob(250,300);
	bob2 = new Bob(300,300);
	bob3 = new Bob(350,300);
	bob4 = new Bob(400,300);
	bob5 = new Bob(450,300);


	//creating/rope//
	rope1 = new Rope(bob1.body,roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(bob2.body,roof.body,-50,0);
	World.add(world,rope2);

	rope3 = new Rope(bob3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(bob4.body,roof.body,+50,0);
	World.add(world,rope4);

	rope5 = new Rope(bob5.body,roof.body,+100,0);
	World.add(world,rope5);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");


//display/roof//
  roof.display();

  //display/bob//
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display/rope//
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 }

 function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-280,y:280});

	 }
 }
  
 




