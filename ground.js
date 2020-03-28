class Ground {
constructor(){
var options = {
    isStatic : true
}    
this.body = (Bodies.rectangle(400,380,800,20,options))    
World.add(world,this.body)
}
display(){
    rectMode(CENTER)
    var position = this.body.position
    fill("green")
    rect(position.x,position.y,800,20)
}
}
