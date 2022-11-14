import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: () => void
}
export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
props.addMessage(title)
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};

