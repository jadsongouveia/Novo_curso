let inputNota1 = prompt('Digite Sua Nota')
let inputNota2 = prompt('Digite Sua Segunda Nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write('ok, você passou de ano!')
} else if (media < mediaMinima) {
    document.write('Você não passou!')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Parábens você tirou a nota maxíma')
} else if (media >= mediaMinima && media === 9){
    document.write('Você mandou bem, mas pode ser ainda melhor')
}

if (media >= mediaMinima && media === 8) {
    document.write('mas podemos melhorar isso')
} else if (media === mediaMinima ){
    document.write('Mas precisa melhorar')
}

if (media < mediaMinima && media === 6) {
    document.write('Chegou perto mas nao passou')
} 

if (media < mediaMinima && media === 1) {
    document.write('Pior que isso você foi reprovado')
}else if (media < mediaMinima && media === 2) {
    document.write('Pior que isso você foi reprovado')
} else if (media < mediaMinima && media === 3) {
    document.write('Pior você foi reprovado')
}