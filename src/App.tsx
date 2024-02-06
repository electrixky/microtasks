import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            <div>
                {
                    message.map((el,index)=>{
                        return <li key={index}>{el.message}</li>
                    })
                }
            </div>
        </div>
    );
}

export default App;