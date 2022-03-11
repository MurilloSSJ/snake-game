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
        if (this.rotateX != 0){
            let xPosition = this.rotateX == 1 ? this.tail[this.tail.length -1].x + this.size : this.tail[this.tail.length -1].x - this.size
            newRect = {
                x: xPosition,
                y: this.tail[this.tail.length -1].y
            }
        }else{
            let yPosition = this.rotateY == 1 ? this.tail[this.tail.length -1].y + this.size : this.tail[this.tail.length -1].y - this.size
            newRect = {
                y:yPosition,
                x:this.tail[this.tail.length -1].x
            }
        }
        this.tail.shift()
        this.tail.push(newRect)
    }
    eat(){
        let newRect
        if (this.rotateX != 0){
            let xPosition = this.rotateX == 1 ? this.tail[this.tail.length -1].x + this.size : this.tail[this.tail.length -1].x - this.size
            newRect = {
                x: xPosition,
                y: this.tail[this.tail.length -1].y
            }
        }else{
            let yPosition = this.rotateY == 1 ? this.tail[this.tail.length -1].y + this.size : this.tail[this.tail.length -1].y - this.size
            newRect = {
                y:yPosition,
                x:this.tail[this.tail.length -1].x
            }
        }
        this.tail.push(newRect)
    }
}
export {Snake}