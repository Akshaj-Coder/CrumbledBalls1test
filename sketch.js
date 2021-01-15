const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var crumbledpaper;
var groundobj;

function preload()
{	
		
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	//Create the Bodies Here.
	crumbledpaper = new paper(200,450,40);
	groundobj = new Ground(width/2,670,width,20);
	Dustbin = new dustbin(1200,650);
	

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);

  crumbledpaper.display();
  groundobj.display();
  Dustbin.display();
  
  drawSprites();
 
}