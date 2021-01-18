class Ground {


    constructor(x, y, width,height) {

        var options = {

            isStatic: true,
            restitution: 0,
            fricton: 1

        }


        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body)



    }
    display() {
        rectMode(CENTER)
        var pos = this.body.position;
        push();
        fill("#6E3D10")
        stroke("#6E3D10")
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
        pop();


    }
}