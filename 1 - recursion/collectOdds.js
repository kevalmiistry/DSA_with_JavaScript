// function collectOdds(nums) {
//     let result = []
//     function helper(arr) {
//         if (arr.length === 0) return
//         if (arr[arr.length - 1] % 2 !== 0) {
//             result.push(arr[arr.length - 1])
//         }
//         arr.pop()
//         helper(arr)
//     }
//     helper(nums)
//     return result
// }

function collectOdds(nums) {
    let newArray = []

    if (nums.length === 0) {
        return newArray
    }

    if (nums[nums.length - 1] % 2 !== 0) {
        newArray.push(nums[nums.length - 1])
    }
    nums.pop()
    newArray = newArray.concat(collectOdds(nums))
    return newArray
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))
