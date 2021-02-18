/*
Escreva uma função que verifica se uma entrada é um array ou não.
console.log(is_array('mentoria')); // => false
console.log(is_array([1, 2, 4, 0])); // => true
*/

const meuArray = [1,2,4,0];

console.log(`É Array? ${is_array(meuArray)}`);

function is_array(test) {
    return Array.isArray(test) ? "Sim" : "Não";
}