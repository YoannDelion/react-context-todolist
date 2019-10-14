import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  const updateText = event => {
    setText(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setText('');
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <form onSubmit={addTodo}>
      <input type='text' name='text' value={text} onChange={updateText} />
      <button>Submit</button>
    </form>
  );
};

export default AddTodo;
