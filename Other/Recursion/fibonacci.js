// Recursive implementation
const fibRec = (n) => {
    if (n <= 1) return 1;
    return fibRec(n-1) + fibRec(n-2)
}

console.log('fib 5 is: ', fibRec(5))
console.log('fib 6 is: ', fibRec(6))
console.log('fib 14 is: ', fibRec(14))

// TODO: Implementation without using recursion
