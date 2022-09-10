// function hash(str, len) {
//     let total = 0
//     for (let i = 0; i < str.length; i++) {
//         let val = str[i].charCodeAt(0) - 96
//         total = (total + val) % len
//     }
//     return total
//}

// Improved Hash Function
function hash(str, len) {
    let total = 0
    const PRIME_NUM = 31
    for (let i = 0; i < Math.min(str.length, 100); i++) {
        let char = str[i]
        let val = char.charCodeAt(0) - 96
        total = (total * PRIME_NUM + val) % len
    }
    return total
}

console.log(hash('hello', 13))
console.log(hash('goodbye', 13))
console.log(hash('hi', 13))
console.log(hash('cyan', 13))
console.log(hash('pink', 13))
