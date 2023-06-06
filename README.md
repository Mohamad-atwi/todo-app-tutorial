# React Todo App Tutorial

This is a hands-on tutorial where you'll be implementing functionality for a Todo app using React. 

## Getting Started

### On your local machine

You can work with tasks on your local machine by cloning the repository and opening it with your code editor or IDE.

### Remotely using GitHub Codespace or GitPod

If you don't want to solve tasks on your computer, you can use virtual environment like GitHub Codespace or Gitpod.

#### GitHub Codespace

Navigate to the repository home page. Click green button `<> Code`, then `Codespaces` and `Create codespace on main`.

#### Gitpod

We are aware of current problems with GitHub Codespaces. Therfore, we encourege you to give Gitpod a try. Fork our repository. Navigate to https://gitpod.io/ and create an account. You should sign up with your GitHub account. Click the `New Workspace` button and select forked repository (`your-username/todo-app-tutorial`). The standard class machine is enough to work with the tasks.

## Tasks

You should see two main components in your project, `TodoList.js` and `TodoItem.js`.
The tutorial consists of three main tasks, each designed to help you understand different aspects of React programming.

### Task 1: Replace Static Data with Props

Your first task is to replace the static todo data with dynamic data passed in as props.

In `TodoItem.js`, you'll see a todo object destructured. Replace the static values in the returned JSX with these properties. Make sure to base the checkbox value on the `isCompleted` field and render the text of the todo that is passed as a prop.

In `TodoList.js`, the state variable `todos` contains an array of todo objects. Use these to replace the static todos.

### Task 2: Adding and Deleting Todos

In this task, you will implement the functionality for adding and deleting todos.

In `TodoList.js`, you'll find empty functions `handleAddTodo`, `handleDeleteAll`, and `handleDelete`. Implement the logic inside these functions to add a new todo, delete all todos, and delete a specific todo, respectively. Remember to manipulate the state using the `setTodos` and `setNewTodo` functions.

In `TodoItem.js`, add functions to handle checkbox changes and deletion button clicks. Make sure these functions interact with the correct todo based on its `id`.

### Task 3: Advanced Todo Management

In this task, you'll implement more advanced features like hiding completed todos and filtering the todo list.

In `TodoList.js`, implement logic inside `handleHideCompleted` to hide completed todos. You may want to introduce a new state variable `hideCompleted` for this. 

Update `handleCheckboxChange` to update a todo item's completed status. Remember, you'll need to create a new array with the updated todo, rather than trying to directly mutate the existing todos array.

Finally, you will implement logic to filter the todos based on the `hideCompleted` state variable.

In `TodoItem.js`, add logic to handle checkbox changes that will ultimately update the todo's `isCompleted` status. 

## Summary

At the end of this tutorial, you'll have a fully-functional Todo App created with React. We encourage you to go beyond the tutorial and add your own features and improvements!

Happy Coding!
