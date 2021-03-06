const Graph = require('./graph')

const graph = new Graph('directed')
const regex = new RegExp(/((\d+)?(\D+))bags*\b/, 'g')
const lines = [
  "light red bags contain 1 bright white bag, 2 muted yellow bags.",
  "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
  "bright white bags contain 1 shiny gold bag.",
  "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
  "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
  "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
  "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
  "faded blue bags contain no other bags.",
  "dotted black bags contain no other bags."
]

lines.forEach((line) => {
  const groups = line.match(regex)

  if (groups) {
    const containerBag = groups.shift().split(" ").slice(0, 2).join(" ")

    graph.addVertex(containerBag)

    groups.forEach((contained) => {
      const spplited = contained.split(" ")
      const weight = parseInt(spplited[0]);
      const bag = spplited.splice(1,2).join(" ")

      graph.addVertex(bag)

      graph.addEdge(containerBag, bag, weight)
    })
  }
})

const findConnections = (node, nodes) => {
  let connected = new Set([]);

  nodes.forEach((connectedNodes, n) => {
    if (connectedNodes.has(node)) {
      connected.add(n)
      connected = new Set([...connected, ...findConnections(n, nodes)])
    }
  })

  return connected;
}

const sumOfBags = (bag, graph) => {
  // Formula: weight + weight * totalOfBags
  const nodesToSearch = graph.adjacencyList.get(bag)
  let total = 0

  nodesToSearch.forEach((weight, node) => {
    total += weight + weight * sumOfBags(node, graph)
  })

  return total
}

const connections = findConnections('shiny gold', graph.adjacencyList)
const totalBags = sumOfBags('shiny gold', graph)

console.log(`
Part 1: ${connections.size}
Part 2: ${totalBags}
`)