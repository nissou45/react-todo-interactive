import { useState } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all | todo | done

  // Ajouter une tâche
  const addTask = (title, priority) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Marquer une tâche comme faite / non faite
  const toggleDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filtrer les tâches selon l'état
  const filteredTasks = tasks.filter((t) => {
    if (filter === "todo") return !t.done;
    if (filter === "done") return t.done;
    return true; // "all"
  });

  return (
    <div className="app-container">
      <h1 className="title">Gestionnaire de tâches</h1>

      <TaskInput addTask={addTask} />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
