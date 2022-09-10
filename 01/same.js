// Initial version
// function same(arr1, arr2) {
//     let thisArr2 = arr2.map(e => e)
//     if (arr1.length !== thisArr2.length) return false
//     for (let el of arr1) {
//         let index = thisArr2.indexOf((el * el))
//         if (-1 === index) {
//             return false
//         }
//         thisArr2.splice(index, 1)
//     }
//     return true
// }

// refactored version
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    let frequencyCounter1 = {}, frequencyCounter2 = {}
    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1
        frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1
    }

    for (let el in frequencyCounter1) {
        if (!((el * el) in frequencyCounter2)) return false

        if (frequencyCounter1[el] !== frequencyCounter2[el * el]) return false
    }
    return true
}

let a1 = [2, 2, 5, 2, 3, 1]
let a2 = [4, 9, 4, 1, 4, 25]
console.log(same(a1, a2))
// console.log(a1)
// console.log(a2)

// let a = [1, 2, 3, 4]
// a.splice(0, 2)
// console.log(a)