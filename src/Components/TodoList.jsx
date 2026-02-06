import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { tasks = [] } = props;

  const hasTasks = true;
  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  } else {
    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
  
            key={task.id}
            title={task.title}
            isDone={task.isDone}
            // или же вместо всего этого используем {...task} (вместо вот этого   id={task.id} и вместо   id={task.id}  используем   key={task.id} 
            // title={task.title}
            // isDone={task.isDone})
          />
        ))}
      </ul>
    );
  }
};
export default TodoList;
