function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start]
    let pivotIndex = start
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            let temp = arr[i]
            for (let j = i; j > pivotIndex + 1; j--) {
                arr[j] = arr[j - 1]
            }
            pivotIndex++
            arr[pivotIndex] = temp
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
    return pivotIndex
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let mid = pivot(arr, start, end)
        quickSort(arr, start, mid - 1)
        quickSort(arr, mid + 1, end)
    }
    return arr
}

let a = [8, 9, 63, 100, -45, 86, 10, 15, 24, 35, 33, -4, 5, 20, 4, 6, 2, 3, 1]

console.log(quickSort(a))

// console.log('Befor:', a)
// console.log('Index:', pivot(a))
// console.log('After:', a)
