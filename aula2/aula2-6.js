// 06. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare
// tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('MATRIZ ==> Digite quantas LINHAS e quantas COLUNAS separados por virgula:  ', (answer) => {
    const numbers = answer.split(',')
    // const [lines, columns] = numbers;
    
    rl.close()
    
    console.log(montaMatriz(numbers));
    // console.log(montaMatriz(lines, columns));
});

function montaMatriz(linhasEcolunas) {
    const [linhas, colunas] = linhasEcolunas;
    // var linhas = linhasEcolunas[0];
    // var colunas = linhasEcolunas[1];
    // var elementos = linhas*colunas;
    let i = 0;
    let linha = 0;
    let coluna = 0;
    // var elemento = 1;
    let number = 1;

    let matriz = new Array(linhas);

    while (i<linhas) {
        matriz[i] = new Array(colunas);
        i++;
    }

    // while (elemento < elementos) { Evitar fazer muitos laços, no max 2!!!
        
        while (linha < linhas) {
            
            while (coluna < colunas) {
                // matriz[linha][coluna]=elemento
                matriz[linha][coluna]=number
                coluna++;
                // elemento++;
                number++;
            }
            coluna=0;
            linha++;
        }
    // }
    return matriz
}