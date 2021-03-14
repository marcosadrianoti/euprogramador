/*
You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return 1. Otherwise, return 0.

Example

list1 = 1 > 2 > 3 > null
list2 = 1 > 2 > 3 > 4 > null


The two lists have equal data attributes for the first 3 nodes. list2 is longer, though, so the lists are not equal. Return 0.

Function Description

compare_lists has the following parameters:

SinglyLinkedListNode llist1: a reference to the head of a list
SinglyLinkedListNode llist2: a reference to the head of a list
Returns

int: return 1 if the lists are equal, or 0 otherwise
Input Format

The first line contains an integer , the number of test cases.

Each of the test cases has the following format:
The first line contains an integer n, the number of nodes in the first linked list.
Each of the next n lines contains an integer, each a value for a data attribute.
The next line contains an integer m, the number of nodes in the second linked list.
Each of the next m lines contains an integer, each a value for a data attribute.

Constraints

1 <= t <= 10
1 <= n, m <= 1000
1 <= list1[i], list2[i] <= 1000 

Output Format

Compare the two linked lists and return 1 if the lists are equal. Otherwise, return 0. Do NOT print anything to stdout/console.

The output is handled by the code in the editor and it is as follows:

For each test case, in a new line, print 1 if the two lists are equal, else print 0.

Sample Input

2
2
1
2
1
1
2
1
2
2
1
2
Sample Output

0
1
Explanation

There are t = 2 test cases, each with a pair of linked lists.

In the first case, linked lists are: 1 -> 2 -> NULL and 1 -> NULL

In the second case, linked lists are: 1 -> 2 -> NULL and 1 -> 2 -> NULL
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        const isEmpty = !this.head;

        if (isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }
}

const list1 = new SinglyLinkedList()
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
const list2 = new SinglyLinkedList()
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(4);

console.log(compare_lists(list1.head, list2.head));

function compare_lists(nodeList1, nodeList2) {
    if (list1.length != list2.length){
        return 0;
    }else if (list1.length === 0 && list2.length === 0) {
        return 1;
    } else {
        for (i = 0; i <= list1.length - 1; i++) {
            if (nodeList1.value != nodeList2.value) {
                return 0;
            }
            nodeList1 = nodeList1.next;
            nodeList2 = nodeList2.next;
        }
    }

    return 1;
}