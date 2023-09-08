import React, { useRef, useState } from 'react'

const Chatting = () => {

    const inputRef = useRef(null);

    const [messageList, setMessageList] = useState([
        { text : 'hello', sent:false},
        { text : 'ha bhai sahab', sent:true},
        { text : 'kal kon sa exam hai',sent:false},
        { text : 'pta chale toh btana',sent:true}
    ]);

    const sendMessage = () => {
        const messageText = inputRef.current.value;
        console.log(messageText);
        setMessageList([...messageList, {text: messageText, sent : true}])
        inputRef.current.value = '';
    }

  return (
    <div className='bg-secondary'>
        <div className="container py-4 ">
            <h1 className='mb-3 text-center text-white bg-black w-25 mx-auto rounded py-3 fw-semibold'>My Messenger</h1>
            <div className="card w-50 mx-auto">
                <div className="card-body chat-container rounded">
                    {
                        messageList.map((message) => {
                            return <div className={`msg ${message.sent ? 'msg-sent': 'msg-rec'}`}>{message.text}</div>
                        })
                    }
                </div>
                <div className="card-footer">
                    <div className="input-group">
                        <input type="text" className="form-control" ref= {inputRef} />
                        <button onClick={sendMessage} className="btn btn-dark"><i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatting;