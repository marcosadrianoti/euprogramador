const myMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 7]
];

console.log(diagonalDifference(myMatrix));

function diagonalDifference(arr){
    let leftRigth = 0;
    let rigthLeft = 0;
    let diff = 0;
    let absoltDiff = 0;
    let inverted = arr.length - 1;

    for (i = 0; i <= arr.length - 1; i++){
        leftRigth += arr[i][i];
        rigthLeft += arr[i][inverted];
        --inverted;
    };
    
    diff = leftRigth - rigthLeft;

    absoltDiff = diff >= 0 ? diff : diff * -1;

    return absoltDiff;
};
