class Stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}