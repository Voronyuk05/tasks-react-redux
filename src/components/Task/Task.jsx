import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "redux/tasksSlice";
import { deleteTasks } from "redux/operations";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDeleteTask = () => {
    dispatch(deleteTasks(task))
  }

  const handleCheckboxChange = () => {
    dispatch(toggleCompleted(task.id))
  }

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDeleteTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
