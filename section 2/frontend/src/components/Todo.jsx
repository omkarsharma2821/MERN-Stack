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
    <div className='bg vh-100 '>
        <div className="container">
            <h1 className="text-center fw-bold bg-black text-white my-0 rounded w-75 mx-auto py-5">!! My To Do List !!</h1>
            <div className="card w-75 mx-auto p-4">
                <div className="card-header">
                    <input type="text" className="form-control border-4" placeholder='Enter Your Task Here'onKeyDown={addNewTodo}/>
                </div>
                    {/* d-flex se ek row me */}
                <div className="card-body ">
                    {todolist.map( (todo, index) => {
                        return (
                        <div className={`d-flex justify-content-between p-4 ${index%2===0 ? 'bg-body-secondary': ''}`}>
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