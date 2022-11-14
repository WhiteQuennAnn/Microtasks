import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";


function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')

    // const addMessage = (title: string) => {
    //     let newMessage = {message: title}
    //     setMessage([newMessage, ...message])
    // }
    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={() => {
            }}/>

            {/*<FullInput addMessage={addMessage}/>*/}
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
