import React from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

function App() {
    const Button1Foo =()=> {

    }
    const Button2Foo =()=> {

    }

    return (

        <div className={"App"}>

            <Button name={"MyYouTubeChannel-1"} callBack={Button1Foo}/>
            <Button name={"MyYouTubeChannel-2"} callBack={Button2Foo}/>
            <Button name={"Delete"}/>

        </div>
    );
}

export default App;
