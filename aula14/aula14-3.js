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

// const myString = "cgedefba"; //abcdeefg
const myString = "marcos"; //acmors

console.log(alphabeticalOrder(myString));

function alphabeticalOrder(myString) {
//    const withoutSpaces = myString.replace(/ /g, '');  
    let myStringOrdered = "_";
    let letter = "";
    indexLetter = 0;

    // console.log(myString.length);
    for (let i = 0; i <= myString.length - 1; i++) {
        //    while(indexLetter != myString.length -1) {
            // achei = false;
            letter = myString[i];
            lastLetter = myStringOrdered[myStringOrdered.length-1];
            // console.log(letter);

            if (letter > lastLetter) {
                myStringOrdered = myStringOrdered + letter;

            }else{
                for (let index = myStringOrdered.length - 1; index >= 0; index--) {

                    if (letter >= myStringOrdered[index]){
                        myStringOrdered = myStringOrdered.substring(0, index+1) + letter + myStringOrdered.substring(index+1);
                        break;

                    }
                }
            }
            // console.log(lastLetter)
            console.log(myStringOrdered,lastLetter, letter, lastLetter<letter);
            
        // while (achei = false) {
            
        // }
/*
pega uma letra da string
compara com a ultima letra da string temporaria
se a letra for menor que a ultima letra
    compara com a ultima letra -1 até encontrar uma letra da string temp que seja
    menor ou igual que a letra da string
    Neste momento inserir a letra na string temp na frente(+1) da letra menor ou igual.
Repetir este ciclo até terminar todas as letras da string
*/

        // console.log(letter);
        // if (myStringOrdered === "") {
        //     myStringOrdered = letter;
        // } else {
            // for (let index = 0; index <= myStringOrdered.length-1; index++) {
                // console.log(myStringOrdered)
                // myStringOrdered = letter < myStringOrdered ? letter + myStringOrdered : myStringOrdered + letter;
                
            // }
            
        // }
        
        
    }
     return myStringOrdered;    
}