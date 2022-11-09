import React from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

function App() {
    const Button1Foo =(suscriber: string, age:number)=> {
        console.log(suscriber,age)

    }
    const Button2Foo =(suscriber: string,  age:number)=> {
        console.log(suscriber, age)
    }

    return (

        <div className={"App"}>

            <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("i am Anna", 23)}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I am Den", 34)}/>


        </div>
    );
}

export default App;
