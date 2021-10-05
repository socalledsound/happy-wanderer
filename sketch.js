let mister, happyTimes
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight


function setup(){
    createCanvas(canvasWidth, canvasHeight)
    mister = new Wanderer(
        canvasWidth/2,
        canvasHeight/2,
        canvasWidth/10
    )
    happyTimes = new HappyZone(
        canvasWidth/2 + canvasWidth/4,
        canvasHeight/2,
        canvasWidth/5,
    )
}

function draw(){
    background(40)
    
    mister.update(happyTimes)
    happyTimes.update()
   
    happyTimes.render()
    mister.render()
}