import React, {MouseEvent} from 'react';

import './App.css';

function App() {
    //    const myFirstSubscriber =(event: MouseEvent<HTMLButtonElement) => {
    //        console.log("Hello, i am Tanya")
    //    }
    // const mySecondSubscriber =(event: MouseEvent<HTMLButtonElement) => {
    //        console.log("Hello, i am POl")
    //    }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    //
    const foo1 = () => {
       //ничего не передавать, но в консоли должно показаться 100200
        console.log (100200)
    }

    const foo2 = (numb:number) => {
        //передать цифру 100200
        console.log (numb)
    }
    return (
        <div className="App">
            {/*<button*/}
            {/*    onClick={(event: MouseEvent<HTMLButtonElement) => onClickHandler(name: "Lila")}> MyYouTubeChannel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement) => onClickHandler(name: "Juy")}> MyYouTubeChannel-2*/}
            {/*</button> <button onClick={(event: MouseEvent<HTMLButtonElement) => onClickHandler(name: "Juy")}> MyYouTubeChannel-3*/}
            {/*</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </div>
    );
}

export default App;
