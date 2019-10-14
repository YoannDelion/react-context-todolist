import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Nav = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div>
      <p>Todos: {todos.length}</p>
    </div>
  );
};

export default Nav;
