import React, { useState } from 'react'

const Todo = () => {
    const [todolist, setTodolist] = useState([]);
    
    const addNewTodo = (e) =>{
        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value)
        }
    }
    
  return (
    <div>
        <div className="container">
            <h1 className="text-center my-5">Todo List</h1>
            <div className="card">
                <div className="card-header">
                    <input type="text" className="form-control" onKeyDown={addNewTodo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo