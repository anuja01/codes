// return the sum of numbers in input array.

const getSum = (input) => {
    let total = 0; // 0(1)
    input.forEach(element => { // if input.length = n
        total +=element; // O(1) * n
    });
    return total; // O(1)
}

const getSum_2 = (input) => {
    return input.reduce((sum, curNum) => sum + curNum, 0); // O(1)
}

console.log(getSum([1,2,3,4])); // => O(n)
console.log(getSum_2([1,2,3,4])) // => O(1)