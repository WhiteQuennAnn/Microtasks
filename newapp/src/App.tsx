import React, {useState} from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

function App() {

    // let a = 1
    let[a, setA]=useState(1)

    const onclickHandler=() => {
       setA(++a)
        console.log(a)
    }
    // const Button1Foo =(suscriber: string, age:number)=> {
    //     console.log(suscriber,age)
    //
    // }
    // const Button2Foo =(suscriber: string,  age:number)=> {
    //     console.log(suscriber, age)
    // }
    // const Button3Foo =()=> {
    //     console.log("I am stupid button")
    // }

    return (

        <div className={"App"}>
<h1> {a}</h1>
            <button onClick={onclickHandler}> number</button>

            {/*<Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("i am Anna", 23)}/>*/}
            {/*<Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I am Den", 34)}/>*/}
            {/*<Button name={"MyYouTubeChannel-3"} callBack={Button3Foo}/>*/}


        </div>
    );
}

export default App;
