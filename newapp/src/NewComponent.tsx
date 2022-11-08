import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}


type NewComponentType = {
    students: Array<StudentType>
}


export const NewComponent = (props: NewComponentType) => {
    debugger
    return (
        <div> {props.students}</div>
    )
}