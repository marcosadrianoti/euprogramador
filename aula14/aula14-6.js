/*
6. Escreva uma função em JavaScript que extraia os caracteres unicos de uma
string.
Exemplo: "marclerodrigues"
Saida Esperada: "marcleodigus"

function unique(string) {
  const set = new Set();

  for(let i = 0; i < string.length; i++) {
    const letter = string[i];

    set.add(letter);
  }

  return [...set].join('');
}

console.log(unique('marclerodrigues'));
console.log(unique('abcdef'));
*/

function unique(string) {
    let newString = ""; //1
    let duplicatedLetter = false; //1

    for(let i = 0; i < string.length; i++) { //n

      const letter = string[i]; //1

            //Substitute for "Set" and "Join"
            for(let id = 0; id < newString.length; id++) { //n

                duplicatedLetter = newString[id] === letter ? true : false; //2
                if (duplicatedLetter === true) {break}; //1
        
            }

        if (duplicatedLetter === false) {newString = newString + letter;} //2
  
    }
  
    return newString; //1
  }
  
  console.log(unique('abacbdagbcadc'));
  console.log(unique('Marcos Adriano Cruz'));

  // O(unique(string)) = 1+1+n*(1+n*(2+1)+2)+1
  // O(unique(string)) = 3+n*(1+n*(3)+2)
  // O(unique(string)) = 3+n*(3+3n)
  // O(unique(string)) = 3+3n+3n^2
  // O(unique(string)) = n^2
  // Complexidade ===> O(n^2)