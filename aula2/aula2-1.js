var meuArray = [2, 10];
let num1 = meuArray[0];
let num2 = meuArray[1];

console.log(meuArray);

meuArray = num1<num2 ? [num1, num2] : [num2, num1];

console.log(meuArray);