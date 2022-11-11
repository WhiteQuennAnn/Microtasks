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

export const CarComponent = () => {
    return (
        // <ul>
        //     {topCars.map((objectFromCarArray: carType, index) => {
        //         return (
        //             <div> {index + 1}
        //                 <li>
        //
        //                 <span>
        //                    {objectFromCarArray.manufacturer}
        //                 </span>
        //                     <span> age: {objectFromCarArray.model} </span>
        //                 </li>
        //             </div>
        //         )
        //
        //     })}
        // </ul>
    )
}