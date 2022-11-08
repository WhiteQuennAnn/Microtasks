import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import { Body } from './site/Body';
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";

function App() {
    return (
        <>
            <Header title={"New Body"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Body"}/>
            <NewComponent students={"new component"}/>
        </>
    );
}

export default App;
