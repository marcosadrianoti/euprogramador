/*
Escreva uma função em JavaScript que retorna uma string passada com as
letras em ordem alfabética. Assuma que pontuações e números não estão
incluidas na string passada.
Exemplo: "webmaster"
Saida Esperada: "abeemrstw"

function alphabeticalOrder(string) {
  const withoutSpaces = string.replace(/ /g, '');

  return withoutSpaces
    .split('')
    .sort()
    .join('');
}

console.log(alphabeticalOrder('edcba'));
console.log(alphabeticalOrder('cba'));
console.log(alphabeticalOrder('webmaster'));
*/

const myString = "cgedefba"; //abcdeefg
// const myString = "marcos"; //acmors

console.log(alphabeticalOrder(myString));

function alphabeticalOrder(myString) {
//    const withoutSpaces = myString.replace(/ /g, '');  
    let myStringOrdered = "_"; //1
    let letter = ""; //1
    indexLetter = 0; //1

    for (let i = 0; i <= myString.length - 1; i++) { //n
        letter = myString[i]; //1
        lastLetter = myStringOrdered[myStringOrdered.length-1]; //1

        if (letter > lastLetter) { //1
            myStringOrdered = myStringOrdered + letter; //2

        }else{
            for (let index = myStringOrdered.length - 1; index >= 0; index--) { //n

                if (letter >= myStringOrdered[index]){ //1
                    myStringOrdered = myStringOrdered.substring(0, index+1) + letter + myStringOrdered.substring(index+1); //2
                    break;
                }
            }
        }
    }
    return myStringOrdered.slice(1,myStringOrdered.length); //Retira o caracter "_" do início da string. Pequena gambiarra!  
} //1

// O(alphabeticalOrder(myString)) = 1+1+1+n*(1+2+n+1+2)+1
// O(alphabeticalOrder(myString)) = 4+n*(1+2+n+1+2)
// O(alphabeticalOrder(myString)) = 4+n*(1n+2n+n^2+1n+2n)
// O(alphabeticalOrder(myString)) = 4+6n+n^2
// O(alphabeticalOrder(myString)) = n^2
// Complexidade ===> O(n^2)


