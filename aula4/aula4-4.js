/*
4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior
de idade (18 anos) e quantas são menores.

Inicio
    Usuário digita quantas idades desejar e termina digitando "fim".
Processamento
    Para cada idade digitada pelo usuário testamos o seguinte:
        Se idade menor que 18 anos
            então incrementa em 1 o número dos menores
            senão incrementa em 1 o número dos maiores
Fim
    Exibir a quantidade dos menores
    Exibir a quantidade dos maiores
*/

const readlineSync = require('readline-sync');

let run = true;
let menoresDeIdade = 0;
let maioresDeIdade = 0;

while (run) {
    const input = readlineSync.question('Digite a idade: ');
    
    if (input === 'fim'){
        break;
    }

    parseInt(input) < 18 ? menoresDeIdade++ : maioresDeIdade++;
}

console.log(`Menores de idade = ${menoresDeIdade}`);
console.log(`Maiores de idade = ${maioresDeIdade}`);