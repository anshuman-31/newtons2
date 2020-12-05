const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Mouseconstraints = Matter.Mouseconstraints

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
var pendulum;


function setup(){
    createCanvas(3000,400)
    engine = Engine.create();
	world = engine.world;

	 bob1=new Bob(400,600,40);
	 bob2=new Bob(500,600,40); 
	 bob3=new Bob(600,600,40);
	 bob4=new Bob(700,600,40); 
	 bob5=new Bob(800,600,40);
	 ground1 = new Roof(300,100,600,40);
	 sling1= new Rope(bob1.body,ground1.body,-50*2,0); 
	 sling2= new Rope(bob2.body,ground1.body,-25*2,0);
	 sling3= new Rope(bob3.body,ground1.body,-0*2,0); 
	 sling4= new Rope(bob4.body,ground1.body,25*2,0);
   sling5= new Rope(bob5.body,ground1.body,50*2,0);
	


}
function draw(){
 background("black")
 Engine.update(engine);
 World.update(world);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 sling1.display();
 sling2.display();
 sling3.display(); 
 sling4.display();
 sling5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY})

}