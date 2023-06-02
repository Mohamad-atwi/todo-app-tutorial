const TodoItem = ({ todo, onCheckboxChange, onDelete }) => {

  // TASK 1: Replace the static todos below with these destructured variables
  const { id, text, isCompleted } = todo;

  function handleCheckboxChange() {
    // Task 3: You should add such function to handle checkbox change. 
    // Keep in mind that you need to update the todo with the given id!
  };

  function handleDelete() {
    // Task 2: You should add such function to handle delete button click.
    // Keep in mind that you need to delete the todo with the given id!
  };

  return (
    <li className="flex items-center mb-2 bg-gray-700 rounded-md p-3">
      <input type="checkbox" className="mr-3" onChange={handleCheckboxChange}
        // Task 1: Checkbox value should be based on isCompleted field
        checked={false}
      />
      <span className={`flex-1 text-white ${isCompleted ? 'line-through' : ''}`}>
        {/* Task 1: You should render text of todo that is passed as a prop */}
        Static Todo Text
      </span>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md"
      // You should add some logic here to delete the todo, like some handler
      
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;