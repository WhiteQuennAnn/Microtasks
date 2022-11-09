import React from "react";

type ButtonType ={
    name: string
}
export const Button = (props:ButtonType) => {
    const onclickHandler = () => {
        console.log("I am Anna")
    }
    return (
        <button onClick={onclickHandler}> {props.name} </button>
        )

}