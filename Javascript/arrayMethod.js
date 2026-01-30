// Question 7: Coding Challenge - Array Method Practice
// Write a function called getTodoTitles that takes an array of todo objects and returns an array of just the titles.
// Example:
const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk dog", completed: true },
  { id: 3, title: "Learn React", completed: false },
];

const getTodoTitles = (todos) => {
  return todos.map((todo) => todo.title);
};

getTodoTitles(todos);

// // Should return: ["Buy groceries", "Walk dog", "Learn React"]
// Bonus: Try using the .map() array method!
