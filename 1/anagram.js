function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    if (str1.length === 0) return true

    let strCounts1 = {}, strCounts2 = {}
    for (let i = 0; i < str1.length; i++) {
        strCounts1[str1[i]] = (strCounts1[str1[i]] || 0) + 1
        strCounts2[str2[i]] = (strCounts2[str2[i]] || 0) + 1
    }
    for (let ele in strCounts1) {
        if (strCounts1[ele] !== strCounts2[ele]) return false
    }
    return true
}

console.log(isAnagram(' ', ' '))
