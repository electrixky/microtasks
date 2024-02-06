import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {AddButton} from "./components/AddButton";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState("")
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <AddButton name={"+"} callBack={callbackButtonHandler}/>
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