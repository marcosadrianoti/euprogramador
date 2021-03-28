class Graph {
    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjacencyList = new Map();

    }

    addVertex(value) {
        if (!this.adjacencyList.has(value)) {
            this.adjacencyList.set(value, new Set([]))
        }
    }

    removeVertex(value) {
        this.adjacencyList.delete(value)

        this.adjacencyList.forEach((list, node) => {
            if (list.has(value)) {
                list.delete(value)
            }
        })
    }

    addEdge(origin, destination) {
        this.adjacencyList.get(origin).add(destination);
        this.adjacencyList.get(destination).add(origin);
    }

    removeEdge(origin, destination) {
        this.adjacencyList.get(origin).delete(destination)
        this.adjacencyList.get(destination).delete(origin)

    }
    
    print() {
        const vertices = this.adjacencyList.keys();
        for (let i of vertices) {
            const values = this.adjacencyList.get(i);
            let string = "";
            for (let j of values) {
                string += `${j} `
            }
            console.log(`${i} -> ${string}`)
        }
    }
}

const graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");

graph.addEdge("a", "a")
graph.addEdge("a", "b")
graph.addEdge("b", "c")
graph.addEdge("c", "d")
graph.addEdge("d", "b")
graph.addEdge("d", "c")

graph.print();

graph.removeEdge("c", "d")
// graph.removeVertex("a")
console.log("_____________")

graph.print()