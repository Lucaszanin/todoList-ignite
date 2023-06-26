export type TaskProps = {
  content: string;
  id: string;
  onDeleteTask: (id: string,isChecked: boolean) => void;
  onTaskCheckboxChange: (isChecked: boolean, id: string) => void;
};
