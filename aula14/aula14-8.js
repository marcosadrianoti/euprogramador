/*
Escreva uma função que retorne o primeiro caractere não repetido.
Exemplo: 'abacddbec'
Saida Esperada: 'e'
*/

const myString = "abacddbec";

console.log(getUniqueCharacter(myString));

function getUniqueCharacter(string) {
    const uniqueElements = new Set(string);
    const arrayMyString = [...string];
    
    for(let element of uniqueElements) {
        if (arrayMyString.indexOf(element) === arrayMyString.lastIndexOf(element)) {
            return element;
        }
    }
}