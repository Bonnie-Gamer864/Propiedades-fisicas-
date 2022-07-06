const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    hammer = new Hammer(10,100);
    
    iron = new Iron (200, 400);
    iron2 = new Iron (200, 100);
    iron3 = new Iron (350, 200);
    iron4 = new Iron (250, 350)

    rock = new Rocks (600, 400);
    rock2 = new Rocks (660, 400);
    rock3 = new Rocks (630, 350);
    rock4 = new Rocks (630, 320);

    rubber = new Rubber (1000, 400, 100);
    rubber2 = new Rubber (300, 100, 100);
    rubber3 = new Rubber (900, 400, 100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    
    hammer.display();

    iron.display();
    iron2.display();
    iron3.display();
    iron4.display();
    
    rock.display();
    rock2.display();
    rock3.display();
    rock4.display();

    rubber.display();
    rubber2.display();
    rubber3.display();
}