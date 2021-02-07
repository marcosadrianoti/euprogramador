/*
5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são
do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um
homem ou uma mulher.

Início
    Entrada de matriz com altura e sexo de 5 pessoas
Processamento
    Percorrer a matriz
        contar quantos homens e quantas mulheres: 
            se a coluna 1 for igual a m
                então quantidade de homens é incrementado em 1
                senão quantidade de mulheres é incrementado em 1
        Também testar qual é a maior altura.
            Se a altura for maior que o anterior, então altura é gravada como o maior elemento e também o sexo será gravado.
Fim
    Mostrar na tela:
        Quantas pessoas são do sexo masculino
        Quantas pessoas são do sexo feminino
        Quem tem a maior altura e qual seu sexo

*/

const pessoas = [
                ['1,78', 'm'],
                ['1,50', 'f'],
                ['1,87', 'm'],
                ['1,92', 'm'],
                ['1,70', 'f'],
                ];

console.log(pessoas[2][0]);
