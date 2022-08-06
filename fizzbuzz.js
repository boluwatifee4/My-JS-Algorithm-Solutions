//  =========> Question <=========
// Write a program that console logs the numbers from 1 to n. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.

// ==========> psuedo code <==========
// 1. create a for loop that loops through the numbers from 1 to n
// 2. if the number is a multiple of 3 and 5, console log "FizzBuzz"
// 3. if the number is a multiple of 3, console log "Fizz"
// 4. if the number is a multiple of 5, console log "Buzz"
// 5. if the number is not a multiple of 3 or 5, console log the number


// ==========> Solution <==========
const fizzBuzz = (n) => {
    const arr = []
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            // console.log(i);
            arr.push(i)
        }
        const fizz = () => {
            arr.map((num, index) => {
                if (num % 3 === 0 && num % 5 === 0) {
                    arr[index] = "FizzBuzz"
                } else if (num % 3 === 0) {
                    arr[index] = "Fizz"
                } else if (num % 5 === 0) {
                    arr[index] = "Buzz"
                } else {
                    // console.log("invalid multiples")
                }
            }
            )
        }
        fizz()
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.time('Function #1');
fizzBuzz(5);
console.timeEnd('Function #1')
