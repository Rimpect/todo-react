import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;
  const {
    tasks,
    filteredTasks,

    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTasks,
  } = useTasks();
  const { firstInCompleteTaskRef, firstInCompleteTaskId } =
    useIncompleteTaskScroll(tasks);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstInCompleteTaskRef,
        firstInCompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
