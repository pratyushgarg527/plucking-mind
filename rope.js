class Rope{


    constructor(bodyA,pointB){

        var options={

            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.1,
            length: 10
        }

        this.pointB=pointB

        this.dhaaga = Constraint.create(options)
        World.add(world,this.dhaaga)

    }
display(){


    var pointA=this.dhaaga.bodyA.position
    var pointB=this.pointB
    strokeWeight(5)
    stroke("white")
    
    
    
}
}