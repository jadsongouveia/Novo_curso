
let quadrado = document.querySelector ('.quadrado')

function minhaFuncao(evento){
  console.log(evento.key)
}
//   TIPOS DE Eventos(Tire a barra de comentarios e veja oq fazem)

//quadrado.onclick = minhaFuncao

//quadrado.onmousemove = minhaFuncao

//quadrado.onmouseenter = minhaFuncao

//quadrado.onmouseout = minhaFuncao


//window.addEventListener('resize', minhaFuncao)

window.addEventListener('keypress', minhaFuncao)