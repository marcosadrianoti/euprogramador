/*
Escreva uma função em JavaScript que verifica se um objeto tem a propriedade
passada como argumento.

const obj = { name: 'Marcle' }

hasKey(obj, 'name') // => true
hasKey(obj, 'different') //=> false
*/

const obj = { name: 'Marcle' }

console.log(hasKey(obj, "name"));
console.log(hasKey(obj, "different"));

function hasKey(obj, property) {
    return obj.hasOwnProperty(property);
}