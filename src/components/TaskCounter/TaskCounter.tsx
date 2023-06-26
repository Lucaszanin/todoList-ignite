import styles from "./TaskCounter.module.css";
import type * as T from "./types";

export function TaskCounter({
  numberOfTasksCompleted,
  numberOfTasksCreated,
}: T.TaskCounterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentLeft}>
        <span className={styles.textcreated}>Tarefas criadas</span>
        <span className={styles.numbercreated}>{numberOfTasksCreated}</span>
      </div>
      <div className={styles.contentRight}>
        <span className={styles.textcompleted}>Concluídas</span>
        <span className={styles.numbercompletedandcreated}>
          {numberOfTasksCompleted} de {numberOfTasksCreated}
        </span>
      </div>
    </div>
  );
}
