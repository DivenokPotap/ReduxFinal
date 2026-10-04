import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "@/redux/selectors";
import { Helmet } from "react-helmet";
import { TaskList } from "@/components/TaskList/TaskList";
import { AppBar } from "@/components/AppBar/AppBar";
import { TaskForm } from "@/components/TaskForm/TaskForm";
import { fetchTasks } from "@/redux/task/taskOperations";

const TasksPage = () => {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </>
  );
};

export default TasksPage;
