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

-------------------------------------------
Sequẽncias vencedoras
    Linhas
        sequencia1 = [[0,0], [0,1], [0,2]];
        sequencia2 = [[1,0], [1,1], [1,2]];
        sequencia3 = [[2,0], [2,1], [2,2]];
    Colunas
        sequencia4 = [[0,0], [1,0], [2,0]];
        sequencia5 = [[0,1], [1,1], [2,1]];
        sequencia6 = [[0,2], [1,2], [2,2]];
    Cruzados
        sequencia7 = [[0,0], [1,1], [2,2]];
        sequencia8 = [[2,0], [1,1], [0,2]];
*/

// Resultado do jogo
const jogo = [
    [0, 1, 1],
    [0, 0, 1],
    [1, 0, 0]
];

const sequenciasVencedoras = [
    [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ] ],
    [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ] ],
    [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ],
    [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
    [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ] ],
    [ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ] ],
    [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
    [ [ 2, 0 ], [ 1, 1 ], [ 0, 2 ] ]
    ];

for (let jogador = 0; jogador <= 1; jogador++) {
    sequenciasVencedoras.forEach(
        (sequencia) =>{
            if (procuraVencedor(sequencia, jogador) == true) {
                mostraVencedor(jogador);
            }
        }
    )
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