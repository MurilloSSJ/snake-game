const canvas = document.querySelector('#canvas')
class Snake{
    constructor(){
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.size = 15
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 1
        this.rotateY = 0
        this.spacing = 3
    }
    move(){
        let newRect
        if(this.tail[0].x > canvas.width){
            newRect = {
                x: this.tail[0].x - canvas.width,
                y: this.tail[0].y
            }
        }
        else if(this.tail[0].x < 0){
            newRect = {
                x: canvas.width - Math.abs(this.tail[0].x),
                y: this.tail[0].y
            }
        }
        else if(this.tail[0].y>canvas.height){
            newRect = {
                x: this.tail[0].x,
                y: this.tail[0].y - canvas.height
            }
        }else if(this.tail[0].y < 0){
            newRect = {
                x: this.tail[0].x,
                y: canvas.height - Math.abs(this.tail[0].y)
            }
        }
        else if (this.rotateX != 0){
            let xPosition = this.rotateX == 1 ? this.tail[0].x + this.size : this.tail[0].x - this.size
            newRect = {
                x: xPosition,
                y: this.tail[0].y
            }
        }else{
            let yPosition = this.rotateY == 1 ? this.tail[0].y - this.size : this.tail[0].y + this.size
            newRect = {
                y:yPosition,
                x:this.tail[0].x
            }
        }
        this.tail.pop()
        this.tail.unshift(newRect)
    }
    eat(){
        let newRect
        if (this.rotateX != 0){
            let xPosition = this.rotateX == 1 ? this.tail[this.tail.length -1].x + this.size : this.tail[this.tail.length -1].x - this.size
            newRect = {
                x: xPosition,
                y: this.tail[0].y
            }
        }else{
            let yPosition = this.rotateY == 1 ? this.tail[0].y - this.size : this.tail[0].y + this.size
            newRect = {
                y:yPosition,
                x:this.tail[0].x
            }
        }
        this.tail.push(newRect)
    }
    gameOver(){
        if (this.tail.length > 1){
            var newTail = this.tail[0]
            for(let i = 1;i < this.tail.length;i++){
                if(newTail.x == this.tail[i].x && newTail.y == this.tail[i].y){
                    return true
                }
            }
            return false
        }
        return false
    }
}
export {Snake}