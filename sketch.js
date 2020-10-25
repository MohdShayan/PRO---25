
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(500,490,1400,20);
	ball= new Paper(50,100,70);
	box1=new Dustbin(600,470);


	
}


function draw() {
  background("white");
  
  Engine.update(engine)

  ball.display();
  ground.display();
  box1.display();
  
 

  drawSprites();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-125});
	}
}


