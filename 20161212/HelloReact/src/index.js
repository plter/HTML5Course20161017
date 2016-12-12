import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import Clock from "./Clock"


function HelloWorld() {
    return <h1>Hello</h1>;
}

ReactDOM.render(
    <App>
        <Clock/>
    </App>,
    document.querySelector("#root")
);

