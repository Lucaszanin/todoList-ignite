import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import type * as T from "./types";
import { useState } from "react";

export function Task({
  content,
  onDeleteTask,
  id,
  onTaskCheckboxChange,
}: T.TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    onTaskCheckboxChange(id, newCheckedValue);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.checkBoxWrapper}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p
        className={
          isChecked
            ? `${styles.contentTask} ${styles.checked}`
            : styles.contentTask
        }
      >
        {content}
      </p>
      <button className={styles.removeTaskButton} onClick={handleDeleteTask}>
        <Trash width={24} height={24} />
      </button>
    </div>
  );
}
