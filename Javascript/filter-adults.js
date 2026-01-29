// Question 7: Coding Challenge - JavaScript Array Method
// Write a function called filterAdults that takes an array of user objects and returns only users who are 18 or older.
// Example:
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 16 },
];

const filterAdults = () => {
  const overEighteenUsers = [];

  users.forEach((person) => {
    if (person.age >= 18) {
      overEighteenUsers.push(person);
    }
  });
  return console.log(overEighteenUsers);
};

filterAdults(users);

// Should return: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
