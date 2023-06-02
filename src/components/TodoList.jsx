import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  // TASK 1: Replace the static todos with the following state variable
  // see the TodoItem component for more details
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Turkish 🧿', isCompleted: false },
    { id: 2, text: 'Be awesome 😎', isCompleted: true },
    { id: 3, text: 'Build a project 🚀', isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    // Task 2: Implement logic to add a new todo
    // you can observe newTodo state variable is keeping the value of the input
    // so you need to add the new todo to the todos state variable
  };

  function handleDeleteAll() {
    // Task 2: Implement logic to delete all todos
  };

  function handleDelete(id) {
    // Task 2: Implement logic to delete a todo
  }

  function handleHideCompleted() {

    // Task 3: Implement logic to hide completed todos
    // you might want to use a variable to store the state. like hideCompleted
  };

  function handleCheckboxChange(id) {
    // Task 3: Implement logic to update a todo
    // warning! updating state of an object / array is a bit tricky
    // only updating isCompleted field of the todo with the given id is not enough. you need to update the whole todos
  };

  // Task 3: Implement logic to filter todos
  // obviously you need to filter todos based on hideCompleted state variable
  const filteredTodos = todos;

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
        Hide Completed
      </button>
      <ul>
        {filteredTodos.map((todo) => (
          // you need to pass some handler for deleting the todo and checkbox change
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
