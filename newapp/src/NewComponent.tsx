import React from 'react';

type NewComponentType = {
    students: any
}


export const NewComponent = (props:NewComponentType) => {
    return (
        <div> {props.students}</div>
    )
}