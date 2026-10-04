import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTaskCount } from "@/redux/task/taskSelectors";

export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
