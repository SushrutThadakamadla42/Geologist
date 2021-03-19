class Hammer {
    constructor(width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2.0
      }
      this.body = Bodies.rectangle(width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      pos.x =mouseX;
      pos.y =mouseY;
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("brown");
      strokeWeight(4);
      rectMode(CENTER);
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
 