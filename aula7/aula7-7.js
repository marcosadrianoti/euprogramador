/*
Crie um array com datas de quando você foi à academia ou fez atividade
fisica. Crie uma função para verficar se dado um array de datas, você fez
atividade física no primeiro dia do ano de 2021.
*/

const myDate = '2021/1/1';
let answer = 'NÃO';
const datesExercises = ['2020/2/10',
                        '2021/2/4',
                        '2021/1/1',
                        '2021/2/7',
                        '2021/2/5'
];

madePhysicalActivity(datesExercises);

console.log(`Fez atividade física em 01/01/2021? ${answer}`);
console.log();


console.log(`Fez atividade física em 01/01/2021? ${madeActivity(datesExercises, myDate)}`);

//Feito mais elegante!!
function madeActivity(datesExercises, myDate) {
    return datesExercises.indexOf(myDate) != -1 ? 'SIM' : 'NÃO';
}

//Feito na mão
function madePhysicalActivity(datesExercises) {
    
    datesExercises.forEach(
        (dateExercises) =>{
            if (new Date(dateExercises).toDateString() == new Date(myDate).toDateString()) {
                answer = 'SIM';
            }
        }
    )
}