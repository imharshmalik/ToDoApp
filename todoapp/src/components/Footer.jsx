import styles from "./footer.module.css";

export default function Footer({ completedTodosCount, totalTodosCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Todos completed: {completedTodosCount}
      </span>
      <span className={styles.item}>Todal Todos: {totalTodosCount}</span>
    </div>
  );
}
