class WreckingBall{
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 0.6,
            density: 1,
            frictionAir: 0.005
        }
        this.body = Bodies.rectangle(x,y,width,height,angle,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
        display(){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("grey");
            ellipse(0,0,this.width,this.height);
            pop(); 

        }
}