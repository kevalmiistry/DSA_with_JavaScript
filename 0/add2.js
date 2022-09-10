const addUptoN = (n) => {
    return n * (n + 1) / 2
}

// O(1)

let t1 = performance.now()
console.log(addUptoN(1000000000))
let t2 = performance.now()
console.log(`The operation done in: ${(t2 - t1) / 1000} seconds`)
