// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i", "x"];
// should return false
// -------------------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true

// step1:
// we have 2 parameters and function should return true or false

// step2:
// 2 inputs and are always arrays and an output will be a boolean

// step3:
// goal: tip ask for array length to identify the goal in our case our array has no size limit , so space complexity

// step5:
// I'll first of all loop through the first array, inside of the loop i loop thought 2nd array and do a === if it matches i'll kill it there and return a true, but this will take time 0(n*2)

// brute force solution
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      return arr1[i] === arr2[j];
    }
  }
}

console.log(containsCommonItem(array1, array2));

// Big O(n^2) - Time Complexity

// better solution

/*
array1 ==> obj {
  a: true,
  b: true,
  c: true,
  x: true
}
  
array2[index] === obj.properties
*/

/*
 step1:
 create a new function called containsCommonItem2 
 pass 2 parameters arr1 and arr2 and return a boolean.
 it will loop through the first array and create an object where properties === items in the array
 loop through the second array and check if item in the second array exists on the created object
*/

// Big O(n) - Time Complexity 0(a + b)

function containsCommonItem2(arr1, arr2) {
  // step 1
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
      /* 
        this will create an object like this
        {
          a: true,
          b: true,
          c: true,
          x: true
        }
      */
      console.log(map);
    }
  }

  // step 2
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      // if map[arr2[j]] is true
      return true;
    }
  }
}

console.log(containsCommonItem2(array1, array2));

// cheat sheet no 11
// Check how to break code

/*
 Explore the code and try to break it
 eg if we pass an empty array as a parameter or if we pass null or undefined 
 tell the interviewer how to handle these cases
 eg if pass containsCommonItem2([], []) it will return undefined because we are not returning anything ,
 how to handle this case is to return false if the array is empty

 code:
  if (arr1.length === 0 || arr2.length === 0) {
      return false;
    }
*/

// clean code

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
  /* 
    we iterate through the first array and check if any item in the first array exists in the second array
    if it does it will return true
    .some() is a javascript function that checks if any item in the array passes the condition
    .includes() is a javascript function that checks if an item exists in the array
  */
}

console.log("clean code =>", containsCommonItem3(array1, array2));

/*
remmeber to talk about modularity and reusability
*/
