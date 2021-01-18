class Boy {


    constructor(x, y, width,height) {

        var options = {

            isStatic: true,
            restitution: 0,
            fricton: 1

        }


        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/boy.png");

        World.add(world, this.body)



    }
    display() {
        rectMode(CENTER)
        var pos = this.body.position;
        push();
        fill("white")
        stroke("white")
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0,250, 250);
        pop();


    }
}