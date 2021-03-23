import React from 'react';
//import component
import Todo from './todo';

const Todolist = ({todos, setTodos, filteredTodos}) => {
    //console.log(filteredTodos);
    return ( 
    <div className="todo-container">
    <ul className="todo-list">
        {filteredTodos.map(todo => (
            <Todo key={todo.id} text={todo.text} todo={todo} setTodos={setTodos} todos={todos}/>
        ))}
    </ul>
    </div>   
  );
}
 
export default Todolist;