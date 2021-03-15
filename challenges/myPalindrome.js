/*
You have two strings, a and b. Find a string, s, such that:

> s can be expressed as s = sa + sb where sa is a non-empty substring of a and sb is a non-empty substring of b.
> s is a palindromic string.
> The length of s is as long as possible.

For each of the q pairs of strings (ai and bi) received as input, find and print string si on a new line. If you're able to form more than one valid string si, print whichever one comes first alphabetically. If there is no valid answer, print -1 instead.
*/


const strA = "bac";
const strB = "bac";
let ambosTem = [];

console.log(myPalindrome(strA, strB));

function myPalindrome(strA, strB) {
    let uniqueCharacters = true;
    for (const letterA of strA) {
        for (const letterB of strB) {
            console.log(letterA, letterB)
            if (letterA === letterB) {
                ambosTem.push(letterA)
                uniqueCharacters = false;
            }
        }
    }
    if (uniqueCharacters === true) return -1;
    return ambosTem
}