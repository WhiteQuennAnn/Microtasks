import React, {useState} from 'react';

export const FullInput = () => {
    let [titke,setTitle] = useState()
    return (
        <div>
            <input/>
            <button>+</button>
        </div>
    );
};

