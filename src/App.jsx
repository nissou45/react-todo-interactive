import { useState } from "react";

function App() {
  // 1. On crée un state pour stocker le texte de la tâche en cours
  const [task, setTask] = useState("");

  // 2. Un state pour stocker toutes les tâches ajoutées
  const [tasks, setTasks] = useState([]);

  // 3. Fonction pour ajouter une tâche
  const addTask = () => {
    if (task.trim() === "") return; // Empêche d'ajouter une tâche vide

    setTasks([...tasks, task]); // On ajoute la tâche au tableau
    setTask(""); // On vide l'input après ajout
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ma To-Do List</h1>

      {/* Input + bouton */}
      <input
        type="text"
        placeholder="Écris une tâche..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Ajouter</button>

      {/* Liste des tâches */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
