// Problem 2 (medium): Write a function called findDuplicates that takes an array of numbers and returns a new array containing only the numbers that appear more than once.

const findDuplicates = (numbers) => {
  const seen = [];
  const duplicates = [];
  numbers.forEach((number) => {
    if (!seen.includes(number)) {
      seen.push(number);
    } else if (!duplicates.includes(number)) {
      duplicates.push(number);
    }
  });

  return duplicates;
};

findDuplicates([1, 2, 3, 2, 4, 5, 1]); // [1, 2]
findDuplicates([1, 2, 3]); // []
findDuplicates([5, 5, 5, 3, 3]); // [5, 3]
