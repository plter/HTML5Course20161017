import React from 'react';
import ReactDOM from 'react-dom';


var count = 0;

function render() {
    ReactDOM.render(
        <div>
            <h1>Hello World</h1>
            <div>Count:{count}</div>
        </div>,
        document.getElementById('root')
    );
}

setInterval(function () {
    count++;

    render();
}, 1000);