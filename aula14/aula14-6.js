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
    let newString = "";
    let duplicatedLetter = false;

    for(let i = 0; i < string.length; i++) {

      const letter = string[i];

            //Substitute for "Set" and "Join"
            for(let id = 0; id < newString.length; id++) {

                duplicatedLetter = newString[id] === letter ? true : false;
                if (duplicatedLetter === true) {break};
        
            }

        if (duplicatedLetter === false) {newString = newString + letter;}
  
    }
  
    return newString;
  }
  
  console.log(unique('abacbdagbcadc'));
  console.log(unique('Marcos Adriano Cruz'));
