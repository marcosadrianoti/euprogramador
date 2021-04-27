
console.log(compareTriplets("17 28 30", "99 16 8"))
// console.log(compareTriplets("1 2 3", "1 2 3"))

function compareTriplets(a, b) {
    const alice = a.split(" ");
    const bob = b.split(" ");
    let pointAlice = 0;
    let pointBob = 0;
    let final = [0, 0];

    for (let i = 0; i <alice.length; i++) {
        if(Number(alice[i]) > Number(bob[i])){
            pointAlice = ++pointAlice;
            final[0] = pointAlice;
        }else if(Number(alice[i])<Number(bob[i])){
            pointBob = ++pointBob;
            final[1] = pointBob;
        }
    }
    return final;

    // let pointAlice = 0;
    // let pointBob = 0;
    // let final = [0, 0];

    // for (let i = 0; i < a.length; i++) {
    //     if(a[i] > b[i]){
    //         pointAlice = ++pointAlice;
    //         final[0] = pointAlice;
    //     }else if(a[i] < b[i]){
    //         pointBob = ++pointBob;
    //         final[1] = pointBob;
    //     }
    // }
    // return final;
}