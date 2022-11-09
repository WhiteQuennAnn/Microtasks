import React, {useState} from 'react';
import {Button} from "./site/Components/Button";
import './App.css';

type FilterType = "all" | "RUBLS" | "Dollars"

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const[Filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money;
    if (Filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }
    if (Filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }


const onclickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
}
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onclickFilterHandler("all")}> all</button>
                <button onClick={() => onclickFilterHandler("RUBLS")}> ruble</button>
                <button onClick={() => onclickFilterHandler("Dollars")}> dollar</button>
            </div>
        </>
    )

}
export default App;
