class Stone {


    constructor(x, y, r) {

        var options = {

            isStatic: false,
            restitution: 0,
            fricton: 1,
            density: 1.2

        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Sprites/stone.png");
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
        image(this.image, 0, 0, 70,70);
        pop();
  

    }
}