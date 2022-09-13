import "./Todos.css";
import React, { useState, useRef, useEffect } from "react";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // const [todos, setTodos] = useState(
  //   localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : []
  // );
  const inputTitle = useRef(null);

  function addTodo() {
    const title = inputTitle.current.value;

    if (title && !todos.find((todo) => todo.title === title)) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          title: title,
          done: false,
        },
      ]);

      inputTitle.current.value = "";
    }
  }

  function checkTodo(event) {
    const title = event.target.dataset.title;
    console.log(title);

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.title === title
          ? {
              title: title,
              done: !todo.done,
            }
          : todo
      )
    );

    // setTodos((prevTodos) => {
    //   const targetTodo = prevTodos.find((todo) => todo.title === title);
    //   targetTodo.done = !targetTodo.done;
    //   console.log(prevTodos);
    //   return prevTodos;
    // });
  }

  function deleteTodo(event) {
    const title = event.target.dataset.title;

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
  }

  function clearTodos() {
    setTodos([]);
  }

  useEffect(() => {
    setTodos(
      localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
    );
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
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
          <button
            className="fa fa-plus"
            id="add-todo"
            onClick={addTodo}
          ></button>
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
                <i
                  className="fa fa-trash"
                  id="delete-todo"
                  data-title={todo.title}
                ></i>
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
