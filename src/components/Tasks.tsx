import styles from "./Tasks.module.css";
import { TaskProps } from "../App";
import trash from "../assets/Trash.png";

export function Tasks({ task }: TaskProps) {
  return (
    <div>
      <div className={styles.taskList}>
        <p>{task.title}</p>
        <button>
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  );
}
