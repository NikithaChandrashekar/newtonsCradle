class Chain{
    constructor(body1,body2){

        
        var options = {
            bodyA: body1,
            bodyB:body2,
            stiffness: 0.04,
            length: 10
            

        }
        
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    
    display(){

        this.x=x;
        this.y=y;

        line(this.body1.x,this.body1.y,this.body2.x,this.body2.y)
        

    }
    
}