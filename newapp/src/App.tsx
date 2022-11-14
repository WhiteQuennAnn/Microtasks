import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";


function App () {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const addMessage =() => {
        console.log("afgvsfgbdghbd")
    }
    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
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
