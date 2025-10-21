import { use, useState } from "react";

const taskss = [
  { id: 1, description: "Complete React component refactor", completed: false },
  { id: 2, description: "Write documentation for new API", completed: true },
  { id: 3, description: "Go for a 30-minute walk", completed: false },
];

export default function App() {
  const [tasks, setTask] = useState([...taskss]);
  const [filterBy, setFilterBy] = useState("All");

  function handleFilterBy(value) {
    setFilterBy(value);
  }

  function handleAddItem(item) {
    setTask((task) => [...tasks, item]);
  }
  function handleDeleteItem(id) {
    setTask((tasks) => tasks.filter((task) => task.id !== id));
  }
  function handleFinishTask(id) {
    setTask((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function handleDeleteCompletedTasks() {
    const completedTasks = tasks.slice().filter((task) => task.completed);
    if (completedTasks.length === 0) return;
    const confirm = window.confirm(
      "Are you sure you want to delete all completed tasks?"
    );
    confirm &&
      setTask((tasks) => tasks.slice().filter((task) => !task.completed));
  }
  function handleDeleteAllTasks() {
    if (!tasks.length) return;
    const confirm = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    confirm && setTask((tasks) => []);
  }
  return (
    <div className="background">
      <h2 className="title">
        <em>
          TO<span>DO</span>
        </em>
      </h2>
      {/* form here */}
      <AddNewTaskForm onAddItem={handleAddItem} />
      {/* Task list container */}
      <AllTaskContainer
        tasks={tasks}
        filterBy={filterBy}
        onDeleteTask={handleDeleteItem}
        onComplete={handleFinishTask}
        onFilter={handleFilterBy}
        onDeletedCompletedTasks={handleDeleteCompletedTasks}
        onDeleteAll={handleDeleteAllTasks}
      />
    </div>
  );
}

function AddNewTaskForm({ onAddItem }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, completed: false };
    onAddItem(newItem);
    setDescription("");
  }
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="input-task"
        placeholder="Add new task here..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="button">Add new Task</button>
    </form>
  );
}

function AllTaskContainer({
  tasks,
  filterBy,
  onDeleteTask,
  onComplete,
  onFilter,
  onDeletedCompletedTasks,
  onDeleteAll,
}) {
  let filteredTask = [];
  if (filterBy === "All") filteredTask = tasks;
  if (filterBy === "Active")
    filteredTask = [...tasks].filter((task) => task.completed === false);

  if (filterBy === "Completed")
    filteredTask = [...tasks].filter((task) => task.completed === true);

  return (
    tasks.length !== 0 && (
      <ul className="task-list-container">
        {/* filter here */}
        <div className="group-main">
          <Filter onFilter={onFilter} filterBy={filterBy} />
          {}
          {filteredTask.map((task) => (
            <Task
              task={task}
              key={task.id}
              onDeleteTask={onDeleteTask}
              onComplete={onComplete}
              filterBy={filterBy}
            />
          ))}
        </div>
        {/* status bar here */}
        <StatusBar
          tasks={tasks}
          onDeletedCompletedTasks={onDeletedCompletedTasks}
          onDeleteAll={onDeleteAll}
        />
      </ul>
    )
  );
}

function Filter({ onFilter, filterBy }) {
  return (
    <div
      className="filter-container"
      value={filterBy}
      onChange={(e) => onFilter(e.target.value)}
    >
      <span className="filter-title">Filter by : </span>
      <select className="filter">
        <option className="filter-op" value="All">
          All
        </option>
        <option className="filter-op" value="Active">
          Active
        </option>
        <option className="filter-op" value="Completed">
          Completed
        </option>
      </select>
    </div>
  );
}

function Task({ task, onDeleteTask, onComplete }) {
  return (
    <li className="task">
      <div
        style={task.completed ? { backgroundColor: "rgb(77, 50, 252)" } : {}}
        className="check"
        onClick={() => {
          onComplete(task.id);
        }}
      >
        {task.completed && <img src="./images/check-mark.png" alt="check" />}
        {!task.completed && (
          <img
            src="./images/check-mark.png"
            alt="check"
            style={{ opacity: 0 }}
          />
        )}
      </div>

      <p
        className="task-description"
        style={task.completed ? { textDecoration: "line-through" } : {}}
      >
        {task.description}
      </p>

      <div className="del" onClick={() => onDeleteTask(task.id)}>
        <img src="./images/trash-bin.png" alt="check" />
      </div>
    </li>
  );
}

function StatusBar({ tasks, onDeletedCompletedTasks, onDeleteAll }) {
  const totalTaskLeft = tasks
    .slice()
    .filter((task) => task.completed === false).length;
  return (
    <div className="staus-bar">
      <span>
        {totalTaskLeft
          ? `${totalTaskLeft} tasks left`
          : "All tasks are Completed"}
      </span>
      <div className="clear">
        <span onClick={onDeletedCompletedTasks}>Clear Completed tasks</span>
        <span onClick={onDeleteAll}>Clear All tasks</span>
      </div>
    </div>
  );
}
