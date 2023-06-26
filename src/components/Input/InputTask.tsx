import * as T from "./types";
import styles from "./InputTask.module.css";

export function InputTask({ type, value, onChange, ...props }: T.InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...props}
      className={styles.inputStyles}
    />
  );
}
