class PQ {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}
//
//
class WG {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }
    dijkstra(start, finish) {
        const nodes = new PQ()
        const distances = {}
        const previous = {}
        const path = []
        let smallest
        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest === finish) {
                while (smallest) {
                    path.unshift(smallest)
                    smallest = previous[smallest]
                }
                return path
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight
                    if (candidate < distances[nextNode.node]) {
                        // updating new smallest distance in distances Obj
                        distances[nextNode.node] = candidate
                        // updating - How we got to neighbor
                        previous[nextNode.node] = smallest
                        // enqueue node with new priority
                        nodes.enqueue(nextNode.node, candidate)
                    }
                }
            }
        }
    }

}

let g = new WG()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(
    g.dijkstra('A', 'E')
)
