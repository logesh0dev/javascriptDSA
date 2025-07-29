let n = 3;

function fac(n) {
    if (n == 1) {
        return n
    }
    else {
        return n * fac(n - 1)
    }
}

function factorial(n) {
    let value = 1
    for (let i = 1; i <= n; i++) {
        value = value * i
    }
    return value
}
console.log("recursion factorial output : ", fac(n))
console.log("normal factoria output : ", factorial(n))

