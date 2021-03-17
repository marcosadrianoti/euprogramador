/*
You have two strings, a and b. Find a string, s, such that:

> s can be expressed as s = sa + sb where sa is a non-empty substring of a and sb is a non-empty substring of b.
> s is a palindromic string.
> The length of s is as long as possible.

For each of the q pairs of strings (ai and bi) received as input, find and print string si on a new line. If you're able to form more than one valid string si, print whichever one comes first alphabetically. If there is no valid answer, print -1 instead.

ENTRADA:
    Receber duas strings.
PROCESSAMENTO:
	Verificar se as duas strings tem letras coincidentes e guardar estas letras num array;
		Caso não tenham, então retorna -1. "abcd" e "efgh" = -1

####Para os casos de sequência já espelhada nas strings: "jdfh" e "fds" = dfhfd ou fdsdf
	Verificar na stringA se as letras do array são consecutivas.
		Caso sim, então reverter a sequência e procurar-la na stringB.
		Caso ache na stringB, verificar se tem mais uma letra como "sufixo" ou "prefixo" nas strings para ser usado como infixo formando o maior palindorme.
	Retorna palindrome.

####Para os casos de sequência não espelhada: "bac" e "bac"	= aba




SAIDA:
    mostrar o maior palindrome ou, caso não exista, mostrar -1.

*/
// const strA = "123";
// const strB = "456";
const strA = "123df456";
const strB = "78fd90";
let bothHave = [];

class Character {
    constructor(value, indexA, stringA, indexB, stringB) {
        this.value = value;
        this.indexA = indexA;
        this.stringA = stringA; 
        this.indexB = indexB;
        this.stringB = stringB; 
    }
}

console.log(myPalindrome(strA, strB));

function myPalindrome(strA, strB) {

    //##### Both strings have same character then push it to bothHave array.
    let countA = 0;
    for (const letterA of strA) {
        let countB = 0;
        for (const letterB of strB) {
            console.log(countA, letterA, countB, letterB)
            if (letterA === letterB) {
                character = new Character(letterA, countA, strA, countB, strB);
                bothHave.push(character)
            }
            countB++
        }
        countA++;
    }
    if (bothHave.length === 0) return -1;


    //##### A substring of strA is mirrored in strB.
    let subStringA = ""

    for (let i = 0; i <= bothHave.length - 1; i++) {
        let test = i===0? i : i - 1; //achar um nome pra esta variável
        //Testa se o indiceA do próximo no array é igual ao atual mais um.
            if(bothHave[i].indexA === bothHave[test].indexA +1 || i === 0){
                subStringA = subStringA + bothHave[i].value;
            }
    }
    let tempArray = [...subStringA];
    let reversedSubStringA = tempArray.reverse().join("");
    console.log(reversedSubStringA, strB.indexOf(reversedSubStringA), strB)

    return bothHave
}
