import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkBoxWrapper}>
        <input type="checkbox" />
      </div>
      <p className={styles.contentTask}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsam
        ratione fugiat neque? Voluptatum vero, consequuntur beatae incidunt
        dolor amet. Nulla, veritatis nesciunt optio quia consequuntur
        accusantium rerum illum aliquid?
      </p>
      <button className={styles.removeTaskButton}>
        <Trash />
      </button>
    </div>
  );
}
