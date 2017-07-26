// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    if (x === y) {
      return "The numbers are equal.";
    } else if (x < y) {
      return y + " is larger.";
    } else {
      return x + " is larger.";
    }
}
console.log(max(3,5));
console.log(max(8,1));
console.log(max(4,4));
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
      return x + " is largest.";
    } else if (y > x && y > z) {
      return y + " is largest.";
    } else if (z > x && z > y) {
      return z + " is largest.";
    } else {
      return "There is no largest number among the three."
    }
}

console.log(maxOfThree(5,3,1));
console.log(maxOfThree(5,13,1));
console.log(maxOfThree(5,3,21));
console.log(maxOfThree(5,3,5));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    return (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");
}

console.log(isVowel("e"));
console.log(isVowel("g"));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, y) {
  return x + y;
}
console.log(sum(21,42));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
