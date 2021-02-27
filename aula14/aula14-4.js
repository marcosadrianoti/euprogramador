/*
4. Escreva uma função em JavaScript que aceita uma string como parametro e
encontra a maior palavra contida na string.
Exemplo: "Web Development Tutorial"
Saida Esperada: "Development"

function biggestWord(string) {
  const words = string.split(' ');
  let biggestWord = '';

  for(let word of words) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }

  return biggestWord;
}

console.log(biggestWord('Web Development'));
console.log(biggestWord('Web Browser'));
console.log(biggestWord('Marcle'));
*/

const myString = "Web Development Tutorial";

console.log(biggestWord(myString));

function biggestWord(myString) {
  
  let biggestWord = "";
  let words = [];
  let initSub = 0;

  //Substitute for ".split"
  for (let i = 0; i <= myString.length; i++) {
    if (myString[i]  == " " || i == myString.length){
      words.push(myString.substring(initSub == 0 ? 0 : initSub, i));
      initSub = i + 1;
    }
  }

  for(let word of words) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  
  return biggestWord;
}