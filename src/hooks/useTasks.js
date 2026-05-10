/* eslint-disable no-undef */
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import tasksAPI from "../api/tasksAPI";
const useTasks = () => {
  const [tasks, SetTasks] = useState([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all?");

    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      SetTasks(tasks.filter((task) => task.id !== taskId));
      tasksAPI.delete(taskId).then(() => {
        SetTasks(tasks.filter((task) => task.id !== taskId));
      });
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      tasksAPI.toggleComplete(taskId, isDone).then(() => {
        SetTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }
            return task;
          }),
        );
      });
    },
    [tasks],
  );

  const addTasks = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };
    tasksAPI.add(newTask).then((addedTask) => {
      SetTasks((prevTasks) => [...prevTasks, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();
    tasksAPI.getAll().then(SetTasks);
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim("").toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);
  return {
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
  };
};

export default useTasks;
