import { useState } from "react";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    addTask(title, priority);
    setTitle("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low 🟢</option>
        <option value="medium">Medium 🟡</option>
        <option value="high">High 🔴</option>
      </select>

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskInput;
