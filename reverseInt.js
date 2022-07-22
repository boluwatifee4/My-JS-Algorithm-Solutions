// =============> Question <=============
// Write a function that reverses a number.
// Example:
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9
// reverseInt(0) === 0

// =============> Solution <=============

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

console.log(reverseInt(-15));