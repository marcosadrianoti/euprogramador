/*
Escreva uma função para gerar um array entre dois inteiros (valores positivos
e negativos são aceitos).
console.log(rangeBetween(4, 7)); // => [4, 5, 6, 7]
*/

const int1 = -7;
const int2 = -1;

rangeBetween(int1, int2);

function rangeBetween(int1, int2) {
    let minorInt = 0;
    let majorInt = 0;
    if (int1 < int2) {
        minorInt = int1;
        majorInt = int2;
    } else {
        minorInt = int2;
        majorInt = int1;
    }
    let myLength = majorInt - minorInt
    console.log(Array.from({length: myLength + 1}, (v, k) => k + minorInt));
}