/*
6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes
digitados, porém de maneira invertida (do último para o primeiro).

Inicio
    Usuário digita quantos nomes desejar e termina digitando "fim".
    São gravados num array.
Processamento/Fim
    Mostra todos os nomes digitados a partir do final do array.
*/

nomes = [];
const readlineSync = require('readline-sync');

let run = true;

while (run) {
    const input = readlineSync.question('Digite o nome: ');
    
    if (input === 'fim'){
        break;
    }

    nomes.push(input);
}

for (let index = nomes.length-1; index >= 0; index--) {
    console.log(nomes[index]);
}