import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem'
import todosData from './Components/todosData'


function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
  return (
      <div className="todo-list">
          {todoItems}
      </div>
  )
}

export default App;
