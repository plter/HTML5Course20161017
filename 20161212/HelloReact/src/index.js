import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import Clock from "./Clock"
import ClickCount from "./ClickCount"


function HelloWorld() {
    return <h1>Hello</h1>;
}

ReactDOM.render(
    <App>
        <Clock/>
        <ClickCount/>
    </App>,
    document.querySelector("#root")
);

