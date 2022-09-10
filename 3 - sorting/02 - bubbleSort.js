// temp = arr[j]
// arr[j] = arr[j + 1]
// arr[j + 1] = temp

function bubbleSort(arr) {
    let temp, noSwap
    for (let i = 0; i < arr.length; i++) {
        noSwap = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) break
    }
}

let arary = [8, 1, 2, 3, 4, 5, 6]
// console.log(arary)
bubbleSort(arary)
console.log(arary)
