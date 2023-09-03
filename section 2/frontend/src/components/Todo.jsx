import React, { useState } from 'react'

const Todo = () => {
    const [todolist, setTodolist] = useState([]);
    
    const addNewTodo = (e) =>{
        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value)
            // todolist.push(e.target.value);
            setTodolist([...todolist, e.target.value]);
            console.log([...todolist, e.target.value]);
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
                <div className="card-body">
                    {todolist.map( (todo) => {return <div className='d-flex justify-content-between mb-3'>
                        {/* d-flex se ek row me */}
                        <h5>{todo}</h5>
                        <button className="btn btn-danger">Delete</button>
                        </div>
                    })};
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo