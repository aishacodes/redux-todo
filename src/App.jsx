import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import DeleteIcon from "./components/icons/DeleteIcon";
import { addTodo, deleteTodo, executeTodo, toggleTodo } from "./store/action";

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const generateId = () => Math.random().toString(36).substring(2, 7);

  const addtodo = (e) => {
    e.preventDefault();
    let value = e.target.todo.value;
    const todoId = generateId();
    dispatch(addTodo(todoId, value));
    e.target.todo.value = "";
  };
  return (
    <div className="App">
      <h2>Todo</h2>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.done === true ? (
              <p className="done" onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.description}
              </p>
            ) : (
              <p onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.description}
              </p>
            )}
            <img
              src="./images/bin.svg"
              onClick={() => dispatch(deleteTodo(todo.id))}
              alt="delete"
            />
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
