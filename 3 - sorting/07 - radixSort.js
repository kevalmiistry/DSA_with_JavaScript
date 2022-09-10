function getDigit(num, position) {
    let divider = (10 ** position) * 10
    let floatNumber = num / divider
    let digit = parseInt((floatNumber + "").split('.')[1][0])
    return digit
}

function digitCount(num) {
    return (num + "").length
}

function mostDigits(arr) {
    let temp, max = 0
    arr.forEach(e => {
        temp = digitCount(e)
        if (temp > max) max = temp
    })
    return max
}

function radixSort(arr) {
    let maxSize = mostDigits(arr)

    for (let k = 0; k < maxSize; k++) {
        let bucket = [[], [], [], [], [], [], [], [], [], []]
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)
            bucket[digit].push(arr[i])
        }
        arr = [].concat(...bucket)
    }
    return arr
}

let a = [15, 65, 1, 545, 64, 313, 54, 9358, 187]
console.log(radixSort(a))

// console.log(mostDigits([5, 12, 56, 98, 21, 91, 35289, 6513, 2212]))
// console.log(getDigit(12345, 4))