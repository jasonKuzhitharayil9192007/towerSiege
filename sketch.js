const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var ground;
var block1, block2, block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,polygonImg;
var slingshot;


function preload()
{
    polygonImg = loadImage("polygon.png");
}

function setup()
{
    createCanvas(900,900);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();

    stand1 = new Stand(450,600,300,10);
    stand2 = new Stand(650,400,230,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(polygon, {x:100,y:200});

    //first level
    block1 = new Block(350,575,30,40);
    block2 = new Block(380,575,30,40);
    block3 = new Block(410,575,30,40);
    block4 = new Block(440,575,30,40);
    block5 = new Block(470,575,30,40);
    block6 = new Block(500,575,30,40);
    block7 = new Block(530,575,30,40);

    //second level
    block8 = new Block(365,535,30,40);
    block9 = new Block(395,535,30,40);
    block10 = new Block(425,535,30,40);
    block11 = new Block(455,535,30,40);
    block12 = new Block(485,535,30,40);
    block13 = new Block(515,535,30,40);

    block14 = new Block(580,375,30,40);
    block15 = new Block(610,375,30,40);
    block16 = new Block(640,375,30,40);
    block17 = new Block(670,375,30,40);
    block18 = new Block(700,375,30,40);

    block19 = new Block(595,335,30,40);
    block20 = new Block(625,335,30,40);
    block21 = new Block(655,335,30,40);
    block22 = new Block(685,335,30,40);

    block23 = new Block(610,295,30,40);
    block24 = new Block(640,295,30,40);
    block25 = new Block(380,495,30,40);
}

function draw()
{
    background(56,44,44);
    Engine.update(engine);
    
    ground.display();

    stand1.display();
    stand2.display();

    console.log(polygon.position);

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y,40,40);

    slingshot.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

}
