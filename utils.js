
function setLineDash(list) {
    drawingContext.setLineDash(list);
  }

const checkCollisionCircleSquare = (ax, ay, asize, bx, by, bsize) => {
    
    if(ax + asize/2 > bx &&
        ax -asize/2 < bx + bsize &&
        ay + asize/2 > by &&
        ay - asize/2 < by + bsize){
            return true
        }else{
            return false
        }
    
    
}