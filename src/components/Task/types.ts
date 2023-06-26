export type TaskProps = {
  content: string;
  id: string;
  onDeleteTask: (id: string) => void;
  onTaskCheckboxChange: (isChecked: boolean, id: string) => void;
};
