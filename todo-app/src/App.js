const tasks = [
  { id: 1, description: "Complete React component refactor", completed: false },
  { id: 2, description: "Write documentation for new API", completed: true },
  { id: 3, description: "Go for a 30-minute walk", completed: false },
];

export default function App() {
  return (
    <div className="background">
      <h2 className="title">
        <em>
          TO<span>DO</span>
        </em>
      </h2>
      {/* form here */}
      <AddNewTaskForm />
      {/* Task list container */}
      <AllTaskContainer />
    </div>
  );
}

function AddNewTaskForm() {
  return (
    <form className="add-task-form">
      <input className="input-task" placeholder="Add new task here..." />
      <button className="button">Add new Task</button>
    </form>
  );
}

function AllTaskContainer() {
  return (
    <ul className="task-list-container">
      {/* filter here */}
      <div className="group-main">
        <Filter />
        {/* task list */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

      {/* status bar here */}
      <StatusBar />
    </ul>
  );
}

function Filter() {
  return (
    <div className="filter-container">
      <span className="filter-title">Filter by : </span>
      <select className="filter">
        <option className="filter-op">All</option>
        <option className="filter-op">Active</option>
        <option className="filter-op">Completed</option>
      </select>
    </div>
  );
}

function Task() {
  return (
    <li className="task">
      <div className="check">
        <img src="./images/check-mark.png" alt="check" />
      </div>
      <p className="task-description">Practice coding</p>
      <div className="del">
        <img src="./images/trash-bin.png" alt="check" />
      </div>
    </li>
  );
}

function StatusBar() {
  return (
    <div className="staus-bar">
      <span>3 tasks left</span>
      <div className="clear">
        <span>Clear Completed tasks</span>
        <span>Clear All tasks</span>
      </div>
    </div>
  );
}
