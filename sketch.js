const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint

var engine;
var world;

var ground;

var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box12,box13,box14,box15,box16,box17;
var box18,box19,box20,box21,box22,box23,box24;

var ball; 

var connection;


function setup() {
  createCanvas(3000,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500,640,3000,20);

  box1 = new Box(900,550,70,70);
  box2 = new Box(900,500,70,70);
  box3 = new Box(900,450,70,70);
  box4 = new Box(900,400,70,70);
  box5 = new Box(900,350,70,70);
  box6 = new Box(900,300,70,70);
  box7 = new Box(900,250,70,70);
  box8 = new Box(900,200,70,70);
  box9 = new Box(900,150,70,70);
  box10 = new Box(970,550,70,70);
  box11 = new Box(970,500,70,70);
  box12= new Box(970,450,70,70);
  box13= new Box(970,400,70,70);
  box14= new Box(970,350,70,70);
  box15= new Box(970,300,70,70);
  box16= new Box(970,250,70,70);
  box17= new Box(970,200,70,70);
  box18 = new Box(830,550,70,70);
  box19 = new Box(830,500,70,70);
  box20= new Box(830,450,70,70);
  box21= new Box(830,400,70,70);
  box22= new Box(830,350,70,70);
  box23= new Box(830,300,70,70);
  box24= new Box(830,250,70,70);
  
  ball = new WreckingBall(200,200,80,80);

  connection = new Rope(ball.body,{x: 600, y:50});
  
  
}

function draw() {
  background(255);  
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  ball.display();

  connection.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}