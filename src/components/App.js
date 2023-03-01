import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Draggable from 'react-draggable';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <Draggable handle=".react-resizable-handle">
        <ResizableBox
          width={500}
          height={400}
          minConstraints={[300, 200]}
          style={{ position: 'relative' }}
        >
          <div className="app">
            <div className="handle react-resizable-handle"></div>
            <div className="container">
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
                        textDecoration: todo.completed
                          ? 'line-through'
                          : 'none',
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
          </div>
        </ResizableBox>
      </Draggable>
    </div>
  );
}

export default App;
