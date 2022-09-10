class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        if (this.head === this.tail) {
            let ret = this.head
            this.head = this.tail = null
            this.length--
            return ret
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        this.tail = current
        let poppedVal = current.next
        this.tail.next = null
        this.length--
        return poppedVal
    }
    shift() {
        if (!this.head) return undefined
        let cuurentHead = this.head
        this.head = cuurentHead.next
        this.length--
        if (this.length === 0) this.tail = null
        return cuurentHead
    }
    unshift(val) {
        let newNode = new Node(val)
        if (this.head) {
            newNode.next = this.head
            this.head = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this.head
    }
    print() {
        let current = this.head
        while (current) {
            if (this.head === current) {
                console.log(current.val + " <- Head")
            } else if (this.tail === current) {
                console.log(current.val + " <- Tail")
            } else {
                console.log(current.val)
            }
            current = current.next
        }
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0, current = this.head
        while (counter < index) {
            current = current.next
            counter++
        }
        return current
    }
    set(val, index) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return foundNode
        }
        return false
    }
    insertAt(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }
    removeAt(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return !!this.shift()
        if (index === this.length - 1) return !!this.pop()
        let prev = this.get(index - 1)
        prev.next = prev.next.next
        this.length--
        return true
    }
    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null, next
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
