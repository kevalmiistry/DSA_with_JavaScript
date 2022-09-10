function countUniqueVals(arr) {
    let count = 0, left = 0, right = arr.length - 1
    console.log(arr.length)
    while (left < right) {
        // console.log(`\nLEFT:${left}   RIGHT:${right}`)
        // console.log(`${arr[left]} ------ ${arr[left - 1]}`)

        if (arr[left] !== arr[left - 1]) count++

        // console.log(`COUNT=  ${count}`)
        // console.log(`\n ${arr[right]} ****** ${arr[right + 1]}`)

        if (arr[right] !== arr[right + 1]) count++

        // console.log(`COUNT=  ${count}`)
        left++
        right--
    }
    return count
}

// function countUniqueVals(arr) {
//     if (arr.length === 0) return 0
//     let i = 0
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             arr[++i] = arr[j]
//         }
//     }
//     return i + 1
// }

// console.log(countUniqueVals([-8, -7, -4, -4, -1, 0, 1, 2, 2, 2, 2, 3])) // should return 8
console.log(countUniqueVals([-8, -7, -4, -4, -1, 0, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 9, 9])) // should return 8

// console.log(countUniqueVals([-1, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6]))
// console.log(countUniqueVals([]))

// 0, 1, 1, 1, 2, 3, 4, 4, 4, 5
