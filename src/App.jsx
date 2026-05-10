import Todo from "./Components/Todo";
import { TasksProvider } from "./Context/TasksContext";

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default App;
