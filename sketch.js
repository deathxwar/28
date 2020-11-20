
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImage;
var ground;
var tree,treeImage;
var bg;

function preload(){
    boyImage = loadImage("boy.png");
    treeImage = loadImage("tree.png")
    
}

function setup() {
	createCanvas(1200,650);
    boy = createSprite(200,500,20,20);
    boy.addImage(boyImage);
    boy.scale = 0.1
    
    mango1 = new Mango(600,200)
    mango2 = new Mango(100,180)

    tree = createSprite(650,280,20,20);
    tree.addImage(treeImage)
    tree.scale = 0.5


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,600,1400,20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255,255,255);
  mango1.display();
  mango2.display();
  ground.display();
  
  drawSprites();
 
}



