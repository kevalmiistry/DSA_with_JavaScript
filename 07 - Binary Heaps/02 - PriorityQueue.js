class Node {
    constructor(val, pr) {
        this.val = val
        this.priority = pr
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    insert(val, pri) {
        let newNode = new Node(val, pri)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        let max = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }
    sinkDown() {
        let idx = 0
        let length = this.values.length
        let element = this.values[0]
        while (true) {
            let leftChildIdx = (2 * idx) + 1
            let rightChildIdx = (2 * idx) + 2
            let swap = null, leftChild, rightChild

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}


let mh = new PriorityQueue()
mh.insert("Naam", 100)
mh.insert("Ram", 180)
mh.insert("Maaa", 190)
mh.insert("Paisa", 80)
mh.insert("Swasthya", 85)

console.log(mh.values)
