function sumArr(arr) {
    let t = 0
    for (let i = 0; i < arr.length; i++) {
        t = t + arr[i]
    }
    return t
}

let a = [5, 10, 15]
console.log(sumArr(a))