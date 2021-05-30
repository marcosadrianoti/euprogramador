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
    
    if (typeof myString !== "string" || myString === "") { //1
        return false; //1
    }else if(myString.length === 1){ //1
        return true; //1
    }

    let myInvertedString = ""; //1
    let myNormalizedString = ""; //1
    let letter = ""; //1
    
    for (let i = myString.length - 1; i >= 0; i--) { // n
        letter = myString[i] != " " ? myString[i].toLowerCase() : ""; //2
        myInvertedString = myInvertedString + letter; //2
        myNormalizedString = letter + myNormalizedString; //2
    }

    return myNormalizedString === myInvertedString; //1
}

// O(isPalindromo(myString)) = 1+1+1+1+1+1+1+n*(2+2+2)+1
// O(isPalindromo(myString)) = 8+n*(2+2+2)+1
// O(isPalindromo(myString)) = 8+(6n)
// O(isPalindromo(myString)) = (n)
// Complexidade ===> O(n)