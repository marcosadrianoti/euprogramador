/*
Encontre o número de dias entre hoje e 1 de Janeiro de 2017

Entrada
Processamento
Saída

*/
const day = 24 * 60 * 60 * 1000;
let today = new Date;
let endDate = new Date(2017,0,1);
let diff = today.getTime() - endDate.getTime();


console.log(`${Math.round(diff/day)} dias`);
