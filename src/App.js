import React, {useState, useEffect} from 'react';
import './App.css';
//importing components 
import Form from './components/form';
import Todolist from './components/todolist';

const App  = () => {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //UseEffect runs only once 
  useEffect(() => {
    getLocalTodos();
  },[]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => (todo.completed === true)));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => (todo.completed === false)));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos",JSON.stringify([]));
    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      //console.log(todoLocal);
      setTodos(todoLocal);
    }
  };
  return ( 
  <div className="App">
  <header><h1>Harsha's Todo App</h1></header>
    <Form setInputText={setInputText} 
          inputText={inputText}
          setTodos = {setTodos}
          todos = {todos}
          status={status}
          setStatus={setStatus}
          />
    <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
  </div> );
}
 
export default App ;
 