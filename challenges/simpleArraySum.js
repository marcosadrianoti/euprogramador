simpleArraySum([1, 2, 3, 4, 10, 11]);

function simpleArraySum(ar) {
    console.log(ar.reduce((total, number) => total + number));
}
