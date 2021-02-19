/*
Escreva uma função que remova um elemento especifico do array.
console.log(remove([1,2,3], 3)); // => [1,2]
*/

let array = [1,2,3,4,5];

console.log(removeElement(array, 3))

function removeElement(array, element) {
    let elementIndex = array.indexOf(element);    
    array.splice(elementIndex, 1);

    return array;
}