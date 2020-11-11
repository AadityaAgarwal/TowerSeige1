class Sling{

    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 10
        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
      
    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            
            stroke("yellow");
            line(pointA.x, pointA.y,pointB.x,pointB.y);
            
           
        }
    }
    
}
