import { useContext } from "react";
import Button from "./Button";
import Field from "./Field";
import { TasksContext } from "../Context/TasksContext";
import { useState } from "react";

const AddTaskForm = () => {
  const { addTasks, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!isNewTaskTitleEmpty) {
      addTasks(clearNewTaskTitle);
    }
  };
  const [error, setError] = useState("");
  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.trim().length === 0;

  const onInput = (event) => {
    const { value } = event.target;
    const cleatValue = value.trim();
    const hasOnlySpace = value.length > 0 && cleatValue.length === 0;

    setNewTaskTitle(value);
    setError(hasOnlySpace ? "The task cannot be empty" : "");
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  );
};
export default AddTaskForm;
