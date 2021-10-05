class HappyZone{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.fillColor = [220, 220,40]
        this.startAlpha = 120
        this.activeAlpha = 255
        this.strokeColor = [220,0, 220]
        this.freeze = false
    }

    activate(){
        this.activated = true
    }


    move(){
        if(random(0,100) > 95){
            this.x = random(0, canvasWidth - this.size)
            this.y = random(0, canvasHeight - this.size)
        } 
    }

    render(){
        if(this.activated){
            fill(this.fillColor.concat(this.activeAlpha))
        }else{
            fill(this.fillColor.concat(this.startAlpha)) 
        }
       
        setLineDash([5,15])
        stroke(this.strokeColor)
        rect(this.x, this.y, this.size, this.size)
    }

    leave(){
        this.happy = false
        this.activated = false;
        this.x = random(0, canvasWidth - this.size)
        this.y = random(0, canvasHeight - this.size)
    }

    // restart = () => {
    //     console.log('should restart')
    //     this.activated = false
    //     this.freeze = false
    //     happyTimes.restarting = false
    //     this.x = random(0, canvasWidth - this.size)
    //     this.y = random(0, canvasHeight - this.size)

    // }

    update(){
        this.move()
    }
}