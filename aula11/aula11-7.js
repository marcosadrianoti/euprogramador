/*
Escreva uma função para encontrar um elemento em um array, caso exista
retornar a posição, caso não exista retornar null.
*/

const array = [1,2,3,4,5];
const element = 3;

console.log(`Índice do elemento: ${findIndex(array, element)}`)

function findIndex(array, element) {
    let elementIndex = array.indexOf(element);    
    return elementIndex == -1 ? null : elementIndex;
}