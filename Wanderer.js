class Wanderer {
    constructor(x,y,size){
        this.x = x
        this.y = y
        this.size = size
        this.color = [220, 20 ,220]
        this.strokeColor = [50, 220, 220]
        this.initSpeedX = random(-5,5)
        this.initSpeedY = random(-5,5) 
        this.speedX = this.initSpeedX
        this.speedY = this.initSpeedY
        this.happy = false
    }

    bliss(){
        this.speedX = 0
        this.speedY = 0
        this.happy = true
    }

    deBliss(){
        this.speedX = this.initSpeedX
        this.speedY = this.initSpeedY
        this.happy = false
    }


    

    checkEdges(){
        if(this.x < 0){
            this.x = canvasWidth
        }
        if(this.x > canvasWidth){
            this.x = 0
        }
        if(this.y < 0){
            this.y = canvasHeight
        }        canvasWidth
        if(this.y > canvasHeight){
            this.y = 0
        }

    }

    
    move(){
        this.x += this.speedX
        this.y += this.speedY
    }

    render(){
        fill(this.color)
        setLineDash([0,0])
        stroke(this.strokeColor)
        strokeWeight(5)
        ellipse(this.x, this.y, this.size)
        if(this.happy){
            this.smile()
        }
    }    

    smile(){
            fill(0)
            stroke(0)
            ellipse(this.x - this.size/4, this.y - this.size/4, this.size/10)
            ellipse(this.x + this.size/4, this.y - this.size/4, this.size/10)
            noFill()
            stroke(0)
            strokeWeight(10)
            arc(this.x, this.y, this.size/4, this.size/4, QUARTER_PI, PI - QUARTER_PI)
    }

    update(){
        this.checkEdges()
        this.move()
    }
}