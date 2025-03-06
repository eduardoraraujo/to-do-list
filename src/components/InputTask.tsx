import styles from "./InputTask.module.css";
import plus from "../assets/plus.svg";
import { ChangeEvent, useState } from "react";

interface InputTaskProps {
  onAddTask: (title: string) => void;
}

export function InputTask({ onAddTask }: InputTaskProps) {
  const [value, setValue] = useState("");

  function handleEventChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleCreateTask() {
    if (value === "") return;
    onAddTask(value.trim());
    setValue("");
  }

  return (
    <div className={styles.task}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleEventChange}
      />
      <button type="submit" onClick={handleCreateTask}>
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  );
}
