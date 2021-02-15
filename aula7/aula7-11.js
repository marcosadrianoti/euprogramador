/*
Crie uma função que retorne o ultimo dia de um mês.
*/

const month = 2;

console.log(lastDay(month));

function lastDay(month) {
    let data = new Date(2021, month, 0);
    return data.getDate();
}