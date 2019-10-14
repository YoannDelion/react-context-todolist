import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    <div>
      {todos.map(todo => (
        <Todo text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
