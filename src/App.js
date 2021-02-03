import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';

function App() {

  return (
    <div className="App">
     <h1>TO DO</h1>
     <Form></Form>
     <TodoList></TodoList>
    </div>
  );
}

export default App;
