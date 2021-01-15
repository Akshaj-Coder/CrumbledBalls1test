class paper {
    constructor(x,y,width,height, angle) {
        var options = {
            isStatic: false
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(this.x,this.y,this.height,this.width,this.angle)
    }

    display() {
        var pos = this.body.position;

        //push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height,angle);
        //pop();
    }

}