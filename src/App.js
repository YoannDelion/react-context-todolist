import React from 'react';
import './App.css';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';

const App = () => (
  <TodoProvider>
    <div className='App'>
      <Nav />
      <AddTodo />
      <TodoList />
    </div>
  </TodoProvider>
);

export default App;
