import Task from "../task/task";

const Container = ({ value, tasks, setTasks, date }) => {
  return (
    <ul className="todo__items">
      {(value === "all"
        ? tasks
        : value === "active"
        ? tasks.filter(({ isComplited }) => !isComplited)
        : tasks.filter(({ isComplited }) => isComplited)
      ).map(({ task, isComplited }) => (
        <Task
          task={task}
          date={date}
          setTasks={setTasks}
          key={task}
          tasks={tasks}
          isComplited={isComplited}
        />
      ))}
    </ul>
  );
};

export default Container;
