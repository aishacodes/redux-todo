import "./App.css";

import DeleteIcon from "./components/icons/DeleteIcon";

function App() {
  return (
    <div className="App">
      <h2>Todo</h2>
      <div className="todos">
        <div className="todo">
          <p>hello</p>
          <DeleteIcon />
        </div>
      </div>
      <form>
        <p>Add a new todo: </p>
        <input placeholder="Enter new task and press enter"></input>
      </form>
    </div>
  );
}

export default App;
