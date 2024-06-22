import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const task = useSelector(state => state.tasks)

  const taslCounter = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed += 1;
    } else {
      
    }
  })

  return (
    <div>
      <p className={css.text}>Active: 0</p>
      <p className={css.text}>Completed: 0</p>
    </div>
  );
};
