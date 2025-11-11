import React, { useState } from 'react'
import TodoList from './TodoList';

const TodoInput = () => {
    const [todo,setTodo] = useState('');
    const [tasks,setTasks] = useState([]);

    const displayTodo = (e)=>{
        setTodo(e.target.value);
        console.log("Value of Todo is",e.target.value);
    }

    const handleClick = ()=>{
        setTasks([...tasks,todo]);
        console.log("Current Value of Tasks is",tasks);
    }

  return (
    <div>
       <label htmlFor="">Add Some Todo</label>
       <input type="text" placeholder='Enter Your Todo Here' value={todo} onChange={(e)=>displayTodo(e)} />
       <div>
            <button onClick={handleClick}>Add Todo</button>
       </div>
       <div>
          
          <TodoList todos={tasks}/>
          
       </div>
    </div>
  )
}

export default TodoInput
