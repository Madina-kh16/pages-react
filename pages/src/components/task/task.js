const Task = ({ value, data }) => {
  return (
    <li className="todo__item">
      <span className="todo__task">
        {value}
        <span class="todo__date">{data}</span>
      </span>
      <span className="todo__action todo__action_complete"></span>
      <span className="todo__action todo__action_delete"></span>
    </li>
  );
};

export default Task;
