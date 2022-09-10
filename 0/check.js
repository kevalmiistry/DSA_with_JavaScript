// write a function to count all alphabets(no case-sensitive) and digits

// function countChars(str) {
//     let result = {}
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase()
//         if (/[a-z0-9]/.test(ch)) {
//             if (result[ch] > 0) {
//                 result[ch]++
//             } else {
//                 result[ch] = 1
//             }
//         }
//     }
//     return result
// }

// function countChars(str) {
//     let result = {}
//     for (let ch of str) {
//         ch = ch.toLowerCase()
//         if (/[a-z0-9]/.test(ch)) {
//             if (result[ch] > 0) {
//                 result[ch]++
//             } else {
//                 result[ch] = 1
//             }
//         }
//     }
//     return result
// }

function countChars(str) {
    let result = {}
    for (let ch of str) {
        if (isAlphaNums(ch)) {
            ch = ch.toLowerCase()
            if (result[ch] > 0) {
                result[ch]++
            } else {
                result[ch] = 1
            }
        }
    }
    return result
}

const isAlphaNums = (ch) => {
    let code = ch.charCodeAt(0)
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false
    }
    else {
        return true
    }
}

console.table(countChars("Hello mitro hope karo ki meri job mast manan k jesi company me hoje"))
