import React from 'react';

const Todo = ({ text, completed }) => {
  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </div>
  );
};

export default Todo;
