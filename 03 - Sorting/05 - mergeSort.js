function merge(arr1, arr2) {
    let i, j, result = []
    i = j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else if (arr1[i] === arr2[j]) {
            result.push(arr1[i])
            i++
            result.push(arr2[j])
            j++

        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(
    mergeSort([65, 25, 9, 45, 4, 47, 64, 2, 0, 25, 53, 42, -6, -86, -66, 55, 33, 38, 3])
)