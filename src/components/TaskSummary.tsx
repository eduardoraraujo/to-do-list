import styles from "./TaskSummary.module.css";
import { ContentProps } from "../App";

export default function TaskSummary({
  tasksCreated,
  tasksCompleted,
}: ContentProps) {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span className={styles.tasksCounts}>{tasksCreated}</span>
        </div>
        <div className={styles.tasksCompleted}>
          <p>Concluídas</p>
          <span className={styles.tasksCounts}>
            {tasksCompleted === 0
              ? "0"
              : `${tasksCompleted} de ${tasksCreated}`}
          </span>
        </div>
      </div>
    </div>
  );
}
