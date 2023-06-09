import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Turkish 🧿', isCompleted: false },
    { id: 2, text: 'Be awesome 😎', isCompleted: true },
    { id: 3, text: 'Build a project 🚀', isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);

  function handleAddTodo() {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        isCompleted: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  }

  function handleDeleteAll() {
    setTodos([]);
  }

  function handleDelete(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleHideCompleted() {
    setHideCompleted(!hideCompleted);
  }

  function handleCheckboxChange(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const filteredTodos = hideCompleted
    ? todos.filter(todo => !todo.isCompleted)
    : todos;

  return (
    <div className="max-w-md mx-auto rounded-md p-4 text-white">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full p-2 border border-gray-700 rounded-md mb-4 bg-gray-900 text-white"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTodo}
        className="w-full py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Add Todo
      </button>
      <button
        onClick={handleDeleteAll}
        className="w-full py-2 bg-red-500 text-white rounded-md mb-4"
      >
        Delete All
      </button>
      <button
        onClick={handleHideCompleted}
        className="w-full py-2 bg-gray-500 text-white rounded-md mb-4"
      >
        {hideCompleted ? 'Show All' : 'Hide Completed'}
      </button>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            onCheckboxChange={() => handleCheckboxChange(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
