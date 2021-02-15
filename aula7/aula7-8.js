/*
Crie uma função que retorne o número de dias dado o número (não o indice)
do mês.
*/

const readlineSync = require('readline-sync');

const month = readlineSync.question('Digite o mês no formato numérico: ');

console.log(daysOfMonth(Number(month)));

function daysOfMonth(month) {
    
    const date = new Date(2021,month,0);
    
    return date.getDate();
}


