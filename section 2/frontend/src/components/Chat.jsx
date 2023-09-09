import React, { useState } from 'react'

const Chat = () => {
    const [chatlist, setchatlist] = useState([]);
    
    const addNewChat = (e) =>{
        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value)
            setchatlist([...chatlist, e.target.value]);
            console.log([...chatlist, e.target.value]);
        }
    }
    
  return (
    <div>
        <div className="container bg-dark vh-100 w-50 img">
            <h1 className="text-center my-5 text-light fw-bold p-5">ChatApp</h1>
            <div className="card p-5 w-75 mx-auto ">
                <div className="card-header rounded bg-light">
                    <input type="text" className="form-control" onKeyDown={addNewChat}/>
                </div>
                    {/* d-flex se ek row me */}
                <div className="card-body">
                    {chatlist.map( (chat) => {
                        return (
                        <div className='d-flex justify-content-between mb-3'>
                        <h5>{chat}</h5>
                        <button className="btn btn-danger rounded-pill">send</button>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat;