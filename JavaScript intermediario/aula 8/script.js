

let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval (function(){
    count++
    contador.innerText = count
}, 500, onclick)



let botaoPausar = document.querySelector('#botaoPausar')

botaoPausar.onclick = function(){
    clearInterval(intervalo)
    
}