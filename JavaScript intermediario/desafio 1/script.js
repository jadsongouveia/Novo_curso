

let btn = document.querySelector('#btn')

let texto = document.querySelector('#texto')

let count = 0

btn.addEventListener("click", function(){
    count++
    texto.innerHTML = count

})


let btn2 = document.querySelector('#btn2')

let texto2 = document.querySelector('#texto2')

btn2.addEventListener("click", function(){
    count--
    texto2.innerHTML = count
})

    
