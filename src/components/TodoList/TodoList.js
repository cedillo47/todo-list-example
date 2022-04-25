import Todo from "../Todo/Todo";

export default function TodoList(props) {
  const { todos, markTodoAsComplete } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} markTodoAsComplete={markTodoAsComplete} />
      ))}
    </ul>
  );
}
