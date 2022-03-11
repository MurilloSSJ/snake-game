import {Snake} from './snake.js'
import {Apple} from './apple.js'
const canvas = document.querySelector("#canvas")
var snake = new Snake()
var apple = new Apple(snake)
//var coin = new Apple();
var canvasContext = canvas.getContext('2d')

window.onload = () =>{
    loop()
}
function loop(){
    setInterval(show, 1000/10)
}

function show(){
    snake.move()
    eatCoin()
    //Inicializando tela
    componentRender(0,0,canvas.width,canvas.height,'black')
    //Inicializando score
    canvasContext.font = '50px Arial'
    canvasContext.fillStyle = '#00FF42'
    canvasContext.fillText("Score: *",snake.size,canvas.width-120,50)
    //Inicializando a cobra
    componentRender(apple.x,apple.y,apple.size,apple.size,apple.color)
    for(let i=0;i< snake.tail.length; i++){
        componentRender(snake.tail[i].x +2.5,snake.tail[0].y +2.5,snake.size -5,snake.size -5,'white')
    }
}
function componentRender(x,y,width,height,color){
    canvasContext.fillStyle = color // Define cor de preenchimento
    canvasContext.fillRect(x,y,width,height) //Preenche area
}

//Evento de andar
window.addEventListener('keydown',(event)=>{
    if(event.code == 'ArrowUp'){
        snake.rotateY = -1
        snake.rotateX = 0
    }else if(event.code == 'ArrowDown'){
        snake.rotateY = 1
        snake.rotateX = 0
    }else if(event.code == 'ArrowLeft'){
        snake.rotateX = -1
        snake.rotateY = 0
    }else if(event.code == 'ArrowRight'){
        snake.rotateX = 1
        snake.rotateY = 0
    }
})

//Comer maçã
function eatCoin(){
    for(let i=0;i<snake.tail.length;i++){
        if(Math.abs(snake.tail[i].x - apple.x <=snake.size) && Math.abs(snake.tail[i].y - apple.y <= snake.size)){
            snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
            apple = new Apple(snake) 
        }
    }
}
//function gameLoop(){
  //  setInterval(show,1000/15) //15 fps
//}