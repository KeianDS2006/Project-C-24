class Paper{
    constructor(x,y,radius){
    var options={isStatic:false, "restitution":0.3, "friction":0.5, "density":1.2};
    this.body=Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    //this.image=loadImage("paper.png");
    this.radius=radius;
    }
    display(){
    var pos=this.body.position;
    ellipse(pos.x,pos.y,this.radius);
    }
}