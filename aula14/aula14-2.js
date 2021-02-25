/*
Escreva uma função em JavaScript que verifique se uma string passada é um
palindromo ou não.
Um palindromo é uma palavra, frase ou sequencia que é lida da mesma
maneira de trás pra frente, por exemplo: "madam", "nurses run", "roma me tem
amor".
*/

const myString = "roma me tem amor";

console.log(isPalindromo(myString));

function isPalindromo(myString) {
    
    if (typeof myString !== "string" || myString === "") {
        return false;
    }else if(myString.length === 1){
        return true;
    }

    let myInvertedString = "";
    let myNormalizedString = "";
    let letter = "";
    
    for (let i = myString.length - 1; i >= 0; i--) {
        letter = myString[i] != " " ? myString[i].toLowerCase() : "";
        myInvertedString = myInvertedString + letter;
        myNormalizedString = letter + myNormalizedString;
    }

    return myNormalizedString === myInvertedString;
}