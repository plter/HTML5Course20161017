/**
 * Created by plter on 2016/12/12.
 */

import React from "react"

class Student extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "没有名字",
            age: 0
        };
    }

    componentDidMount() {
        window.$.get("data.json").done(data => this.setState(data));
    }

    render() {
        return <div>
            <div>名字：{this.state.name}</div>
            <div>年龄：{this.state.age}</div>
        </div>
    }

}

export default Student;