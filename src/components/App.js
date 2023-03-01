import React, { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  // Define state variables for the todo list and the input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Define a function to handle adding a new todo item
  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Define a function to handle toggling the completed status of a todo item
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  // Define a function to handle removing a todo item
  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="app__header">
        <FontAwesomeIcon icon={faCheck} className="app__header-icon" />
        <h1 className="app__title">Todo List</h1>
      </div>
      <div className="app__form">
        <input
          className="app__form-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="app__form-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="app__list">
        {todos.map((todo) => (
          <li className="app__list-item" key={todo.id}>
            <span
              className="app__list-text"
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="app__list-delete-button"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
