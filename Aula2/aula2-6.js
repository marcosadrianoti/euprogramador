// 06. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare
// tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('MATRIZ ==> Digite quantas LINHAS e quantas COLUNAS separados por virgula:  ', (answer) => {
    const numbers = answer.split(',')
    
    rl.close()
    
    console.log(montaMatriz(numbers));
});

function montaMatriz(linhasEcolunas) {
    var linhas = linhasEcolunas[0];
    var colunas = linhasEcolunas[1];
    var elementos = linhas*colunas;
    var i= 0;
    var linha = 0;
    var coluna = 0;
    var elemento = 1;

    var matriz = new Array(linhas);

    while (i<linhas) {
        matriz[i] = new Array(colunas);
        i++;
    }

    while (elemento < elementos) {
        
        while (linha < linhas) {
            
            while (coluna < colunas) {
                matriz[linha][coluna]=elemento
                // console.log("linha[" + linha + "] coluna[" + coluna + "] = " + elemento);
                coluna++;
                elemento++;
            }
            coluna=0;
            linha++;
        }
    }
    return matriz
}