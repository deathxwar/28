class Mango{
    constructor(x,y){
        var Options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,70,70);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("mango.png");
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }
}
