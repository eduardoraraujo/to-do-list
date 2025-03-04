import todoLogo from "../assets/Layer 2.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </div>
  );
}
