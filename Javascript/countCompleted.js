// Question 7: Coding Challenge - Array filter
// Write a function called countCompleted that takes an array of todos and returns how many are completed.
// Example:
const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk dog", completed: true },
  { id: 3, title: "Learn React", completed: true },
];

const countCompleted = (todos) => {
  let todoCount = 0;
  todos.filter((todo) => {
    if (todo.completed) {
      todoCount++;
    }
  });
  return todoCount;
};

// Array reduce

const totalCompleted = countCompleted(todos);

const countCompletedReducer = todos.reduce((count, todo) => {
  if (todo.completed) {
    return count + 1;
  }
  return count;
}, 0);
console.log(countCompletedReducer);
