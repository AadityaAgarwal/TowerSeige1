class Ball{

    constructor(x,y){
        var st= {isStatic: false}
        this.obj= Matter.Bodies.rectangle(x,y,50,20,st);
        this.x=x;
        this.y=y;
        Matter.World.add(world,this.obj);
        this.img= loadImage("sprites/untitled.png");
    }

    display(){
        ellipseMode(RADIUS);
        rectMode(CENTER);
        image(this.img,this.x,this.y,100,100); 
    }
}