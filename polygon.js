class Polygon {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.circle(x, y,r, options);
      this.radius = r;
      this.image= loadImage("polygon.png");
      
      
      World.add(world,this.body);

      
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      //imageMode(CENTER);
      fill(255);
     image(this.image,this.body.position.x,this.body.position.y,40,40);
       pop();
    
    }
  };
  