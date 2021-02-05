// 2 – Faça um programa que peça números e imprima o quadrado de cada número.

const readlineSync = require('readline-sync');

const numeros = [];
let run = true;
let indice = 0;

// Pega os números do usuário até ele digitar 'fim'.
while (run) {
    const input = readlineSync.question('Digite o número: ');
    if (input === 'fim'){
        break;
    }
    numeros.push(parseInt(input));
}

// Mostra o quadrado dos números do usuário.
while (indice <= numeros.length - 1) {
    console.log(`O quadrado do ${numeros[indice]} é ${numeros[indice]**2}`);
    indice++;
}