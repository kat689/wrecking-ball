class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          density:0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black")
        rect(0, 0, this.width, this.height);
        pop();
      }
}
