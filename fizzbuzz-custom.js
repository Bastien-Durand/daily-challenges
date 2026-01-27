// Today's Coding Challenge
// Challenge Type: Pure JavaScript (Option A)
// Problem: FizzBuzz with a Twist
// Write a function called fizzBuzzCustom that takes two parameters:

// n - a number (how many iterations)
// rules - an object with custom rules

// Your Task:

// Write the function (take 20-30 min)
// Test it with the examples above
// Save it to a file called fizzbuzz-custom.js

//Every multiple of 3 prints "Fizz"

//Every multiple of 5 prints "Buzz"

//Every multiple of both 3 and 5 prints "FizzBuzz"

// Your twist:
// Make it flexible so the user can define their own rules!
// Example usage:
// fizzBuzzCustom(15, { 3: "Fizz", 5: "Buzz" });
// // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// fizzBuzzCustom(10, { 2: "Even", 3: "Three" });
// // Output: 1, Even, Three, Even, 5, EvenThree, 7, Even, Three, Even

const fizzBuzzCustom = (n, a) => {
  const keys = Object.keys(a);
  const values = Object.values(a);

  for (let i = 1; i <= n; i++) {
    if (i % keys[0] === 0 && i % keys[1] === 0) {
      console.log(`${values[0]}${values[1]}`);
    } else if (i % keys[0] === 0) {
      console.log(values[0]);
    } else if (i % keys[1] === 0) {
      console.log(values[1]);
    } else {
      console.log(i);
    }
  }
};

fizzBuzzCustom(15, { 3: "Fizz", 5: "Buzz" });
fizzBuzzCustom(10, { 2: "Even", 3: "Three" });

// What You Learned Today:
// ✅ How to work with JavaScript objects (Object.keys(), Object.values())
// ✅ Template literals for string concatenation
// ✅ Conditional logic and order of operations
// ✅ Problem-solving without immediately looking at solutions (HUGE skill!)
// ✅ Loop syntax (for loops)
