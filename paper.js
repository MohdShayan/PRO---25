class Paper {
    constructor(x, y) {
      var ball_options = {
        isStatic: false,
        restitution:0.3,
        friction:2,
        density:0.2,

      }
      this.body = Bodies.circle(x, y,58, ball_options);
      World.add(world, this.body);
      this.image=loadImage("paper.png");
    }
    display(){
      
      var pos =this.body.position;
 
      push();
     
      translate(pos.x, pos.y);
     
      strokeWeight(10);
       stroke("orange")
    
      fill(255);
     // circle(0, 0,70);
     image (this.image,0,0,70,70);
      pop();
    }
  }
  