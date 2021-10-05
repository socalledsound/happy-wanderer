const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let game

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    game = new Game(canvasWidth, canvasHeight)
}

function draw(){
    background(40)
    game.update()
    game.render()
}