import React, {MouseEvent} from 'react';

import './App.css';

function App() {
 //    const myFirstSubscriber =(event: MouseEvent<HTMLButtonElement) => {
 //        console.log("Hello, i am Tanya")
 //    }
 // const mySecondSubscriber =(event: MouseEvent<HTMLButtonElement) => {
 //        console.log("Hello, i am POl")
 //    }
 const onClickHandler=(name: string)=> {
     console.log(name)
 }




    return (
        <div className={"App"}>
        {/*<button onClick={(event)=>{console.log("Hello")}}> MyYouTubeChannel-1</button>*/}
        <button onClick={(event: MouseEvent<HTMLButtonElement) =>onClickHandler(name: "Lila")}> MyYouTubeChannel-1</button>
        <button onClick={ (event: MouseEvent<HTMLButtonElement) =>onClickHandler(name: "Juy")}> MyYouTubeChannel-2</button>
        </div>
    );
}

export default App;
