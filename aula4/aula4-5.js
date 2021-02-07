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
            Se a altura for maior que o anterior, então altura é gravada como o maior pessoao e também o sexo será gravado.
Fim
    Mostrar na tela:
        Quantas pessoas são do sexo masculino
        Quantas pessoas são do sexo feminino
        Quem tem a maior altura e qual seu sexo

*/
const pessoas = [
                ['1.78', 'm'],
                ['1.55', 'f'],
                ['1.87', 'm'],
                ['1.92', 'm'],
                ['1.70', 'f'],
                ];
let maiorAltura = [0.0,''];
let qtMasculinos = 0;
let qtFemininos = 0;

pessoas.forEach(
    (pessoa) => {
                    pessoa[1] == 'm' ? qtMasculinos++ : qtFemininos++;
                    if (parseFloat(pessoa[0]) > maiorAltura[0]) {
                        maiorAltura[0] = parseFloat(pessoa[0]);
                        maiorAltura[1] = pessoa[1]
                    } 
                }
)

console.log(`Femininos = ${qtFemininos}`);
console.log(`Masculinos = ${qtMasculinos}`);

console.log(`A maior altura é do sexo ${maiorAltura[1]=='f' ? 'Feminino' : 'Masculino'}: ${maiorAltura[0]}`)