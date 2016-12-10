import React from 'react';
import ReactDOM from 'react-dom';


class Main {

    constructor() {
        this.count = 0;
        this.startTimer();
    }

    startTimer() {
        setInterval(() => {
            this.render();
        }, 1000);
    }

    render() {

        this.count++;

        ReactDOM.render(
            <div>
                <h1>Hello World</h1>
                <div>Count: {this.count}</div>
            </div>,
            document.getElementById('root')
        );
    }
}

new Main();