/*
Escreva uma função que recebe um array e retorna o primeiro elemento do
array se nenhum outro argumento for passado, porém se outro argumento for
passado ela vai retornar os n primeiros elementos do array.
console.log(first([1,2,3])) // => 1
console.log(first([1,2,3], 2)) // => [1,2]
*/

const array = [1, 2, 3, 4, 5];

console.log(first(array, 3));

function first(array, nFirsts = 1) {
    let newNFirsts = array.slice(0, nFirsts);
    return newNFirsts;
}