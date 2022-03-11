const canvas = document.querySelector("#canvas")
class Apple{
    constructor(snake){
        this.x = Math.floor(Math.random() * canvas.width / 2) * 2
        this.y = Math.floor(Math.random() * canvas.height / 2) * 2
        this.size = 15
        let touching = false
        while(true){
            for(let i=0;i<snake.tail.length;i++){
                if(snake.tail[i].x == this.x && snake.tail[i].y == snake.y){
                    this.x = Math.floor(Math.random() * canvas.width)
                    this.y = Math.floor(Math.random() * canvas.height)
                    touching = true
                }
            }
            if(!touching){
                break
            }
        }
        this.color = 'pink'
    }
}
export {Apple}