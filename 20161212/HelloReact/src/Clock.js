/**
 * Created by plter on 2016/12/12.
 */

import React from "react";

class Clock extends React.Component {


    constructor(props, context, updater) {
        super(props, context, updater);

        this.state = {timeStr: "00:00:00"};
    }

    timeFormat(num) {
        return (num >= 10 ? "" : "0") + num;
    }

    componentDidMount() {
        this._timerId = setInterval(() => {
            var date = new Date();
            this.setState({
                timeStr: `${this.timeFormat(date.getHours())}:${this.timeFormat(date.getMinutes())}:${this.timeFormat(date.getSeconds())}`
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timerId);
    }

    render() {
        return <div>{this.state.timeStr}</div>;
    }
}

export default Clock;