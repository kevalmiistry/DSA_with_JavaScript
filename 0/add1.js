const addUptoN = (n) => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

// O(n)

let t1 = performance.now()
console.log(addUptoN(1000000000))
let t2 = performance.now()
console.log(`The operation done in: ${(t2 - t1) / 1000} seconds`)
