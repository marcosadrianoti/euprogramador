/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
headA refers to 1 > 3 > 7 > null 
headB refers to 1 > 2 > null 

The new list is 1 > 1 > 2 > 3 > 7 > null

Function Description

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

    print() {
        let elements = "";
        if (this.length != 0) {
            let node = this.head;
            for (i = 0; i <= this.length - 1; i++) {
                elements = elements + (i != this.length - 1 ? `${node.value}, ` : node.value);
                node = node.next
            }
            console.log(elements)
        } else {
            console.log("empty list");
        }

        return this;
    }
}

const listA = new SinglyLinkedList()
listA.push(1);
listA.push(21);
listA.push(3);
listA.push(10);
listA.push(7);

const listB = new SinglyLinkedList()
listB.push(5);
listB.push(20);
listB.push(7);
listB.push(3);
listB.push(4);

mergeLists(listA.head, listB.head).print();

function mergeLists(headA, headB) {
    let tempArray = [];
    const mergedList = new SinglyLinkedList();

    listToArray(listA.length - 1, tempArray, headA);
    listToArray(listB.length - 1, tempArray, headB);

    tempArray.sort((a, b) => a - b);
    tempArray.forEach(element => mergedList.push(element));

    return mergedList;

    function listToArray(lengthList, array, head) {
        for (i = 0; i <= lengthList; i++) {
            array.push(head.value);
            head = head.next;
        }
    }
}