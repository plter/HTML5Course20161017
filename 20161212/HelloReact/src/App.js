/**
 * Created by plter on 2016/12/12.
 */

import React from "react";
import Student from "./Student"

class App extends React.Component {

    render() {
        return <div>
            {this.props.children}
            <Student/>
        </div>;
    }
}

export default App;