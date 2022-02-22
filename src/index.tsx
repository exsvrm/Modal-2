import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/index";
import Home_Navbar from "./components/home/navbar/index";
import Translate from "./components/home/navbar/translate";
import reportWebVitals from "./reportWebVitals";

import "./build.scss";

ReactDOM.render(
    <React.StrictMode>
        <Translate/>
        <Home_Navbar />
        <Home />
        
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();