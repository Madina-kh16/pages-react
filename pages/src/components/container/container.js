import Task from "../task/task";

const Container = () => {
  return (
    <ul className="todo__items">
      <Task value="Встать в 7" data="9.03.24" />
      <Task value="Лечь в 17" data="10.03.24" />
    </ul>
  );
};

export default Container;
