class Block
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            restitution:0.4,
            friction:0.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = rgb(random(0,255),random(0,255), random(0,255));
        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}