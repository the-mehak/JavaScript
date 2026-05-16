import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState({ title: "", description: "" });

  function handleAddTodo(e) {
    e.preventDefault();
    if (!singleTodo.title.trim() && !singleTodo.description.trim()) return;

    setTodos([...todos, singleTodo]);
    setSingleTodo({ title: "", description: "" });
  }

  function handleDelete(index) {
    setTodos(todos.filter((c, i) => i !== index));
  }

  return (
    <div className="app-container">
      <div className="form-card">
        <h1>Todo App</h1>
        <p className="subtitle"></p>

        <form className="todo-form" onSubmit={handleAddTodo}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={singleTodo.title}
              onChange={(e) =>
                setSingleTodo({ ...singleTodo, title: e.target.value })
              }
              placeholder="Enter title"
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              value={singleTodo.description}
              onChange={(e) =>
                setSingleTodo({ ...singleTodo, description: e.target.value })
              }
              placeholder="Enter description"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">No tasks yet. Add one above.</div>
        ) : (
          todos.map((todo, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-details">
                <h2>{todo.title || "Untitled"}</h2>
                <p>{todo.description || "No description provided."}</p>
              </div>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <footer className="app-footer">devlop by mahak</footer>
    </div>
  );
}

export default App;
