import { useState } from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [todo, ...prevTodos]);
    console.log('addTodo', todo);
  }

  function rmvTodo(id) {
    console.log('id', id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function updateTodo(id, updatedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  }

  console.log(todos);

  return (
    <div>
      <TodoInput onData={addTodo} />
      <TodoList list={todos} onRemove={rmvTodo} onUpdate={updateTodo} />
    </div>
  );
}

export default Todo;
