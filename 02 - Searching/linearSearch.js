function linearSearch(list, search) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === search.toLowerCase()) {
            return i
        }
    }
    return -1
}

const arr = ['hello', 'student', 'chain', 'belt', 'gold']

console.log(linearSearch(arr, 'StuDenT'))
