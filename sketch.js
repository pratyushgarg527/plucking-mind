
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(620,400,20);
	mango2 = new Mango(520,400,20);
	mango3 = new Mango(600,320,20);
	mango4 = new Mango(700,430,20);
	mango5 = new Mango(680,350,20);
	tree = new Tree(610,430,20,20);
	ground = new Ground(400,675,800,20)
	boy = new Boy(200,590,20,20);
	stone = new Stone(680,10,20)
	
  dhaaga = new Rope(stone.body,{x:150,y:590})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  boy.display();
  stone.display();
  dhaaga.display();
  


  drawSprites();
 
}

function mouseDragged() {
    
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

  }



