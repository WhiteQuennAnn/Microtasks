import React from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

function App() {
    const Button1Foo =()=> {
        console.log("i am Anna")
    }
    const Button2Foo =()=> {
        console.log("i am Cot")
    }

    return (

        <div className={"App"}>

            <Button name={"MyYouTubeChannel-1"} callBack={Button1Foo}/>
            <Button name={"MyYouTubeChannel-2"} callBack={Button2Foo}/>


        </div>
    );
}

export default App;
