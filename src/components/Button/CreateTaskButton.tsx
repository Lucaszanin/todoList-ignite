import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

interface CreateTaskButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function CreateTaskButton({ onClick }: CreateTaskButtonProps) {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      Criar
      <PlusCircle weight="regular" color="#f2f2f2" size={20} />
    </button>
  );
}
