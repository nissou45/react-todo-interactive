function TaskFilters({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Toutes
      </button>

      <button
        className={filter === "todo" ? "active" : ""}
        onClick={() => setFilter("todo")}
      >
        À faire
      </button>

      <button
        className={filter === "done" ? "active" : ""}
        onClick={() => setFilter("done")}
      >
        Faites
      </button>
    </div>
  );
}

export default TaskFilters;
