
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(400,400,100)
	bob2=new bob(500,400,100)
	bob3=new bob(600,400,100)
	bob4=new bob(700,400,100)
	bob5=new bob(800,400,100)
    roof1=new roof(600,100,500,30)
	rope1=new rope(bob1.body,400,100)
//	rope2=new rope(bob2.body,{x: 500,y: 100})
	/*rope3=new rope(bob3.body,{x: 600,y: 100})
	rope4=new rope(bob4.body,{x: 700,y: 100})
	rope5=new rope(bob5.body,{x: 800,y: 100})*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  
  
  rope1.display();
  /*rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();*/
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  drawSprites();

  if(keyDown("space")) 
  {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-395,y:395})

  }
 
}



