/*
Crie uma função para verificar se uma data é fim de semana ou não.
*/

const brDate = "07/02/2021";

console.log(`É final de semana? ${isWeekend(brDate)}`);

function isWeekend(date) {
    const [day, month, year] = date.split("/"); //3
    const usDate = new Date(year, month-1, day); //1

    return usDate.getDay() == '0' || usDate.getDay() == '6' ? 'SIM' : 'NÃO'; //3
    
}


// O(isWeeKend(date)) = 3+1+3 = 7
// Complexidade ===> O(1)