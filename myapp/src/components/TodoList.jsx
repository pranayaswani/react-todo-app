import React, { useState } from 'react'

const TodoList = (props) => {
    console.log("Value of Tasks passed as PROPS",props.todos);
    

    
   
  return (
    <div>
       <h2>Todo List</h2>
       {
        props.todos.map((todo)=>{
            return<>
                <p>{todo}</p>
            </>
        })
       }
    </div>
  )
}

export default TodoList
