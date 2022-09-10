function selectionSort(arr) {
    let i, j, len = arr.length
    for (i = 1; i < len; i++) {
        let curVal = arr[i]
        j = i - 1
        while (arr[j] > curVal && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = curVal
    }
}

let ary = [12, 3, 4, 6, 0, 45, 20, 47, 65, 5, 54]
selectionSort(ary)
console.log(ary)
