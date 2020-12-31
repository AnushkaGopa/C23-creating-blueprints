class Box{
    /*using a pre-defined function which helps to assign properties 
    and create bodies*/
    constructor(x,y,width,height){
        var options ={
           restitution:1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
//user-defined function to draw the objects/bodies
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
    }
}