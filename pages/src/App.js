import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Container from "./components/container/container";

const localStorageTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];

const App = () => {
  const [tasks, setTasks] = useState(localStorageTask);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo">
      <Form tasks={tasks} setTasks={setTasks} />
      <Container tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
