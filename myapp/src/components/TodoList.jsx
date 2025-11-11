import React from 'react';

const TodoList = ({ todos = [], setTasks }) => {
  const handleDelete = (todo) => {
    const updatedTodos = todos.filter((work) => work !== todo);
    setTasks(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => handleDelete(todo)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
