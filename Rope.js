class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.5,
            length: 310
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("red");
        strokeWeight("black");
        line(posA.x,posA.y,pointB.x,pointB.y);
        pop();
    }
}