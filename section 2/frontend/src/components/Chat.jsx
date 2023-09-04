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
        <div className="container ">
            <h1 className="text-center my-5">ChatApp</h1>
            <div className="card p-5 w-100">
                <div className="card-header ">
                    <input type="text" className="form-control" onKeyDown={addNewChat}/>
                </div>
                    {/* d-flex se ek row me */}
                <div className="card-body">
                    {chatlist.map( (chat) => {
                        return (
                        <div className='d-flex justify-content-between mb-3'>
                        <h5>{chat}</h5>
                        <button className="btn btn-danger">Send</button>
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