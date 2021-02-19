/*
Escreva uma função que ordene os elementos de um array de ordem
decrescente.
*/

const array = [1,2,5,3,6,4];

const decrescent = (array) => array.sort(function(a,b) {return b-a});

console.log(decrescent(array));