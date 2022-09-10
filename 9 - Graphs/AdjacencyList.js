class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(value) {
        if (!this.adjacencyList[value]) this.adjacencyList[value] = []
    }
    addEdge(vert1, vert2) {
        if (this.adjacencyList[vert1]) {
            this.adjacencyList[vert1].push(vert2)
        }
        if (this.adjacencyList[vert2]) {
            this.adjacencyList[vert2].push(vert1)
        }
    }
    removeEdge(vert1, vert2) {
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2)
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const otherVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, otherVertex)
        }
        delete this.adjacencyList[vertex]
    }
    recDFS(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function recur(vertex) {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return recur(neighbor)
                }
            })
        }
        recur(start)

        return result
    }
    iterDFS(start) {
        const stack = [start]
        const result = []
        const visited = {}
        let currentVert

        visited[start] = true
        while (stack.length) {
            currentVert = stack.pop()
            result.push(currentVert)

            this.adjacencyList[currentVert].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    iterBFS(start) {
        const queue = [start]
        const visited = {}
        const result = []
        let currentVert

        visited[start] = true
        while (queue.length) {
            currentVert = queue.shift()
            result.push(currentVert)

            this.adjacencyList[currentVert].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

