import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import TodoItems from "./Components/TodoItems";

import './App.css';

function App() {
  const todoItems = [{
    name : "Buy Milk",
    dueDate : "4/10/2023",
  },
  {
    name : "Go to College",
    dueDate : "4/10/2023",
  }
]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );

}

export default App
