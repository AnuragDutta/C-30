class Catapault{
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.01
        } 
        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png')
        this.sling3=loadImage('sprites/sling3.png')
        this.pointB = point2
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        image(this.sling1,260,20)
        image(this.sling2,230,20)
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push()
            strokeWeight(10)
            stroke(48,22,8)
            line(pointA.x-25,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            pop()
        }
        
    }


    fly(){
        this.sling.bodyA= null

    }


    attach (body){
        this.sling.bodyA= body
    }
}