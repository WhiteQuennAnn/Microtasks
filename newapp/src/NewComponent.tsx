import React from 'react';

type StudentType = {
    manufacturer: string
    model: string
}


// type NewComponentType = {
//     students: Array<StudentType>


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
//     <table>
//     <tr>
//     <th>Month</th>
// <th>Savings</th>
// </tr>
// <tr>
//     <td>January</td>
//     <td>$100</td>
// </tr>
// <tr>
//     <td>February</td>
//     <td>$80</td>
// </tr>
// </table>

export const NewComponent = () => {
    return (
        <ul>
            {topCars.map((objectFromStudentArray: StudentType, index) => {
                return (
                    // <li key={objectFromStudentArray.id}>
                    //     <span>
                    //        {objectFromStudentArray.name}
                    //     </span>
                    //     <span> age: {objectFromStudentArray.age} </span>
                    // </li>
                    <li key={index+1}>
                        <span>
                           {objectFromStudentArray.manufacturer}
                        </span>
                        <span> age: {objectFromStudentArray.model} </span>
                    </li>
                )

            })}
        </ul>
    )
}