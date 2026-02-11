// Problem 1 (easier): Write a function called reverseString that takes a string and returns it reversed. But here's the catch — don't use .reverse(). There are multiple ways to solve this, see what you come up with.

const reverseString = (string) => {
  const reverseStringArray = [];
  for (let i = 0; i < string.length; i++) {
    reverseStringArray.unshift(string[i]);
  }
  return reverseStringArray.join("");
};

reverseString("hello"); // "olleh"
reverseString("JavaScript"); // "tpircSavaJ"
