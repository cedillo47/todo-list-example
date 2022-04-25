export default function Todo(props) {
  const { todo, markTodoAsComplete } = props;

  return (
    <li
      key={todo.task}
      style={{
        textDecoration: todo.completed ? "line-through" : "auto",
      }}
    >
      <div>
        {todo.task}
        <button
          onClick={(event) => {
            markTodoAsComplete(todo);
          }}
        >
          Mark Complete
        </button>
      </div>
    </li>
  );
}
