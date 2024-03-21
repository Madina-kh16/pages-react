import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Container from "./components/container/container";

const localStorageTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];

const App = () => {
  const [value, setValue] = useState("all");
  const [tasks, setTasks] = useState(localStorageTask);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo">
      <Form
        tasks={tasks}
        setTasks={setTasks}
        value={value}
        setValue={setValue}
      />
      <Container
        tasks={tasks}
        setTasks={setTasks}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default App;
