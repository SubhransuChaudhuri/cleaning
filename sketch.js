
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash, dustbinpart1,dustbinpart2,dustbinpart3, ground;
var dustbin, dusty ;
var engine, world;

function preload()
{
	dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,690,800,20,ground_options);
    World.add(world,ground);
    
    dusty = createSprite(700,600,80,70);
    dusty.addImage (dustbin);
    dusty.scale=0.5;

    var dustbinpart1_options ={
        isStatic: true
    }

    dustbinpart1 = Bodies.rectangle(655,630,10,100,dustbinpart1_options);
	World.add(world,dustbinpart1);
	
	var dustbinpart2_options ={
        isStatic: true
    }

    dustbinpart2 = Bodies.rectangle(700,675,100,10,dustbinpart2_options);
	World.add(world,dustbinpart2);
	
	var dustbinpart3_options ={
        isStatic: true
    }

    dustbinpart3 = Bodies.rectangle(755,630,10,100,dustbinpart3_options);
    World.add(world,dustbinpart3);

	//Create the Bodies Here.

	trash = new garbage(100,600,20);
	
			

    console.log(ground);

	Engine.run(engine);
  
}


function draw() {
  
  background(225);

  Engine.update(engine);
  //image(dustbin,700,600, 50,80) ;
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  rectMode(CENTER);
  rect(dustbinpart1.position.x,dustbinpart1.position.y,10,100);

  rectMode(CENTER);
  rect(dustbinpart2.position.x,dustbinpart2.position.y,100,10);

  rectMode(CENTER);
  rect(dustbinpart3.position.x,dustbinpart3.position.y,10,100);

 // ellipseMode(RADIUS);


 trash.display();
	
	

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:14 , y:-20})
	}
}



