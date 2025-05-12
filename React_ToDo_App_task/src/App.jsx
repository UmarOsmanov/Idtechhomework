import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter(( _, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <div className="header">
        <h1>TODO</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{isEditing ? "Update" : "Add"}</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <div className="actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
