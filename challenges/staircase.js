/*
Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last step is not preceded by any spaces.

Write a program that prints a staircase of size n.

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 0 < n <= 100.

Output Format

Print a staircase of size n using # symbols and spaces.

Note: The last step must have 0 spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.
*/

staircase(2);
staircase(3);
staircase(4);
staircase(5);
staircase(6);

function staircase(param) {
    let space = ""
    let step = ""
    for (let i = 1; i <= param; i++) {
        for (let j = param - i; j >= 1; j--) {
            space = space + " ";
        }
        step = step + "#";
        console.log(space + step);
        space = ""
    }
}