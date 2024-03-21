const Button = ({ value, tasks, setTasks, setValue }) => {
  const getInputValue = (e) => {
    e.preventDefault();
    if (value.trim() !== "" && tasks.every((item) => item.task !== value)) {
      setTasks([...tasks, { task: value, isComplited: false }]);
      setValue("");
    }
  };

  return <button className="todo__add" onClick={getInputValue}></button>;
};

export default Button;
