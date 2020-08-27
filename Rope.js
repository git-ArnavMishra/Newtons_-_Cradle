class  Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
           // length:80,
           // stiffness:0.6
            
        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
  
    display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      strokeWeight(2);
      var Anchor1X = pointA.x;
      var Anchor1Y = pointA.y;
      
      var Anchor2X = pointB.x+this.offsetX;
      var Anchor2Y = pointB.y;
      fill(120,0,2);
      //console.log(Anchor1X);
      //console.log(Anchor1Y);
      //console.log(Anchor2X);
      //console.log(Anchor2Y);
      //console.log("<_===_>")
      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
  }