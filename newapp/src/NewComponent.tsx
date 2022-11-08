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
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>
    )
}