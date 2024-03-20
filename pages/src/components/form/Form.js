import { useEffect, useState } from "react";
import Input from "../input/input";

const Form = ({ tasks, setTasks }) => {
  const [value, setValue] = useState();
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  const activeTasks = () => {
    setActive(tasks.filter((task) => !task.isCompleted));
    setTasks(active);
    console.log(active);
  };
  const completedTasks = () => {
    setCompleted(tasks.filter((task) => task.isCompleted));
    setTasks(completed);
    console.log(completed);
  };

  const selectTasks = (e) => {
    const tag = e.target;
    if (tag.value === "all") {
      setTasks(tasks);
      console.log(tasks);
    } else if (tag.value === "active") {
      activeTasks();
    } else if (tag.value === "completed") {
      completedTasks();
    }
  };

  useEffect(() => {
    setValue();
  }, [value]);

  return (
    <form action="">
      <Input tasks={tasks} setTasks={setTasks} />
      <select
        className="todo__options"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={selectTasks}
      >
        <option value="all">все</option>
        <option value="active" onClick={activeTasks}>
          активные
        </option>
        <option value="completed" onClick={completedTasks}>
          завершённы
        </option>
      </select>
    </form>
  );
};

export default Form;
