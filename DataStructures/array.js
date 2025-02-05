/* 
Arrays which are sometimes called list, organises items swquentially
i.e one after another in memories
array methods:
lookup 0(1)
push 0(1)
insert 0(n)
delete 0(n)

*/

const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage is used => 4*4 = 16*8 = 128 bits of memory is used => how did we get 4*4 = 16 bytes of storage? because each character is 4 bytes of storage
strings[2]; // O(1) => lookup

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift => add an element at the beginning of the array
strings.unshift("x"); // O(n) => because we have to shift all the elements to the right

// splice => add an element at the middle of the array
strings.splice(2, 0, "alien"); // O(n) => because we have to shift all the elements to the right

// --------------------------- TYPES OF ARRAYS ---------------------------
// 1. Static Array => fixed size
// 2. Dynamic Array => can grow in size

// Difference between static and dynamic array
// 1. Static Array
// - fixed in size
// - need to specify the size of the array
// - if we want to add an element to the array, we have to create a new array and copy the elements from the old array to the new array
// 2. Dynamic Array
// - can grow in size
// - we don't need to specify the size of the array
// - if we want to add an element to the array, we can just add it to the array

/* 
When we build data structures from scratch in this course, we will be using the Javascript's Class keyword to create these data structures. 
I have picked this way of doing things since it would be most familiar with most languages. 
If you would like to be a little bit more familiar with classes and how to create them, 
I have added an extra video from one of my other courses: The Complete Web Developer: Zero to Mastery which goes over this topic in the next lecture.

If you are already familiar with this topic you can skip over to the Implementing An Array video. 

Ps, throughout the course I use var, let, and const to declare variables. It is not important that you understand the differences between them for this course, but if you are curious, I recommend reading this: https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc
*/

//  --------------------------- Classes In javascript ---------------------------
// reference type
// context
// instantiation
