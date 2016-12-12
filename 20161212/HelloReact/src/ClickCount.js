/**
 * Created by plter on 2016/12/12.
 */

import React from "react"

class ClickCount extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    componentDidMount() {

    }

    btnClickedHandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <div>
            <button onClick={this.btnClickedHandler.bind(this)}>Click me</button>
            <span>点击计数：{this.state.count}</span>
        </div>
    }

}

export default ClickCount;