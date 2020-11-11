class Target{

    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3
        }
        this.obj= Matter.Bodies.rectangle(x,y,20,20,options);
        this.x= x;
        this.y= y;
        Matter.World.add(world,this.obj);    
    }

    display(){
        fill("pink");
        rect(this.x,this.y,30,40);
    }
}