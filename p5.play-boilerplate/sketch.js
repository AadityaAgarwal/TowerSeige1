var ball;
//for the front targets
//6,4,2,1
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13; 

//for the back ones
//4,2,1
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13;

var stand1,stand2;


function setup(){
  createCanvas(800,400);

  engine = Matter.Engine.create();
	world = engine.world;

  var st= {isStatic: true}
  stand1= Matter.Bodies.rectangle(390,250,200,20,st);
  Matter.World.add(world,stand1);

  stand2= Matter.Bodies.rectangle(650,200,200,20,st);
  Matter.World.add(world,stand2);

  t1= new Target(330,235);
  t2= new Target(360,235);
  t3= new Target(390,235);
  t4= new Target(420,235);
  t5= new Target(450,235);
  //second
  t6= new Green(360,195);
  t7= new Green(390,195);
  t8= new Green(420,195);
  //third
  t9= Matter.Bodies.rectangle(390,155,30,40);
  Matter.World.add(world,t9);

  //first1
  b1= new Target(650,170);
  b2= new Target(620,170);
  b3= new Target(590,170);
  b4= new Target(680,170);
  b5= new Target(680,170);

  b6= new Green(635,130);
  b7= new Green(605,130);
  b8= new Green(665,130);

  b9= new Green(620,90);
  b10= new Green(650,90);
  b11= new Green(635,50);

  ball= new Ball(50,250);

  shot= new Sling(ball.body,{x: 50,y: 250});
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Matter.Engine.update(engine);
  background(0);  
  var pos= stand1.position;
 


  ball.x= mouseX;
  ball.y= mouseY;

  ball.display();
  t1.display()
  t2.display()
  t3.display()
  t4.display();
  t5.display()
  t6.display();
  t7.display();
  t8.display()
  rect(t9.position.x,t9.position.y,30,40);
  
  fill("cyan");
  rect(pos.x,pos.y,200,20);
  rect(stand2.position.x,stand2.position.y,200,20);
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
  shot.display();
 
 // detectCollision(ball,t1);
  //detectCollision(ball,t2);
  //detectCollision(ball,t3);
  //detectCollision(ball,t4);
  //detectCollision(ball,t5);
  //detectCollision(ball,t6);
  //detectCollision(ball,t7);
  //detectCollision(ball,t8);

 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
  ball.fly();
}

//function detectCollision(lball,ltarget){

 // var bpos= lball.body.position;
  //var bpos1= ltarget.body.position;
  //var distance= dis(bpos.x,bpos.y,bpos1.x,bpos1.y)
  //if(dist<=ltarget.width/2 + lball.width/2){
    //Matter.body.setStatic(ltarget.body,false);
  //}
//}