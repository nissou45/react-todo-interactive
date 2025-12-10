import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleDone, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p style={{ opacity: 0.6 }}>Aucune tâche à afficher...</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
