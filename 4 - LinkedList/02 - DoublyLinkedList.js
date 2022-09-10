class Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    print() {
        if (!this.head) return undefined
        let current = this.head
        while (current) {
            if (this.head === current) {
                console.log(current.val + "<- Head")
            } else if (this.tail === current) {
                console.log(current.val + "<- Tail")
            } else {
                console.log(current.val)
            }
            current = current.next
        }
        return "Printed!"
    }
    push(val) {
        let newNode = new Node(val)
        if (this.head) {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let lastNode = this.tail
            this.tail = lastNode.prev
            this.tail.next = null
            lastNode.prev = null
        }
        this.length--
        return true
    }
    shift() {
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let firstNode = this.head
            this.head = firstNode.next
            this.head.prev = null
            firstNode.next = null
        }
        this.length--
        return true
    }
    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return true
    }
    get(index) {
        if (!this.head) return undefined
        if (index < 0 || this.length <= index) return false
        let current, counter
        if (index <= this.length / 2) {
            current = this.head, counter = 0
            while (counter < index) {
                current = current.next
                counter++
            }
        } else {
            current = this.tail, counter = this.length - 1
            while (counter > index) {
                current = current.prev
                counter--
            }
        }
        return current
    }
    set(val, index) {
        if (!this.head) return undefined
        if (index < 0 || this.length <= index) return false
        let foundNode = this.get(index)
        foundNode.val = val
        return true
    }
    insertAt(val, index) {
        if (!this.head) return undefined
        if (index < 0 || this.length < index) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        let foundNode = this.get(index - 1)
        let newNode = new Node(val)
        newNode.prev = foundNode
        newNode.next = foundNode.next
        foundNode.next.prev = newNode
        foundNode.next = newNode
        return true
    }
    remove(index) {
        if (!this.head) return undefined
        if (index < 0 || this.length <= index) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let foundNode = this.get(index - 1)
        let next = foundNode.next.next
        foundNode.next = next
        next.prev = foundNode
        return true
    }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
