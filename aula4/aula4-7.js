/*
7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o
ano.

Início
    Recebe uma data digitada pelo usuário
Processamento
    Percorre a data para separar o dia, mes e ano usando o '/' como separador.
        Se o caracter for igual a '/'
            então guarda a primeira posição
            se quando '/' aparecer novamente e a primeira posição ja foi guardada
                então deve guardar a segunda posição
Fim
    Exibir dia, mês e ano separadamente.
*/

let indiceTexto = 0;
let posicao1 = 0;
let posicao2 = 0;

const readlineSync = require('readline-sync');

const data = readlineSync.question('Digite uma data (99/99/9999): ');

// Não mão!!!
while (indiceTexto <= data.length-1) {
    if (data[indiceTexto]=='/' && posicao1==0) {
        posicao1 = indiceTexto;
    }else if (data[indiceTexto]=='/' && posicao2==0) {
        posicao2 = indiceTexto;
        break;
    }
    indiceTexto++
}

console.log(`Dia = ${data.substring(0,posicao1)}`);
console.log(`Mês = ${data.substring(posicao1 + 1,posicao2)}`);
console.log(`Ano = ${data.substring(posicao2 +1)}`);

console.log('________________');

//Usando o split
let dateArray=data.split('/');

console.log(`Dia = ${dateArray[0]}`);
console.log(`Mês = ${dateArray[1]}`);
console.log(`Ano = ${dateArray[2]}`);