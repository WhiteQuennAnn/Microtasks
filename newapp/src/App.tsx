import React, {MouseEvent} from 'react';

import './App.css';

function App() {
    const myFirstSubscriber =(event: MouseEvent<HTMLButtonElement) => {
        console.log("Hello, i am Tanya")
    }
 const mySecondSubscriber =(event: MouseEvent<HTMLButtonElement) => {
        console.log("Hello, i am POl")
    }




    return (
        <div className={"App"}>
        {/*<button onClick={(event)=>{console.log("Hello")}}> MyYouTubeChannel-1</button>*/}
        <button onClick={myFirstSubscriber}> MyYouTubeChannel-1</button>
        <button onClick={mySecondSubscriber}> MyYouTubeChannel-2</button>

        </div>
    );
}

export default App;
