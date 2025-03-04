import styles from "./InputTask.module.css";
import plus from "../assets/plus.svg";
import { useState } from "react";

export function InputTask() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const prevTextInput = "Descrição da tarefa | ";

  function handleEventChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    if (!inputValue.startsWith(prevTextInput)) {
      setValue(prevTextInput);
    } else {
      setValue(inputValue);
    }
  }

  function handleFocus() {
    setFocus(true);
    if (!value) setValue(prevTextInput);
  }

  function handleClearValue() {
    setFocus(false);
    setValue("");
  }

  return (
    <div className={styles.task}>
      <input
        type="text"
        value={focus ? value : ""}
        placeholder="Adicione uma nova tarefa"
        onChange={handleEventChange}
        onFocus={handleFocus}
        onBlur={handleClearValue}
      />
      <button type="submit">
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  );
}
