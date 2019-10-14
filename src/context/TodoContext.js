import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      completed: true
    },
    {
      text: 'Learn Context API',
      completed: false
    }
  ]);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
