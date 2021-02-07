/*
8. O cardápio de uma casa de lanches é dado pela tabela abaixo:
Escreva um algoritmo que leia o código do item adquirido pelo consumidor e a
quantidade, calculando e mostrando o valor a pagar. Não será necessário exibir o
produto e o valor, somente o valor final. O usuário pode fazer um pedido com
qualquer número de itens. O usuário digita "Fim" para encerrar a entrada de itens.
Ex: 2 cocas e 1 bauru com ovo.
Item: 105
Quantidade: 2
Item: 102
Quantidade: 1
Item: "Fim"
Valor total: R$ 4,60.

CARDÁPIO:
102 | 0,60
103 | 3,75
104 | 3,15
105 | 2,00

Início
    Entrada dos dados pelo usuário digitando o código do item e a quantidade.
    Encerra digitando 'fim'.
Processamento
    Para cada item e quantidade digitados pelo usuário
        Pega o código e procura na matriz do cardápio o item consumido
            Se achar o item
                pega o valor do item
                calcula o total com a quantidade consumida (valor*quantidade)
                vai somando o total
Fim
    Exibir a soma total do valor dos itens consumidos
*/

const cardapio = [
                    [102, 0.60],
                    [103, 3.75],
                    [104, 3.15],
                    [105, 2.00]
];
let somaTotal = 0;
let codItemConsumido = 0;
let qtConsumida = 0;

const readlineSync = require('readline-sync');

while (true) {
    const input = readlineSync.question('Digite o CÓDIGO do item: ');
        codItemConsumido = parseInt(input);
        if (input === 'fim'){
            break;
        }
    const inputt = readlineSync.question('Digite a QUANTIDADE consumida: ');
        qtConsumida = parseFloat(inputt);

    somaTotal = calculaValorConsumido(codItemConsumido, qtConsumida) + somaTotal;
}

function calculaValorConsumido(codItemConsumido, qtConsumida) {
    cardapio.forEach(
        (item) => {
                    if (item[0] == codItemConsumido) {
                        valorCalculado = item[1] * qtConsumida;
                    }
        }
    )
    // valorCalculado = cardapio.find() * qtConsumida; Como isto funcionaria??
    return valorCalculado;
}

console.log(`Valor total: ${somaTotal.toFixed(2)}`)
