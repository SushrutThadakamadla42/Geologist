class Rubber {
  constructor(x, y, diameter) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,diameter, options);
    this.width = diameter;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("darkblue");
    strokeWeight(30);
    rectMode(CENTER);
    fill("blue");
    ellipse(0, 0, this.width);
    pop();
  }
};
 