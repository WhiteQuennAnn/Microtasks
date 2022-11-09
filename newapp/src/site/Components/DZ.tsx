import React from 'react';

const Dz = () => {
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
    );
};

export default Dz;