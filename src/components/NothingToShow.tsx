import styles from "./NothingToShow.module.css";
import Clipboard from "../assets/Clipboard.svg";

export function NothingToShow() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={Clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
