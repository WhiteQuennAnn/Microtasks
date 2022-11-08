import React from 'react';

type carType = {
    manufacturer: string
    model: string
}

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

export const CarComponent = () => {
    return (
        <ul>
            {topCars.map((objectFromCarArray: carType, index) => {
                return (
                    // <li key={objectFromStudentArray.id}>
                    //     <span>
                    //        {objectFromStudentArray.name}
                    //     </span>
                    //     <span> age: {objectFromStudentArray.age} </span>
                    // </li>
                    <li key={index + 1}>
                        <span>
                           {objectFromCarArray.manufacturer}
                        </span>
                        <span> age: {objectFromCarArray.model} </span>
                    </li>
                )

            })}
        </ul>
    )
}