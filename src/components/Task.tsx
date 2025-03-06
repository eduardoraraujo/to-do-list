import { NothingToShow } from "./NothingToShow";
import styles from "./Task.module.css";

interface TaskProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function Task({ tasksCreated, tasksCompleted }: TaskProps) {
  return (
    <div>
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

      <div>
        {tasksCreated <= 0 ? <NothingToShow /> : null}
      </div>
    </div>
  );
}
