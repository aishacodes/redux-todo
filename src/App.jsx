import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import DeleteIcon from "./components/icons/DeleteIcon";
import { addTodo } from "./store/action";

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const generateId = () => Math.random.toString(36).substring(2, 7);

  const addtodo = (e) => {
    e.preventDefault();
    let value = e.target.todo.value;
    const id = generateId();
    dispatch(addTodo(id, value));
    e.target.todo.value = "";
  };
  return (
    <div className="App">
      <h2>Todo</h2>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <p>{todo.description}</p>
            <DeleteIcon />
          </div>
        ))}
      </div>
      <form onSubmit={addtodo}>
        <p>Add a new todo: </p>
        <input name="todo" placeholder="Enter new task and press enter"></input>
      </form>
    </div>
  );
}

export default App;
