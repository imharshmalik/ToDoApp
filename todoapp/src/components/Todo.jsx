import { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([]);
  const totalTodosCount = todos.length;
  const completedTodosCount = todos.filter((todo) => todo.done === true).length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <ToDoList todos={todos} settodos={settodos} />
      <Footer
        completedTodosCount={completedTodosCount}
        totalTodosCount={totalTodosCount}
      />
    </div>
  );
}
