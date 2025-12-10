function TaskItem({ task, toggleDone, deleteTask }) {
  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
      <span className="title" onClick={() => toggleDone(task.id)}>
        {task.title}
      </span>

      <span className={`priority ${task.priority}`}>{task.priority}</span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        🗑️
      </button>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleDone(task.id)}
      />
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleDone(task.id)}
      />
    </li>
  );
}

export default TaskItem;
