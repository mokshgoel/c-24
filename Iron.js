class Iron {
    constructor (x,y,width,height){
        var options ={
          density :12,
         restition: 0.8,
         friction:0.9
    
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=50
        this.height=60
        World.add(world,this.body)
    
    }
    display(){
    var pos =this.body.position
    var angle = this.body.angle
    
    
    push()
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('orange')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }}