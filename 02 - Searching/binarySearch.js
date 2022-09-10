function binarySearch(list, searchItem) {
    let left = 0
    let right = list.length - 1
    let mid
    while (left <= right) {
        mid = (left + right) / 2
        mid = Math.floor(mid)
        if (list[mid] > searchItem) {
            right = mid - 1
        } else if (list[mid] < searchItem) {
            left = mid + 1
        } else if (list[mid] === searchItem) {
            return mid
        }
    }
    return -1
}

let ar = [1, 2, 3, 4, 7, 8, 9, 11, 12, 34, 35]

console.log(binarySearch(ar, 5))
