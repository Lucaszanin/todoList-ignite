import styles from "./Main.module.css";
import { Header } from "../Header/Header";
import { InputTask } from "../Input/InputTask";
import { CreateTaskButton } from "../Button/CreateTaskButton";
import { Task } from "../Task/Task";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import type * as T from "./types";
import { TaskCounter } from "../TaskCounter/TaskCounter";

function Main() {
  const uniqueId = uuidv4();
  const [tasks, setTasks] = useState<T.Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [taskCompletedCount, setTaskCompletedCount] = useState(0);
  const [taskCreated, setTaskCreated] = useState(0);

  const addTask = (): void => {
    if (newTaskText.trim() !== "") {
      const newTask: T.Task = {
        id: uniqueId,
        text: newTaskText,
        isChecked: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskText("");
      setTaskCreated((count) => {
        return count + 1;
      });
    }
  };

  const handleNewTask = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(target.value);
  };

  const handleButtonClick = (): void => {
    addTask();
  };

  const handleTaskCheckboxChange = (taskId: string, isChecked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !isChecked } : task
      )
    );

    if (isChecked) {
      setTaskCompletedCount((prevCount) => prevCount - 1);
    } else {
      setTaskCompletedCount((prevCount) => prevCount + 1);
    }
  };

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
    setTaskCreated(taskCreated - 1);
    setTaskCompletedCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerwrapper}>
          <div className={styles.wrapper}>
            <InputTask
              type="text"
              value={newTaskText}
              onChange={handleNewTask}
            />
            <CreateTaskButton onClick={handleButtonClick} />T
          </div>
          <TaskCounter
            numberOfTasksCompleted={taskCompletedCount}
            numberOfTasksCreated={taskCreated}
          />
          {tasks.map((task) => {
            console.log(task.isChecked);
            return (
              <Task
                onTaskCheckboxChange={() =>
                  handleTaskCheckboxChange(task.id, task.isChecked)
                }
                content={task.text}
                id={task.id}
                onDeleteTask={deleteTask}
                key={task.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
