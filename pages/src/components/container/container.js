import Task from "../task/task";

const Container = ({ tasks, setTasks, date }) => {
  return (
    <ul className="todo__items">
      {tasks.map(({ task, isComplited, i }) => (
        <Task
          task={task}
          date={date}
          setTasks={setTasks}
          key={i}
          key2={task}
          tasks={tasks}
          isComplited={isComplited}
        />
      ))}
    </ul>
  );
};

export default Container;
