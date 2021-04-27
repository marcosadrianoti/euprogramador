console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
// console.log(aVeryBigSum([1, 2, 3, 4, 5]));

function aVeryBigSum(bigIntList) {
    return total = bigIntList.reduce((total, bigInt) => total + bigInt, 0);;
    // bigIntList.forEach(bigInt => total += bigInt);
    // return total;
}