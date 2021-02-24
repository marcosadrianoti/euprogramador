/*
Escreva uma função em JavaScript que reverta um número.
Exemplo: 1245
Saida Esperada: 5421

ENTRADA
	Recebe um número.	
PROCESSAMENTO
	transforma o número recebido em string
	convete a string em array
	inverte o array
	converte o array em string
	tranforma a string em número
SAIDA
	Mostra no console o número invertido.
*/

const myNumber = 1245;

const myInvertedNumber = (myNumber) => String(myNumber).split("").reverse().join("");

console.log(Number(myInvertedNumber(myNumber)));