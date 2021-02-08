/*
Faça um validador de jogo da velha.
Dado um array que contem o resultado de um jogo, dizer se o jogo é valido, invalido, e se for válido quem ganhou.

Entrada:
const input = [
    0  1  2
0  [0, 1, 0],
1  [0, 0, 1],
2  [0, 1, 0]
]
Saida:
Vencedor: 0

Início
    Recebe um array com o jogo terminado.
Processamento
    Para cada jogador procura no array uma das 8 sequências vencederas.
Fim
    Indica quem foi o vencedor.
*/

// Resultado do jogo
const jogo = [
                [0, 1, 0],
                [0, 0, 1],
                [0, 1, 0]
];

// Sequẽncias vencedoras
    // Linhas
    const sequencia1 = [[0,0], [0,1], [0,2]];
    const sequencia2 = [[1,0], [1,1], [1,2]];
    const sequencia3 = [[2,0], [2,1], [2,2]];
    // Colunas
    const sequencia4 = [[0,0], [1,0], [2,0]];
    const sequencia5 = [[0,1], [1,1], [2,1]];
    const sequencia6 = [[0,2], [1,2], [2,2]];
    // Cruzados
    const sequencia7 = [[0,0], [1,1], [2,2]];
    const sequencia8 = [[2,0], [1,1], [0,2]];


for (let jogador = 0; jogador <= 1; jogador++) {
    if (procuraVencedor(sequencia1, jogador) == true) {
        mostraVencedor(jogador);
        break;
        // console.log('teste');
    }else if (procuraVencedor(sequencia2, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia3, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia4, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia5, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia6, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia7, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }else if (procuraVencedor(sequencia8, jogador) == true) {
        mostraVencedor(jogador);
        break;
    }
}

function procuraVencedor(sequencia, jogador) {
    let jogadaChecada = 0
    sequencia.forEach(
        (coordenada) =>{
            if (jogo[coordenada[0]][coordenada[1]] == jogador) {
                jogadaChecada++
            }
        }
        )
        if (jogadaChecada == sequencia.length) {
            venceu = true;
        } else {
            venceu = false;
        }
        return venceu;
    }

function mostraVencedor(jogador) {
    console.log(`Vencedor = ${jogador}`)
}