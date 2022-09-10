class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.length = 0
        this.tos = null
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.tos) {
            this.tos = newNode
        } else {
            newNode.next = this.tos
            this.tos = newNode
        }
        this.length++
        return this.length
    }
    pop() {
        if (!this.tos) {
            return "UNDERFLOW"
        } else {
            let temp = this.tos.next
            this.tos.next = null
            this.tos = temp
        }
        this.length--
        return this.length
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
