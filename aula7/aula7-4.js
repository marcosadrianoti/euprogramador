/*
Encontre o número de dias entre hoje e 1 de Janeiro de 2017

Entrada
    Recebe a data atual e a data final.
Processamento
    Converte as datas em milisegundos.
    Calcula a diferença entre os valores em milisegundos.
    Divide a diferença pelos milisegundos equivalentes a um dia.
        um dia = 24 * 60 * 60 * 1000 = 86400000 milisegundos
Saída
    Mostra a msg dos dias entre as datas.
*/

const day = 24 * 60 * 60 * 1000;
let today = new Date;
let endDate = new Date(2017,0,1);
let diff = today.getTime() - endDate.getTime();

console.log(`${parseInt(diff/day)} dias`);