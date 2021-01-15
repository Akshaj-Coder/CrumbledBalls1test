class dustbin {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dustbinwidth = 200;
        this.dustbinheight = 100;
        this.wallthickness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.dustbinheight,this.wallthickness, {isStatic:true});
        this.leftBody = Bodies.rectangle(this.x - this.dustbinwidth/2,this.y - this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightwall = Bodies.rectangle(this.x + this.dustbinwidth/2, this.y + this.dustbinheight/2, this.wallthickness,this.dustbinheight,{isStatic: true});
        Matter.Body.setAngle(this.rightwall, -1*this.angle);
        World.add(this.bottomBody,world);
        World.add(this.leftBody,world);
        World.add(this.rightwall,world);
    }

    display() {
        var posbottom = this.bottomBody.position;
        var posleft = this.leftBody.position;
        var posright = this.rightwall.position;

        //push();
        translate(posleft.x , posleft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0, this.wallthickness,this.dustbinheight);
        //pop();

        //push();
        translate(posright.x , posright.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0, this.wallthickness,this.dustbinheight);
        //pop();

        //push();
        translate(posbottom.x , posbottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0, this.wallthickness,this.dustbinwidth);
        //pop();
    }

}