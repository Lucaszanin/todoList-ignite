import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

export function Button() {
  return (
    <button type="submit" className={styles.button}>
      Criar
      <PlusCircle weight="regular" color="#f2f2f2" size={20} />
    </button>
  );
}
