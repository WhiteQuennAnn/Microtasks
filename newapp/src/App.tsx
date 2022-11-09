import React from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

function App() {
    const Button1Foo =(suscriber: string)=> {
        console.log(suscriber: string)
    }
    const Button2Foo =(suscriber: string)=> {
        console.log(suscriber: string)
    }

    return (

        <div className={"App"}>

            <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("i am Anna")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I am Den")}/>


        </div>
    );
}

export default App;
