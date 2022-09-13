import { useState, useRef, useEffect } from "react";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const title = useRef(null);

  function addTodo() {
    if (
      title.current.value &&
      !todos.find((todo) => todo.title === title.current.value)
    ) {
      setTodos([
        ...todos,
        {
          title: title.current.value,
          done: false,
        },
      ]);

      title.current.value = "";
    }
  }

  function checkTodo(event) {
    const newTodos = [...todos];
    const targetTodo = newTodos.find(
      (todo) => todo.title === event.target.dataset.title
    );
    targetTodo.done = !targetTodo.done;

    setTodos(newTodos);

    // setTodos((prevTodos) => {
    //   const targetTodo = prevTodos.find(
    //     (todo) => todo.title === event.target.dataset.title
    //   );
    //   targetTodo.done = !targetTodo.done;
    //   return prevTodos;
    // });
  }

  function deleteTodo(event) {
    setTodos(todos.filter((todo) => todo.title !== event.target.dataset.title));
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
            ref={title}
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
              <button>
                <i
                  className="fa fa-trash"
                  id="delete-todo"
                  onClick={deleteTodo}
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
