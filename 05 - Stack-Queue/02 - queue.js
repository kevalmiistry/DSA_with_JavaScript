class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.length = 0
        this.front = null
        this.rear = null
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (!this.front && !this.rear) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.length++
        return this.length
    }
    dequeue() {
        if (!this.rear && !this.front) {
            return "UNDERFLOW"
        } else if (this.front === this.rear) {
            this.front = null
            this.rear = null
        } else {
            let temp = this.front.next
            this.front.next = null
            this.front = temp
        }
        this.length--
        return this.length
    }
}

let quuu = new Queue()
// que.dequeue(1)
// que.dequeue(2)
// que.dequeue(3)
