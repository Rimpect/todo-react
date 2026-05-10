import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";
import { TasksContext } from "../Context/TasksContext";
import { useContext } from "react";

const Todo = () => {
const {firstInCompleteTaskRef}=useContext(TasksContext)
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm/>
      <SearchTaskForm/>
      <TodoInfo/>
      <Button
        onClick={() =>
          firstInCompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first in complete task
      </Button>
      <TodoList/>
    </div>
  );
};
export default Todo;
