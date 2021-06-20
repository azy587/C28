class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            length: 10,
            stiffness: 0.03,
            bodyA: bodyA,
            pointB: pointB 
        }
        this.pointB=pointB
        this.sling = Constraint.create(options) 
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
        
    }
    }
    
        