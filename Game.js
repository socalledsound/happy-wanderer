class Game{
    constructor(canvasWidth, canvasHeight){
        this.wanderer = new Wanderer(
            canvasWidth/2,
            canvasHeight/2,
            canvasWidth/10
        )
        this.happyZone =  new HappyZone(
            canvasWidth/2 + canvasWidth/4,
            canvasHeight/2,
            canvasWidth/5,
        )
        this.freeze = false
        this.restarting = false
    }


    checkCollision(){
        const collision = 
            checkCollisionCircleSquare(
                this.wanderer.x, this.wanderer.y, this.wanderer.size, 
                this.happyZone.x, this.happyZone.y, this.happyZone.size
                ) 
        if( collision){
            this.happyZone.activate()
            this.wanderer.bliss()
            this.freeze = true
            if(this.freeze && !this.restarting){
                setTimeout(this.restart, 1000)
                this.restarting = true
            }
        }

    }

    render(){
        this.happyZone.render() 
        this.wanderer.render()
      
    }

    restart = () => {
        this.freeze = false
        this.happyZone.leave()
        this.wanderer.deBliss()
        this.restarting = false

    }

    update(){
        this.checkCollision()
        if(!this.freeze){
            this.wanderer.update()
            this.happyZone.update()
        }
       

    }


}