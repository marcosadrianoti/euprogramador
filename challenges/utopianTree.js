// Complete the utopianTree function below.

function utopianTree(n) {
    let H = 1;
    for (let i = 1; i <= n; i++) {
            H = i % 2 !== 0 ? H * 2 : H + 1;
    }
    return H;
}

for (let index = 0; index <= 6; index++) {
    console.log(utopianTree(index));
}