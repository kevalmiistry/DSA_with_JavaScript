class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (val === current.val) return "ALREADY IN THERE!"
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else if (val > current.val) {
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
    includes(val) {
        if (!this.root) return false
        let current = this.root
        while (current) {
            if (current.val === val) return val
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            }
        }
        return undefined
    }
    BFS() {
        if (!this.root) return undefined
        let queue = [this.root]
        let visited = []
        while (queue.length !== 0) {
            if (queue[0].left) {
                queue.push(queue[0].left)
            }
            if (queue[0].right) {
                queue.push(queue[0].right)
            }
            visited.push(queue[0].val)
            queue.shift()
        }
        return visited
    }
    // PreOrder
    // DFS() {
    //     if (!this.root) return undefined
    //     let visited = []
    //     let current = this.root
    //     function helper(node) {
    //         visited.push(node.val)
    //         if (node.left) {
    //             helper(node.left)
    //         }
    //         if (node.right) {
    //             helper(node.right)
    //         }
    //     }
    //     helper(current)
    //     return visited
    // }

    // PostOrder
    // DFS() {
    //     if (!this.root) return undefined
    //     let data = []
    //     let current = this.root
    //     function helper(node) {
    //         if (node.left) {
    //             helper(node.left)
    //         }
    //         if (node.right) {
    //             helper(node.right)
    //         }
    //         data.push(node.val)
    //     }
    //     helper(current)
    //     return data
    // }

    // InOrder
    DFS() {
        if (!this.root) return undefined
        let data = []
        let current = this.root
        function helper(node) {
            if (node.left) {
                helper(node.left)
            }
            data.push(node.val)
            if (node.right) {
                helper(node.right)
            }
        }
        helper(current)
        return data
    }
}

let bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(8)
bst.insert(13)
bst.insert(15)
bst.insert(11)
bst.insert(4)
bst.insert(12)

//            10
//       5          13
//    4     8   11      15
//                  12


console.log(bst.DFS())