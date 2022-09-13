import "./Todos.css";
import { useState, useEffect, useRef } from "react";

export default function Todos(props) {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [loaded, setLoaded] = useState(false);
  const inputTitle = useRef(null);

  function addTodo(event) {
    const title = inputTitle.current.value;
    if (title && !todos.find((todo) => todo.title === title)) {
      const newTodo = {
        title: inputTitle.current.value,
        done: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      inputTitle.current.value = "";
    }
  }

  function checkTodo(event) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.title !== event.target.dataset.title
          ? todo
          : {
              title: todo.title,
              done: !todo.done,
            }
      )
    );
  }

  function deleteTodo(event) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.title !== event.target.dataset.title)
    );
  }

  function clearTodos(event) {
    setTodos([]);
  }

  useEffect(() => {
    setTodos(() => {
      const todos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
      setLoaded(true);
      return todos;
    });
  }, []);

  useEffect(() => {
    // if (loaded) {
    localStorage.setItem("todos", JSON.stringify(todos));
    // }
  }, [todos]);

  return (
    <>
      <div className="todo-box">
        <h1 className="title">ToDo App</h1>
        <div className="form-group">
          <input
            ref={inputTitle}
            type="text"
            id="todo-input"
            placeholder="New Todo ..."
          />
          <button onClick={addTodo}>
            <i className="fa fa-plus" id="add-todo"></i>
          </button>
        </div>

        <div className="todolist-container" id="todolist-container">
          {todos.map((todo) => (
            <div key={todo.title}>
              <div>
                <p>{todo.title}</p>
              </div>
              <input
                type="checkbox"
                defaultChecked={todo.done}
                onClick={checkTodo}
                data-title={todo.title}
              />
              <button data-title={todo.title} onClick={deleteTodo}>
                <i className="fa fa-trash" id="delete-todo"></i>
              </button>
            </div>
          ))}
        </div>
        <button id="clear-todos" onClick={clearTodos}>
          Clear All
        </button>
      </div>
    </>
  );
}
