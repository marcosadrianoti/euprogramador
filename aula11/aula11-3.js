/*
Escreva uma função que recebe um array e retorna o último elemento do array
se nenhum outro argumento for passado, porém se outro argumento for
passado ela vai retornar os ultimos n elementos do array.
console.log(first([1,2,3])) // => 3
console.log(first([1,2,3], 2)) // => [2,3]
*/

let array = [1, 2, 3, 4, 5];

console.log(last(array, 3));

function last(array, nLasts = 1) {
    let newNLasts = array.slice(nLasts * -1);
    return newNLasts;
}