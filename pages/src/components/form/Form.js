import Input from "../input/input";

const Form = ({ setValue, value, tasks, setTasks }) => {
  return (
    <form action="">
      <Input tasks={tasks} setTasks={setTasks} />
      <select
        className="todo__options"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="all">все</option>
        <option value="active">активные</option>
        <option value="completed">завершённыe</option>
      </select>
    </form>
  );
};

export default Form;
