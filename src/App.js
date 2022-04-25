import React from "react";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // the output of `useState` is an array
  // the first item in the array is the state that we are keeping track of
  // the second item in the array is a function that allows up to set/update
  // the state that we are keeping track of
  const [todos, setTodos] = React.useState([
    { task: "sweep floor", completed: false },
    { task: "call mom", completed: false },
    { task: "wash car", completed: false },
    { task: "work on hw", completed: true },
  ]);

  function markTodoAsComplete(todo) {
    const updatedTodos = todos.map((t) => {
      if (t.task === todo.task) {
        t.completed = true;
        return t;
      }

      return t;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} markTodoAsComplete={markTodoAsComplete} />
    </div>
  );
}

export default App;
