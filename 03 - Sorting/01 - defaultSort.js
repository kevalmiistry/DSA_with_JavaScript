function numberCompare(num1, num2) {
    return num1 - num2
}

let arr = [42, 12, 1, 22, 5, 4, 65, 92, 45]

let sorted = arr.sort(numberCompare)
console.log(sorted)