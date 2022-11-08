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
    return (
        <ul>
            {props.students.map((objectFromStudentArray: StudentType, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>
                           {objectFromStudentArray.name}
                        </span>
                        <span> age: {objectFromStudentArray.age} </span>

                    </li>
                )

            })}
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}