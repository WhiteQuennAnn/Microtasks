import React from 'react';
import {FilterType} from "../../App";

type dzType = {
    banknots: string
    value: number
    number: string

}
type MoneyType = {
    currentMoney: Array<dzType>
    onclickFilterHandler: (nameButton: FilterType) => void
}

export const Dz = (props: MoneyType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onclickFilterHandler("all")}> all</button>
                <button onClick={() => props.onclickFilterHandler("RUBLS")}> ruble</button>
                <button onClick={() => props.onclickFilterHandler("Dollars")}> dollar</button>
            </div>
        </>
    );
};

export default Dz;