/*
Crie uma função para verificar se uma data inserida pelo usuário é uma data
válida. Dado a entrada do usuário você deve dizer se ela é uma data válida ou
não.

Entrada
    Usuário digita uma data.
Processamento
    Coloca a data do usuário numa variável.
    Testar se a data é válida ou não.
        Testar o ano
            Não pode ser igual ou menor que 0
            Pode ter 2 ou 4 digitos
            Se o ano for válido ajustar ano bisexto.
        Testar mês e dia
            Pode ter 1 ou 2 dígitos
            Não pode ser menor que 1.
            Não pode ser maior que o número máximo de cada um
                Para os dias depende do mes
                Para os mes não pode ser maior que 12.
    Se a data é válida então
        Mostrar msg dizendo que a data é válida
    Caso contrário
        Mostrar msg dizendo que a data é válida
    Saída
        Mostrar msg ao usuário
*/

const readlineSync = require('readline-sync');

const data = readlineSync.question('Digite uma data(Use \'/\' como separador): ');

let [dia, mes, ano] = data.split('/');
let valid = true;
let daysOfMonths = [31, 28, 31, 31, 31, 30, 31, 30, 30, 31, 30, 31];

//Testa o ano
if ((ano.length == 4 || ano.length == 2) && ano > 0) {
    if (ano%4 == 0) {
        daysOfMonths[1] = 29; //Ajusta dias de fevereiro no ano bisexto
    }
}else{
    valid = false;
}

//Testa o mês
testingDayMonth(mes, 12);

//Testa o dia
testingDayMonth(dia, daysOfMonths[mes - 1]);

console.log(`Data ${valid == true ? 'Válida' : 'Inválida'}`);

function testingDayMonth(element, numberMax) {
    if ((1 > element.length || element.length > 2) || (element <= 0 || element > numberMax)) {
        valid = false;
    }
}