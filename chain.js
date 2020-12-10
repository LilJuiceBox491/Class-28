class Chain{
    constructor(bodyA,pointB){
        var op ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 5,
            length: 7
        }
        this.pointB=pointB;
        this.chain=Constraint.create(op);
        World.add(world, this.chain);
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        stroke('Blue');
        line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }
    fly(){
        this.chain.bodyA=null;
    }
}