

let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false //flag = bandeira

function abrirOuFecharMenu() {

    if (aberto === true) {
      aberto = false
      menuMobile.classList.remove('aberto')
      botaoMenu.innerHTML = ('abrir menu')
    } else if (aberto === false) {
      aberto = true
      menuMobile.classList.add('aberto')
      botaoMenu.innerHTML = ('fechar menu')
    }

    
}