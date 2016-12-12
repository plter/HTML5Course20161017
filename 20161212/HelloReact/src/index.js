import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";


function HelloWorld() {
    return <h1>Hello</h1>;
}

ReactDOM.render(
    <Clock backgroundColor="green"/>,
    document.querySelector("#root")
);

