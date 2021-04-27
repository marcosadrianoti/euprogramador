//const arr = [1, 3, 5, 7, 9];
const arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);

function miniMaxSum(arr) {
    let mini = 0;
    let max = 0;

    arr.forEach(
        (element, index) => {
            if (index != 0){
                max += element
            }
            if (index != arr.length - 1){
                mini += element
            }
        }
    );
    console.log(`${mini} ${max}`);
}
