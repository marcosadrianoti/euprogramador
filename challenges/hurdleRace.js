//The Hurdle Race

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))

function hurdleRace(k, height) {
    let max = height.reduce(function(a, b) {return Math.max(a, b)});
    let doses = max - k >= 0 ? max - k : 0;
    return doses;
}