/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
headA refers to 1 > 3 > 7 > null 
headB refers to 1 > 2 > null 

The new list is 1 > 1 > 2 > 3 > 7 > null

Function Description

Complete the mergeLists function in the editor below.

mergeLists has the following parameters:

SinglyLinkedListNode pointer headA: a reference to the head of a list
SinglyLinkedListNode pointer headB: a reference to the head of a list

Returns

SinglyLinkedListNode pointer: a reference to the head of the merged list

Input Format

The first line contains an integer t, the number of test cases.

The format for each test case is as follows:

The first line contains an integer n, the length of the first linked list.
The next  lines contain an integer each, the elements of the linked list.
The next line contains an integer m, the length of the second linked list.
The next m lines contain an integer each, the elements of the second linked list.

Constraints

1 <= t <= 10
1 <= n,m <= 1000
1 <= list[i] <= 1000, where list[i] is the i^th element of the list.
Sample Input

1
3
1
2
3
2
3
4

Sample Output

1 2 3 3 4 

Explanation

The first linked list is: 1 > 3 > 2 > null

The second linked list is: 3 > 4 > null

Hence, the merged linked list is: 1 > 2 > 3 > 3 > 4 > null
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

const listA = new SinglyLinkedList()
list1.push(1);
// list1.push(2);
list1.push(3);
// list1.push(4);
list1.push(7);
const listB = new SinglyLinkedList()
// list2.push(1);
// list2.push(2);
list2.push(3);
list2.push(4);