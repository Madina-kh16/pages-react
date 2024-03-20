import { useState } from "react";
import Button from "../button/button";

const Input = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="todo__input">
      <input
        className="todo__text"
        type="text"
        value={value}
        onChange={changeValue}
      />
      <Button
        value={value}
        tasks={tasks}
        setTasks={setTasks}
        setValue={setValue}
      />
    </div>
  );
};

export default Input;
