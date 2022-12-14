class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while (this.values[parentIndex] < this.values[index] && index > 0) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
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
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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


let mh = new MaxBinaryHeap()
mh.insert(100)
mh.insert(67)
mh.insert(33)
mh.insert(45)
mh.insert(32)
mh.insert(50)
mh.insert(221)
mh.insert(92)
console.log(mh.values)
