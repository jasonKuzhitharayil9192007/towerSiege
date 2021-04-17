class Ground
{
    constructor()
    {
        var options=
        {
            'isStatic': true
        }
        this.ground = Bodies.rectangle(450,890,900,20,options);
        World.add(world,this.ground);
    }

    display()
    {
        var pos = this.ground.position;
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(pos.x,pos.y,900,20);
    }

}