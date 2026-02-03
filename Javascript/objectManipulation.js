// Question 7: Coding Challenge - Object Manipulation
// Write a function called groupByCompleted that takes an array of todos
// Returns an object with two properties:
// completed (array of completed todos)
// incomplete (array of incomplete todos).

const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk dog", completed: true },
  { id: 3, title: "Learn React", completed: false },
];
let sorted = {};

const groupByCompleted = (todo) => {
  const completed = [];
  const incompleted = [];

  todo.forEach((todo) => {
    if (todo.completed) {
      completed.push(todo);
    } else {
      incompleted.push(todo);
    }
  });
  return { completed, incompleted };
};

console.log(groupByCompleted(todos));

/* Should return:
{
  completed: [{ id: 2, title: "Walk dog", completed: true }],
  incomplete: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 3, title: "Learn React", completed: false }
  ]
}
*/
// Bonus: Try using .reduce() for this!

const groupByCompletedReduce = (todos) => {
  return todos.reduce(
    (result, todo) => {
      if (todo.completed) {
        result.completed.push(todo);
      } else {
        result.incomplete.push(todo);
      }
      return result;
    },
    { completed: [], incomplete: [] },
  ); // Starting value
};
console.log(groupByCompletedReduce(todos));
