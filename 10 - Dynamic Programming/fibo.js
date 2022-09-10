// function fibo(n) {
//     if (n <= 2) return 1
//     return fibo(n - 1) + fibo(n - 2)
// }

function fibo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1
    let res = fibo(n - 1, memo) + fibo(n - 2, memo)
    memo[n] = res
    return res
}

console.log(fibo(100))
