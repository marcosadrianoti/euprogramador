// 1 – Calcule a média de diversas notas digitadas pelo usuário. O número de notas
// pode variar. O usuário vai usar o comando "fim" para dizer quando as notas
// acabaram e o calculo da média pode ser feita.

const readlineSync = require('readline-sync');

let run = true;
const notas = [];
let indice = 0;
let soma = 0;

while (run) {
    const input = readlineSync.question('Digite a NOTA: ');
    if (input === 'fim'){
        run = false;
        break;
    }

    notas.push(input);
    console.log(notas, notas.length);
}
while (indice <= notas.length) {
    soma = notas[indice] + soma;
}
console.log(soma);