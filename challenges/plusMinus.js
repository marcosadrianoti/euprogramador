plusMinus([-1, -1, 0, 1, 1]);
plusMinus([-4, 3, -9, 0, 4, 1]);


function plusMinus(arr){
    let negative = 0;
    let positive = 0;
    let zeros = 0;
    let denominator = arr.length;

    arr.forEach(function(element){
        if (element < 0) {
            ++negative;
        }else if (element > 0){
            ++positive;
        }else{
            ++zeros;
        }
    })
    console.log((positive/denominator).toFixed(6));
    console.log((negative/denominator).toFixed(6));
    console.log((zeros/denominator).toFixed(6));
}
