import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";
import { changeStatus } from "redux/filterSlice";
import { statusFilters } from "redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const {all, active, completed} = statusFilters

  const handleChangeFilter = (status) => {
    dispatch(changeStatus(status))
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={() =>handleChangeFilter(all)} >All</Button>
      <Button onClick={() =>handleChangeFilter(active)}>Active</Button>
      <Button onClick={() =>handleChangeFilter(completed)}>Completed</Button>
    </div>
  );
};
