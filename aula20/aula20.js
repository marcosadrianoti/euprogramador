/*
Aula 20 - Exercicios
Stack Calculator (Calculadora Usando Stack)
Uma máquina de pilha processas instruções ao adicionar e remover elemento de
uma pilha internta. Um exemplo simples disso é uma calculadora.
O argumento passado para run(instructions) vai sempre ser uma string contendo
uma série de instruções. As instruções aceitas pela calculadora serão as
seguintes:
1. + - Usa o pop para remover 2 valores da pilha ( stack ), soma os dois, e faz o
push do resultado de volta para a pilha.
2. - - Usa o pop para remover 2 valores da pilha ( stack ), subtrai o primeiro
menos o segundo, e faz o push do resultado de volta para a pilha.
3. * - Usa o pop para remover 2 valores da pilha ( stack ), multiplica os 2, e faz o
push do resultado de volta para a pilha.
4. / - Usa o pop para remover 2 valores da pilha ( stack ), divide o primeiro pelo
segundo, e faz o push do resultado de volta para a pilha.
5. DUP - Duplica (não é dobra) o valor do top da pilha.
6. POP - Usa o pop para remover o ultimo valor do stack e descarta-o mesmo.
7. PSH - Acontecen sempre que um número aparece na expresão, é feito o push
do número para o stack.

Código Base

class StackCalc {
    constructor() {
    }
    run(instructions) {
    }
    get value() {
    }
}

Exemplos
StackCalc() ➞ 0
StackCalc(5 6 +) ➞ 11
StackCalc(3 DUP +) ➞ 6
StackCalc(6 5 5 7 * - /) ➞ 5     ===> 7 * 5 - 5 / 6 = 5  
Notas
Se não existirem instruções o valor do stack deve permanecer em 0.
O valor retornado pela função get value() deve ser o valor do topo do stack.
*/

class StackCalc {
    constructor(instructions = "") {
        this._instructions = instructions;
        this._stackNumbers = [];
        this._arrayInstructions = [];
        this._result = 0;
        
    }
    run(instructions) {
        this._arrayTemp = instructions.split(" ");
        this._arrayTemp.forEach(element => {
            if (isNaN(element)){
                this._arrayInstructions.push(element);
            }else {
                this._stackNumbers.push(element);
            }
        });

        this._result = Number(this._stackNumbers.pop());
        for (let i = 0; i < this._arrayInstructions.length; i++) {
        //    console.log(this._arrayInstructions[i]);
            // if (this._arrayInstructions[i] === "DUP") {
                // this._b = this._result;
            // } else {
                
                this._b = Number(this._stackNumbers.pop());
            // }
            // console.log(this._stackNumbers)
            
            console.log('_result =', this._result)
            console.log('b =',this._b)
            
            switch (this._arrayInstructions[i]) {
                case "+":
                    this._result = this._result + this._b;
                    break;
                case "-":
                    this._result = this._result - this._b;
                    break;
                case "*":
                    this._result = this._result * this._b;
                    break;
                case "/":
                    this._result = this._result / this._b;
                    break;
                case "DUP": //(3 2 DUP + -) ➞ 1
                    this._stackNumbers.push(this._result);

                // default:
                //     break;
            }
            console.log('_result', this._result)
            // this._b = this._stackNumbers.pop();
            
            
        }
        
        this._stackNumbers.push(this._result);
        
        return this._result;

    }
    get value() {

    }
    pop(){

    }
    push(){

    }
}

let s = new StackCalc();
// let s = new StackCalc('6 5 5 7 * - /');
// let s = new StackCalc('6 5 5 7 * - /');
// let s = new StackCalc('6 5 5 7 * - /');
console.log(s);
console.log(s.run(s._instructions));
console.log(s);