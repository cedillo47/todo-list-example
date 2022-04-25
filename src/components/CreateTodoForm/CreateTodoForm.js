import React from "react";

export default function CreateTodoForm(props) {
  const { setTodos, todos } = props;

  const [taskInput, setTaskInput] = React.useState("");

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        task: taskInput,
        completed: false,
      },
    ]);

    setTaskInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
      </div>

      <button type="submit">Create Task</button>
    </form>
  );
}
