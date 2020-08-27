class BaseClass{
    constructor(x,y,d) {
        var options = {
            isStatic:false,
              restitution:0.9,
              friction:8,
              density:1.21,
              gravity:7   
          }
        this.body = Bodies.circle(x, y,d/2, options);
        World.add(world, this.body);
        this.width = d;
      }
      display(){
        var pos = this.body.position;
     
        //var angle = this.body.angle;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //ellipseMode(CENTER);
        fill(120,58,56);
        ellipse(pos.x, pos.y,this.width);
        pop();
      }
}