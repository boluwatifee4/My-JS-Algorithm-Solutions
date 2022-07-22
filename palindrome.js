// ==========> Question <==========
// Given a string, return true if the string is a palindrome.
// A palindrome is a string that is the same forwards and backwards.
// For example, 'racecar' is a palindrome.

// ==========> Solution <==========
const palindromes = (str) => {
    let notReversed = str;
    let reversed = str.split("").reverse().join("");
    const ispalindrome = reversed === notReversed ? true : false;
    console.log(ispalindrome)
}

palindromes("saas")
