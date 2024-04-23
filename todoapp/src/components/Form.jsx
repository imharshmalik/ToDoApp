import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.todoinput}
            type="text"
            placeholder="Enter a thing to do..."
            value={todo.name}
            onChange={(e) => settodo({ name: e.target.value, done: false })}
          />
          <button className={styles.submitButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
