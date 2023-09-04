import React, { useState } from 'react'

const Todo = () => {
    const [todolist, setTodolist] = useState([]);
    
    const addNewTodo = (e) =>{
        // console.log(e.code);
        if(!e.target.value.trim()) return;
        if(e.code === 'Enter'){
            console.log(e.target.value)
            // todolist.push(e.target.value);
            setTodolist([...todolist, e.target.value]); // add new value to new value 
            console.log([...todolist, e.target.value]); 
            e.target.value= " ";
        }
    };

    const removeTodo = (index) =>{
        console.log(index);
        const temp = todolist;
        temp.splice(index, 1);
        setTodolist([...temp]);
    }
    
  return (
    <div>
        <div className="container">
            <h1 className="text-center my-5">Todo List</h1>
            <div className="card">
                <div className="card-header">
                    <input type="text" className="form-control" onKeyDown={addNewTodo}/>
                </div>
                    {/* d-flex se ek row me */}
                <div className="card-body">
                    {todolist.map( (todo, index) => {
                        return (
                        <div className='d-flex justify-content-between mb-3'>
                        <h5>{todo}</h5>
                        <button className="btn btn-danger" onClick={() => {removeTodo(index)}} >Delete</button>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo;