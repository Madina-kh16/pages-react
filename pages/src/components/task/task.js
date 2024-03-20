import { useEffect, useState } from "react";

const Task = ({ task, setTasks, tasks, isComplited }) => {
  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.task !== task));
  };

  const completeTask = () => {
    setTasks(
      tasks.map((item) =>
        item.task === task ? { ...item, isComplited: !item.isComplited } : item
      )
    );
  };

  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, [date]);

  return (
    <li className={"todo__item " + (isComplited ? "completed" : "")}>
      <span className="todo__task">
        {task}
        <span className="todo__date">{date}</span>
      </span>

      <span
        className="todo__action todo__action_complete"
        onClick={completeTask}
      ></span>
      <span
        className="todo__action todo__action_delete"
        onClick={deleteTask}
      ></span>
    </li>
  );
};

export default Task;
