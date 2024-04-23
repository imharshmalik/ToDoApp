import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function ToDoList({ todos, settodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  const className = todos.length ? styles.list : "";

  return (
    <div className={className}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
