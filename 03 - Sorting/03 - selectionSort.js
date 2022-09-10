function selectionSort(arr) {
    let min = 0, len = arr.length

    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        // swap
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
}

let array = [5, 9, 1, 2, 4, 8]
//              i  m        
//                 j             
selectionSort(array)
console.log(array)