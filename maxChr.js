// ==========> Question <==========
// Given a string return  the character that is most commonly used in the string.
// Example:
// maxChar('abcccccccd') === 'c'
// maxChar('apple 1231111') === '1'
// ==========> Solution <==========
// psuedo code:
// 1. create a charMap object
// 2. loop through the string
// 3. if the char is in the charMap object, increment the value
// 4. if the char is not in the charMap object, set the value to 1
// 5. loop through the charMap object
// 6. if the value is greater than the max, set the max to the value
// 7. return the maxChar

const maxChar = (str) => {
    let charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        //console.log(charMap[char])
        if (charMap[char] > max) {
            max = charMap[char];
             //console.log(max)
            maxChar = char;
             //console.log(maxChar)
        }
    }
    return maxChar;
}


console.log(maxChar("abcccccccd"))