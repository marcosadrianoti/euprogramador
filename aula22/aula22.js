/*
Escreva um programa em JavaScript que crie uma Singly Linked List com n
nós onde cada nó tem como valor uma letra do alfabeto em maiusculo,
podendo aparecer letras repetidas ou não. A sua tarefa é remover todos os
nós que contem a letra A como valor. Todos os demais elementos devem
aparecer na ordem original.
Exemplo 1: Vários A's pela lista.
'A' -> 'A' -> 'B' -> 'C' -> 'A'
No final a lista ligada deve aparecer da seguinte maneira>
'B' -> 'C'
Exemplo 2: A lista é composta apenas por A's.
'A' -> 'A'
A lista deverá ficar vazia.
Lembrando sempre de manter a ordem original dos nós que não tem A como valor.
O seu programa deve receber uma lista ligada como argumento e retornar a
nova lista sem os nós que tem o A como valor.
Com a nova lista em mãos, você deve mostrar todos os elementos da lista.
Exemplo:
const newList = new SinglyLinkedList()
newList.push('A')
newList.push('A')
newList.push('B')
newList.push('C')
newList.push('A')
newList.push('D')
function removeAFromLinkedList(list) {
// A sua implementação deve ir aqui
}
const filteredList = removeAFromLinkedList(newList)
filteredList.print()
// A nova lista deve conter apenas os nós B, C, D.
// => B, C, D
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
    }
}

const newList = new SinglyLinkedList()
newList.push('A')
newList.push('A')
newList.push('B')
newList.push('C')
newList.push('A')
newList.push('D')

const filteredList = removeAFromLinkedList(newList)
filteredList.print()

function removeAFromLinkedList(list) {
    let teste = "";
    const filteredList = new SinglyLinkedList()
    if (list.length != 0) {
        let node = list.head;
        for (i = 0; i <= list.length - 1; i++) {
            if (node.value != "A") {
                filteredList.push(node.value);
            }
            node = node.next
        }
    }
    return filteredList;
}