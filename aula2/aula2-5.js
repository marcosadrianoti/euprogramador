// 05. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos
// os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou
// último índice em que o número aparece (como nos métodos indexOf e
// lastIndexOf).

const meuNumero = 3;
const meuVetor = [2,3,4,2,3,7,2];

if (posicoes(meuVetor, meuNumero) == '') {
    console.log(`O número ${meuNumero} não está presente no vetor.`)
} else {
    console.log(`O número ${meuNumero} aparece no vetor nos seguintes indices: ${posicoes(meuVetor, meuNumero)}`)
}

function posicoes(meuVetor, qualNumero) {
    let listaIndices = [];
    let indice = 0;
    meuVetor.forEach(element => {
        if (element == qualNumero) {
            listaIndices.push(indice);
        }
        indice += 1;
    });
    return listaIndices;
}