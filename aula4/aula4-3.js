// 3 – Peça ao usuário para digitar 5 números. Verifique qual é o maior número e
// exiba-o.

// Início
//     Usuário digita 5 números
// Processamento
//     Recebe array com os 5 números
//     Verifica cada elemento array:
//         Se o elemento for maior que o anterior, então o elemento é gravado como o maior elemento.
//     O maior elemento será gravado numa variável
// Fim
//     Mostra a variável com o maior elemento

const readlineSync = require('readline-sync');

const numeros = [];
let numeroMaior = 0;

// Pega os 5 números do usuário.
    for (let index = 1; index <= 5; index++) {
        const input = readlineSync.question(`Digite o ${index}º número: `);
        numeros.push(parseInt(input));
}

// Acha o número maior.
numeros.forEach( Element => {
    if (Element > numeroMaior) {
        numeroMaior = Element;
    } 
})

// Mostra o númeor maior.
console.log(numeroMaior);