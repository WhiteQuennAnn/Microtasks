import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: () => void
    title: string
}

export const Input = () => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }


    return (

        <input value={title} onChange={onChangeInputHandler}/>

    );
};

