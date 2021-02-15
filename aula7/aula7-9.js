/*
Crie uma função que retorne o nome do mês de uma data. Ex: "10/01/2020"
retornaria "Janeiro".
*/

const brDate = "10/01/2020";

console.log(monthName(brDate));

function monthName(date) {
    const [day, month, year] = date.split("/");
    const usDate = new Date(year, month-1, day);

    return usDate.toLocaleString('pt-BR', {month: 'long'});
}