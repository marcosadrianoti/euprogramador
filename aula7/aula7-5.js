/*
Cria uma função que retorne o número de dias entre duas datas.

ENTRADA
    Recebe duas datas.
PROCESSAMENTO
    Converte a data(string) no tipo Date.
    Converte as datas em milisegundos.
    Calcula a diferença entre os valores em milisegundos.
    Divide a diferença pelos milisegundos equivalentes a um dia.
        1 dia = 24 * 60 * 60 * 1000 = 86400000 milisegundos
SAÍDA
    Retorna o número de dias entre as duas datas.
*/

console.log(daysBetweenDates('2021,1,1', '2021,1,20'));

function daysBetweenDates(initDate, endDate) {
    
    const milisecDay = 86400000;

    let date1 = new Date(initDate);
    let date2 = new Date(endDate);
    
    let days = (date1.getTime() - date2.getTime())/milisecDay;

    return days > 0 ? days : days * -1;   
}