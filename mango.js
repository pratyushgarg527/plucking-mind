class Mango {


    constructor(x, y, r) {

        var options = {

            isStatic: true,
            restitution: 0,
            fricton: 1

        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Sprites/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)



    }
    display(){
        rectMode(CENTER)
        var pos =this.body.position;
        push();
        fill("white")
        stroke("white")
        translate(pos.x, pos.y);
        rect(0, 0, this.r);
        imageMode(CENTER);
        image(this.image, 10, 0, 60,60);
        pop();
  

    }
}