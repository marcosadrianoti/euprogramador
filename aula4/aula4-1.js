// 1 – Calcule a média de diversas notas digitadas pelo usuário. O número de notas
// pode variar. O usuário vai usar o comando "fim" para dizer quando as notas
// acabaram e o calculo da média pode ser feita.

const readlineSync = require('readline-sync');

const notas = [];
let run = true;
let indice = 0;
let soma = 0;

while (run) {
    const input = readlineSync.question('Digite a NOTA: ');
    if (input === 'fim'){
        break;
    }
    notas.push(parseInt(input));
}

while (indice <= notas.length - 1) {
    soma = notas[indice] + soma;
    indice++;
}
console.log();
console.log(`MÉDIA = ${soma/notas.length}`);